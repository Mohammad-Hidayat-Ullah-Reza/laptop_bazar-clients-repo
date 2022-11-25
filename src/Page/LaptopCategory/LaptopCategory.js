import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import LaptopCard from "./LaptopCard";

const LaptopCategory = () => {
  //   const { categoryName } = useContext(AuthContext);
  const loaderCategories = useLoaderData();
  const categoryName = loaderCategories[0].category;
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/categories/${categoryName}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(categories);
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
          ></LaptopCard>
        ))}
      </div>
    </div>
  );
};

export default LaptopCategory;
