import React from "react";

const ConfirmationModal = ({ handleDeleteSeller, handleDeleteBuyer }) => {
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
            Are you sure you want to delete this user?
          </h3>
          <div className="modal-action">
            {handleDeleteSeller && (
              <>
                <button
                  onClick={() => handleDeleteSeller()}
                  className="btn btn-primary p-0"
                >
                  <label
                    htmlFor="deleteConfirmationModal"
                    className="btn btn-ghost"
                  >
                    Yes
                  </label>
                </button>
              </>
            )}
            {handleDeleteBuyer && (
              <>
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
              </>
            )}
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
