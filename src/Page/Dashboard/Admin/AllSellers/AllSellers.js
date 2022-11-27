import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import AllSellersTableRow from "./AllSellersTableRow";

const AllSellers = () => {
  const [id, setId] = useState("");
  const [verificationId, setVerificationId] = useState("");

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/seller`);
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteSeller = () => {
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
        toast.success("successfully deleted");
        setId("");
        refetch();
      })
      .catch((e) => console.log(e));
  };

  const handleVerifySeller = (d) => {
    console.log(verificationId);
    fetch(`http://localhost:5000/users/${d}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verified: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("successfully verified seller");
        if (data.modifiedCount > 0) {
          setVerificationId("");
        }
        refetch();
      });
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
            <th className="bg-blue-600 text-white">Status</th>
            <th className="bg-blue-600 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- rows --> */}
          {sellers.map((seller, i) => (
            <AllSellersTableRow
              key={seller._id}
              seller={seller}
              i={i}
              setId={setId}
              setVerificationId={setVerificationId}
              handleVerifySeller={handleVerifySeller}
            ></AllSellersTableRow>
          ))}
        </tbody>
      </table>
      <ConfirmationModal
        handleDeleteSeller={handleDeleteSeller}
      ></ConfirmationModal>
    </div>
  );
};

export default AllSellers;
