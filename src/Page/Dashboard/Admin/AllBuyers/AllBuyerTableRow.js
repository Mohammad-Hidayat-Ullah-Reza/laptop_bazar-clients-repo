import React from "react";

const AllBuyerTableRow = ({ buyer, i, handleSetId }) => {
  const { _id, name, email } = buyer;
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button
          onClick={handleSetId(_id)}
          className="btn bg-red-700 p-0 btn-sm"
        >
          <label
            htmlFor="deleteConfirmationModal"
            className="btn btn-sm btn-ghost uppercase w-full h-full"
          >
            delete
          </label>
        </button>
      </td>
    </tr>
  );
};

export default AllBuyerTableRow;
