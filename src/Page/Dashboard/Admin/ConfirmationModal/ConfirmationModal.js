import React from "react";

const ConfirmationModal = ({ handleDeleteBuyer }) => {
  return (
    <>
      <input
        type="checkbox"
        id="deleteConfirmationModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteBuyer()}
              className="btn btn-primary p-0"
            >
              <label
                htmlFor="deleteConfirmationModal"
                className="btn btn-ghost"
              >
                Yes
              </label>
            </button>
            <button className="btn btn-secondary p-0">
              <label
                htmlFor="deleteConfirmationModal"
                className="btn btn-ghost"
              >
                No
              </label>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
