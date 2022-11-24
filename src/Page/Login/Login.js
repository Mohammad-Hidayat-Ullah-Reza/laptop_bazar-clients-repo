import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="hero min-h-screen bg-base-200 py-10"
    >
      <div className="hero-content w-96 flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center text-4xl mt-7 font-bold">Login</h2>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <div className="label-text-alt">
                  Don't have an account?
                  <Link
                    to="/signup"
                    className="text-blue-700 font-bold link link-hover "
                  >
                    {" "}
                    Sign Up
                  </Link>
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
