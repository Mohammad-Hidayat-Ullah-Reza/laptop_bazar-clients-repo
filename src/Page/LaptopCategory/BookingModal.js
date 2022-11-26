import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider";

const BookingModal = ({ categoryInfo }) => {
  const [bookedInfo, setBookedInfo] = useState(false);
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
          updateBooked(_id, bookedInfo);
        }
      })
      .catch((e) => console.log(e));
    e.target.reset();
  };

  const updateBooked = (id, booked) => {
    const bookedDoc = {
      booked,
    };
    fetch(`http://localhost:5000/booked/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedDoc),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`${laptop_name} successfully Booked`);
      })
      .catch((e) => console.log(e));
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
                name="email"
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
            <button
              onClick={handleBookedInfo}
              type="submit"
              className="max-w-lg w-full btn btn-primary mt-5"
            >
              <label htmlFor="booking-modal">Submit</label>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
