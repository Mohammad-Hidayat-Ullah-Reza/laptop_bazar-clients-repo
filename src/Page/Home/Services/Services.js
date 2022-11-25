import { useQuery } from "@tanstack/react-query";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch("http://localhost:5000/services").then((res) => res.json()),
  });

  return (
    <div className="px-10 my-10">
      <h3 className="text-4xl font-bold text-blue-900 text-center mb-7">
        Our Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
