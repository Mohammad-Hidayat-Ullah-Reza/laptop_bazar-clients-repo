import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="md:flex justify-center items-center p-10">
      <div className="mr-10 md:w-1/2">
        <img
          src="https://i.ibb.co/ZxL7JYW/3828537.jpg"
          alt="404 error with a blue robot"
        />
      </div>
      <div className="text-center md:w-1/2">
        <h3 className="text-4xl font-bold text-blue-900 mb-5">
          OOps!!! Something went wrong.
        </h3>
        <p className="text-xl text-blue-900">
          Please return to{" "}
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
