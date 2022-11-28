import React from "react";

const MyProductsDeleteModal = ({ handleDeleteLaptop }) => {
  return (
    <div>
      <input type="checkbox" id="deleteLaptop" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete?
          </h3>
          <div className="modal-action">
            <button
              onClick={handleDeleteLaptop}
              className="btn btn-primary p-0"
            >
              <label
                htmlFor="deleteLaptop"
                className="btn btn-sm btn-ghost uppercase w-full h-full"
              >
                Yes
              </label>
            </button>
            <label htmlFor="deleteLaptop" className="btn btn-secondary">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductsDeleteModal;
