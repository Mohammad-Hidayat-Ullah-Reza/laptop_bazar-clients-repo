import { useQuery } from "@tanstack/react-query";
import React from "react";
import AllBuyerTableRow from "./AllBuyerTableRow";

const AllBuyers = () => {
  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/buyer`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto m-10">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="bg-blue-600 text-white"></th>
            <th className="bg-blue-600 text-white">Name</th>
            <th className="bg-blue-600 text-white">Email</th>
            <th className="bg-blue-600 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- rows --> */}
          {buyers.map((buyer, i) => (
            <AllBuyerTableRow
              key={buyer._id}
              buyer={buyer}
              i={i}
            ></AllBuyerTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
