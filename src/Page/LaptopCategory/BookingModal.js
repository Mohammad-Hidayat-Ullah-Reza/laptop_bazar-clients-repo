import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ categoryInfo }) => {
  const { user } = useContext(AuthContext);
  const { laptop_name, resale_price, booked } = categoryInfo;
  const { register, handleSubmit } = useForm();

  const handleBooking = (data, e) => {
    console.log(data);
    e.target.reset();
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-blue-900"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold text-blue-900">Booking Form</h3>
          <form onSubmit={handleSubmit(handleBooking)}>
            <div className="form-control w-full max-w-lg">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                placeholder="user name"
                className="input input-bordered w-full max-w-lg"
                defaultValue={user?.displayName}
                disabled
              />
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                placeholder="user email"
                className="input input-bordered w-full max-w-lg"
                defaultValue={user?.email}
                disabled
              />
              <label className="label">
                <span className="label-text">Laptop Name</span>
              </label>
              <input
                type="text"
                placeholder="laptop name"
                className="input input-bordered w-full max-w-lg"
                defaultValue={laptop_name}
                disabled
              />
              <label className="label">
                <span className="label-text">Laptop Price</span>
              </label>
              <input
                type="text"
                placeholder="laptop price"
                className="input input-bordered w-full max-w-lg"
                defaultValue={resale_price}
                disabled
              />
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phoneNumber", {
                  require: "Phone number is required",
                })}
                type="text"
                placeholder="phone number"
                className="input input-bordered w-full max-w-lg"
              />

              <label className="label">
                <span className="label-text">Meeting Address</span>
              </label>
              <input
                {...register("meetingAddress", {
                  require: "Meeting address is required",
                })}
                type="text"
                placeholder="meeting address"
                className="input input-bordered w-full max-w-lg"
              />
            </div>
            <button className="max-w-lg w-full btn btn-primary mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
