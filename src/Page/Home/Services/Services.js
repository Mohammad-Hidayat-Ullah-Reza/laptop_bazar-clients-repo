import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch("http://localhost:5000/services").then((res) => res.json()),
  });

  return (
    <div className="grid grid-cols-4 gap-5 px-10 my-10">
      {services.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
