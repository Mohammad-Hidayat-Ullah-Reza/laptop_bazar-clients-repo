import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import TableRow from "./TableRow";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: myOrders = [], refetch } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myOrders?buyerEmail=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {myOrders.length > 0 ? (
        <div className="text-3xl font-bold p-10">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th className="bg-blue-600 text-white">Laptop </th>
                  <th className="bg-blue-600 text-white">Price</th>
                  <th className="bg-blue-600 text-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- rows  --> */}
                {myOrders.map((myOrder) => (
                  <TableRow key={myOrder._id} myOrder={myOrder}></TableRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-4xl text-center p-10 mt-20 font-bold text-blue-900 uppercase flex justify-center items-center">
          you don't have any order
        </div>
      )}
    </div>
  );
};

export default MyOrders;
