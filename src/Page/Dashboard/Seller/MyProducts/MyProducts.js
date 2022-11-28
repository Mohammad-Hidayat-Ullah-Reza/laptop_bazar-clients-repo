import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";
import MyProductsDeleteModal from "./MyProductsDeleteModal";

const MyProducts = () => {
  const [laptopId, setLaptopId] = useState(null);
  const { user } = useContext(AuthContext);
  const { data: laptops = [], refetch } = useQuery({
    queryKey: ["laptops"],
    queryFn: async () => {
      const res = await fetch(
        `https://laptop-bazar-server-one.vercel.app/allLaptops?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleSetLaptopId = (id) => {
    setLaptopId(id);
  };

  const handleDeleteLaptop = () => {
    if (laptopId) {
      fetch(`https://laptop-bazar-server-one.vercel.app/allLaptops`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ laptopId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Laptop deleted successfully");
            setLaptopId(null);
            refetch();
          }
        })
        .catch((e) => console.log(e));
    }
  };

  const handleAdvertiseLaptop = (id) => {
    fetch(`https://laptop-bazar-server-one.vercel.app/myProducts/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ advertise: "true" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("laptop advertised successfully");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto p-10">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="bg-blue-600 text-white"></th>
            <th className="bg-blue-600 text-white">laptop</th>
            <th className="bg-blue-600 text-white">Category</th>
            <th className="bg-blue-600 text-white">Price</th>
            <th className="bg-blue-600 text-white">Status</th>
            <th className="bg-blue-600 text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- rows --> */}
          {laptops.map((laptop, i) => (
            <tr key={laptop._id}>
              <th>{i + 1}</th>
              <td>{laptop.laptop_name}</td>
              <td>{laptop.category}</td>
              <td>{laptop.resale_price} Tk</td>
              <td>{laptop.salesStatus}</td>
              <th className="flex gap-2 items-center">
                <button
                  onClick={() => handleAdvertiseLaptop(laptop._id)}
                  className="btn btn-primary btn-sm uppercase"
                  {...(laptop.advertise === "true" && { disabled: true })}
                >
                  Advertise
                </button>
                <button
                  onClick={() => handleSetLaptopId(laptop._id)}
                  className="btn bg-red-700 p-0 btn-sm mr-2"
                >
                  <label
                    htmlFor="deleteLaptop"
                    className="btn btn-sm btn-ghost uppercase w-full h-full"
                  >
                    delete
                  </label>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <MyProductsDeleteModal
        handleDeleteLaptop={handleDeleteLaptop}
      ></MyProductsDeleteModal>
    </div>
  );
};

export default MyProducts;
