import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_name, category_desc } = category;
  const navigate = useNavigate();
  const handleCategoryNavigate = () => {
    navigate(`/category/${category_name}`);
  };
  return (
    <div
      onClick={handleCategoryNavigate}
      className="card hover:shadow-2xl shadow-md"
      style={{
        backgroundImage: `url('https://i.ibb.co/wW7z49Z/white-blank-background-texture-design-element-min-1.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="card-body">
        <h2 className="text-2xl font-bold text-blue-900 text-center uppercase">
          {category_name}
        </h2>
        <p className="text-justify">{category_desc}</p>
        <div className="card-actions justify-end">
          <Link to={`/category/${category_name}`} className="btn btn-primary">
            See All<FaArrowRight className="ml-2"></FaArrowRight>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
