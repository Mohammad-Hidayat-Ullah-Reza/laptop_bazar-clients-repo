import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import LaptopCard from "./LaptopCard";
import BookingModal from "./BookingModal";
import toast from "react-hot-toast";

const LaptopCategory = () => {
  const [categoryInfo, setCategoryInfo] = useState("");
  const [bookedInfo, setBookedInfo] = useState(false);
  const [refetchInfo, setRefetchInfo] = useState("");
  const loaderCategories = useLoaderData();

  const categoryName = loaderCategories[0].category;

  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/categories/${categoryName}`
      );
      const data = await res.json();
      return data;
    },
  });

  //   updateBooked updates the info in the allLaptop collection that user has booked this laptop
  const updateBooked = (id, booked, laptop_name) => {
    const bookedDoc = {
      booked,
    };
    fetch(`http://localhost:5000/booked/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success(`${laptop_name} successfully Booked`);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="px-10">
      <h3 className="text-4xl font-bold text-blue-900 uppercase text-center mt-20 mb-14">
        {categoryName} Laptops
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <LaptopCard
            key={category._id}
            categoryDetails={category}
            setCategoryInfo={setCategoryInfo}
          ></LaptopCard>
        ))}
        <BookingModal
          categories={categories}
          categoryInfo={categoryInfo}
          bookedInfo={bookedInfo}
          setBookedInfo={setBookedInfo}
          updateBooked={updateBooked}
        ></BookingModal>
      </div>
    </div>
  );
};

export default LaptopCategory;
