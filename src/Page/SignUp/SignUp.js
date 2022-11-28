import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import GoogleProvider from "../Shared/GoogleProvider/GoogleProvider";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const { emailAndPasswordSignUp, updateUserProfile } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (token) {
    navigate("/");
  }

  const handleSignUp = (data, e) => {
    emailAndPasswordSignUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("User created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
          })
          .catch((e) => console.log(e));
        console.log(user);
        e.target.reset();
      })
      .catch((e) => console.log(e));
  };

  const saveUser = (name, email, role, verified = false) => {
    const user = { name, email, role, verified };
    fetch("https://laptop-bazar-server-one.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-10">
      <div className="hero-content w-96 flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-center text-4xl mt-7 font-bold">Sign Up</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit(handleSignUp)}>
              {/* ----------name----------  */}

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
                  defaultValue={"buyer"}
                  className="select select-bordered"
                >
                  <option>buyer</option>
                  <option>seller</option>
                </select>
              </div>

              {/* ----------email----------  */}

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

              {/* ----------password----------  */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must contain uppercase, lowercase, number and special character",
                    },
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <p className="text-red-600 mt-2">
                    {errors.password?.message}
                  </p>
                )}

                {/* ----------login route----------  */}

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

              {/* ----------submit button----------  */}

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
            </form>
            <GoogleProvider value={"SIGN UP"}></GoogleProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
