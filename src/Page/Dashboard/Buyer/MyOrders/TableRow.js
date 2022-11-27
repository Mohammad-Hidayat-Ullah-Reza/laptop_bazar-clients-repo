import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ myOrder }) => {
  const { _id, laptop_img, laptop_name, resale_price, payment_status } =
    myOrder;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={laptop_img} alt={laptop_name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{laptop_name}</div>
          </div>
        </div>
      </td>
      <td>{resale_price}</td>
      <th className="flex gap-2 items-center">
        {payment_status ? (
          <button className="btn btn-outline btn-info btn-sm uppercase">
            paid
          </button>
        ) : (
          <Link
            to={`/dashboard/payment/${_id}`}
            className="btn btn-primary btn-sm uppercase"
          >
            Pay
          </Link>
        )}

        <button className="btn btn-secondary btn-sm uppercase">cancel</button>
      </th>
    </tr>
  );
};

export default TableRow;
