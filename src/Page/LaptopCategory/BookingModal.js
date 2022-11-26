import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({
  categoryInfo,
  updateBooked,
  bookedInfo,
  setBookedInfo,
}) => {
  const { user } = useContext(AuthContext);
  const { _id, laptop_img, laptop_name, resale_price } = categoryInfo;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleBooking = (data, e) => {
    console.log(data);
    const myOrdersInfo = {
      buyerPhoneNumber: data.phoneNumber,
      meetingAddress: data.meetingAddress,
      laptop_img,
      laptop_name,
      resale_price,
      payment_status: false,
    };
    fetch("http://localhost:5000/myOrders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myOrdersInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (bookedInfo) {
          updateBooked(_id, bookedInfo, laptop_name);
        }
      })
      .catch((e) => console.log(e));
    e.target.reset();
  };

  const handleBookedInfo = () => {
    setBookedInfo(true);
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
            {/* ----------user name---------- */}
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

              {/* ----------user email---------- */}

              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="user email"
                className="input input-bordered w-full max-w-lg"
                defaultValue={user?.email}
                disabled
              />

              {/* ----------laptop name---------- */}

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

              {/* ----------laptop price---------- */}

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

              {/* ----------phone number---------- */}

              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                type="text"
                placeholder="phone number"
                className="input input-bordered w-full max-w-lg"
              />
              {errors.phoneNumber && (
                <p className="text-red-600 mt-2">
                  {errors.phoneNumber?.message}
                </p>
              )}

              {/* ----------meeting address---------- */}

              <label className="label">
                <span className="label-text">Meeting Address</span>
              </label>
              <input
                {...register("meetingAddress", {
                  required: "Meeting address is required",
                })}
                type="text"
                placeholder="meeting address"
                className="input input-bordered w-full max-w-lg"
              />
              {errors.meetingAddress && (
                <p className="text-red-600 mt-2">
                  {errors.meetingAddress?.message}
                </p>
              )}
            </div>

            {/* ----------submit button---------- */}

            <button
              onClick={handleBookedInfo}
              type="submit"
              className="max-w-lg w-full btn btn-primary mt-5"
            >
              <label htmlFor="booking-modal" className="hover:cursor-pointer">
                Submit
              </label>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
