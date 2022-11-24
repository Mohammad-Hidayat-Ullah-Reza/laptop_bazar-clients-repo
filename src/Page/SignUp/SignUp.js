import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="hero min-h-screen bg-base-200 py-10"
    >
      <div className="hero-content w-96 flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center text-4xl mt-7 font-bold">Sign Up</h2>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="name"
                placeholder="name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-600 mt-2">{errors.name?.message}</p>
              )}
            </div>

            {/* ----------select----------  */}

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Why are you here?</span>
              </label>
              <select
                {...register("role", { required: true })}
                defaultValue={"Buyer"}
                className="select select-bordered"
              >
                <option>Buyer</option>
                <option>Seller</option>
              </select>
            </div>

            {/* ----------select----------  */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-red-600 mt-2">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600 mt-2">{errors.password?.message}</p>
              )}
              <label className="label">
                <div className="label-text-alt">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-blue-700 font-bold link link-hover "
                  >
                    {" "}
                    Login
                  </Link>
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
