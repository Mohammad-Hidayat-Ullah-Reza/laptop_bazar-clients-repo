import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { emailAndPasswordLogIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data, e) => {
    emailAndPasswordLogIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
      })
      .catch((e) => console.log(e));
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
                <p className="text-red-600 mt-2">{errors.password?.message}</p>
              )}

              {/* ----------signup route----------  */}

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

            {/* ----------submit button----------  */}

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
