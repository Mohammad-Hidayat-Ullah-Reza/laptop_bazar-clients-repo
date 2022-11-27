import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import AllBuyerTableRow from "./AllBuyerTableRow";

const AllBuyers = () => {
  const [id, setId] = useState("");

  const { data: buyers = [], refetch } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/buyer`);
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteBuyer = () => {
    fetch(`http://localhost:5000/users`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      })
      .catch((e) => console.log(e));
  };
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
              setId={setId}
            ></AllBuyerTableRow>
          ))}
        </tbody>
      </table>
      <ConfirmationModal
        handleDeleteBuyer={handleDeleteBuyer}
      ></ConfirmationModal>
    </div>
  );
};

export default AllBuyers;
