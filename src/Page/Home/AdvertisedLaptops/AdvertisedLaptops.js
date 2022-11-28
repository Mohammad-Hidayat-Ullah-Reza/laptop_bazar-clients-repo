import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import LaptopCard from "../../LaptopCategory/LaptopCard";

const AdvertisedLaptops = () => {
  const { data: advertisedLaptops = [] } = useQuery({
    queryKey: ["advertisedLaptops"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myProducts?advertise=true`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <>
      {advertisedLaptops.length > 0 && (
        <div className="p-10">
          <h2 className="text-4xl text-blue-900 font-bold text-center mt-10 uppercase">
            Advertised Laptops
          </h2>
          {advertisedLaptops.map((advertisedLaptop) => (
            <LaptopCard
              key={advertisedLaptop._id}
              categoryDetails={advertisedLaptop}
            ></LaptopCard>
          ))}
        </div>
      )}
    </>
  );
};

export default AdvertisedLaptops;
