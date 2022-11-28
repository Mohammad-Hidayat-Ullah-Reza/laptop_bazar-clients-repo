import React from "react";

const AllSellersTableRow = ({ seller, i, setId, handleVerifySeller }) => {
  const { _id, name, email, verified } = seller;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{verified ? "verified" : "unverified"}</td>
      <td>
        <button onClick={setId(_id)} className="btn bg-red-700 p-0 btn-sm mr-2">
          <label
            htmlFor="deleteConfirmationModal"
            className="btn btn-sm btn-ghost uppercase w-full h-full"
          >
            delete
          </label>
        </button>
        <button
          onClick={() => handleVerifySeller(_id, email)}
          className="btn bg-primary p-0 btn-sm"
          {...(verified && { disabled: true })}
        >
          verify
        </button>
      </td>
    </tr>
  );
};

export default AllSellersTableRow;
