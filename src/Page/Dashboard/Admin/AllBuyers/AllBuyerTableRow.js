import React from "react";

const AllBuyerTableRow = ({ buyer, i }) => {
  const { name, email } = buyer;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button className="btn btn-secondary btn-sm uppercase">cancel</button>
      </td>
    </tr>
  );
};

export default AllBuyerTableRow;
