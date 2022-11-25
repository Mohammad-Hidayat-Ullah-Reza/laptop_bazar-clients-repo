import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/RY5pCdw/network-abstract-background-min.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content mr-0 ml-auto pr-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-blue-900 font-bold text-right">
            Start Selling & Buying Used Laptops Online
          </h1>
          <p className="mb-5 text-blue-900 text-right">
            Whether you are selling or buying used laptops products or online
            services, Laptop Bazar is the easiest way to start.
          </p>
          <div className="flex justify-end items-center">
            <Link to="" className="btn btn-primary mr-7">
              Buy Now
              <FaArrowRight className="ml-2"></FaArrowRight>
            </Link>
            <button className="btn btn-outline btn-info">
              Sell Now<FaArrowRight className="ml-2"></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
