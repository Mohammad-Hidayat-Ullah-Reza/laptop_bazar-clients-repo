import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { BsPatchCheckFill } from "react-icons/bs";

const ServicesCard = ({ service }) => {
  const { service_name, service_desc, icon } = service;
  return (
    <div
      className="card hover:shadow-xl"
      style={{
        backgroundImage: `url('https://i.ibb.co/1n5GxPP/white-brush-stroke-texture-background-min.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <figure className="px-10 pt-10">
        {icon === "RiTeamFill" && (
          <RiTeamFill className="text-5xl text-blue-900"></RiTeamFill>
        )}
        {icon === "BiSupport" && (
          <BiSupport className="text-5xl text-blue-900"></BiSupport>
        )}
        {icon === "BsPatchCheckFill" && (
          <BsPatchCheckFill className="text-5xl text-blue-900"></BsPatchCheckFill>
        )}
        {icon === "FaTruckMoving" && (
          <FaTruckMoving className="text-5xl text-blue-900"></FaTruckMoving>
        )}
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-blue-900">{service_name}</h2>
        <p>{service_desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
