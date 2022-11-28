import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();

  const handleAddLaptop = (data, e) => {
    const {
      conditionType,
      laptopCategory,
      laptopDesc,
      laptopImage,
      laptopName,
      location,
      mobileNumber,
      originalPrice,
      resalePrice,
      usageTime,
    } = data;
    const date = new Date().toLocaleDateString("en-uk");

    const addedLaptopInfo = {
      conditionType,
      category: laptopCategory,
      laptopDesc,
      laptop_img: laptopImage,
      laptop_name: laptopName,
      location,
      sellerMobileNumber: mobileNumber,
      original_price: originalPrice,
      resale_price: resalePrice,
      usage_Time: usageTime,
      post_date: date,
      seller_name: user.displayName,
      seller_email: user.email,
      seller_verified: false,
      salesStatus: false,
    };
    console.log(addedLaptopInfo);
    fetch(`http://localhost:5000/addLaptop`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedLaptopInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("laptop added successfully");
        navigation("/dashboard/myProducts");
      })
      .catch((e) => console.log(e));
    e.target.reset();
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl text-blue-900 text-center font-bold uppercase">
        Add A Used Laptop
      </h2>
      <form
        onSubmit={handleSubmit(handleAddLaptop)}
        className="flex justify-center mt-10"
      >
        <div className="form-control w-full max-w-xs">
          {/* ---------laptop name--------- */}
          <label className="label">
            <span className="label-text">Laptop name</span>
          </label>
          <input
            {...register("laptopName", { required: "laptop name is required" })}
            type="text"
            placeholder="laptop name"
            className="input input-bordered w-full max-w-xs mb-3"
          />

          {/* ---------laptop image--------- */}

          <label className="label">
            <span className="label-text">Laptop image</span>
          </label>
          <input
            {...register("laptopImage", {
              required: "laptop image is required",
            })}
            type="text"
            placeholder="laptop image"
            className="input input-bordered w-full max-w-xs mb-3"
          />

          {/* ---------laptop category--------- */}

          <label className="label">
            <span className="label-text">Laptop Category</span>
          </label>
          <select
            {...register("laptopCategory", {
              required: "laptop category is required",
            })}
            className="select select-bordered"
          >
            <option>casual</option>
            <option>gaming</option>
            <option>premium</option>
          </select>

          {/* ---------resale price--------- */}

          <label className="label">
            <span className="label-text">Resale price</span>
          </label>
          <input
            {...register("resalePrice", {
              required: "resale price is required",
            })}
            type="number"
            placeholder="resale price"
            className="input input-bordered w-full max-w-xs mb-3"
          />

          {/* ---------original price--------- */}

          <label className="label">
            <span className="label-text">Original price</span>
          </label>
          <input
            {...register("originalPrice", {
              required: "original price is required",
            })}
            type="number"
            placeholder="original price"
            className="input input-bordered w-full max-w-xs mb-3"
          />

          {/* ---------condition type--------- */}

          <label className="label">
            <span className="label-text">Condition type</span>
          </label>
          <select
            {...register("conditionType", {
              required: "condition type is required",
            })}
            className="select select-bordered"
          >
            <option>excellent</option>
            <option>good</option>
            <option>fair</option>
          </select>

          {/* ---------mobile number--------- */}

          <label className="label">
            <span className="label-text">Mobile number</span>
          </label>
          <input
            type="number"
            {...register("mobileNumber", {
              required: "mobile number is required",
            })}
            placeholder="mobile number"
            className="input input-bordered w-full max-w-xs mb-3"
          />

          {/* ---------location--------- */}

          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <select
            {...register("location", { required: "location is required" })}
            className="select select-bordered"
          >
            <option>chattogram</option>
            <option>dhaka</option>
            <option>barishal</option>
            <option>khulna</option>
            <option>sylhet</option>
            <option>rangpur</option>
            <option>rajshahi</option>
          </select>

          {/* ---------years of purchase--------- */}

          <label className="label">
            <span className="label-text">Years of purchase</span>
          </label>
          <input
            {...register("usageTime", {
              required: "years of purchase is required",
            })}
            type="number"
            placeholder="years of purchase"
            className="input input-bordered w-full max-w-xs mb-3"
          />

          {/* ---------laptop description--------- */}

          <label className="label">
            <span className="label-text">Laptop description</span>
          </label>
          <textarea
            {...register("laptopDesc", {
              required: "laptop description is required",
            })}
            className="textarea textarea-bordered h-24"
            placeholder="laptop description"
          ></textarea>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Laptop</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;
