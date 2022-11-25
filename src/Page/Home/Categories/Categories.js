import React from "react";
import CategoryCard from "./CategoryCard";

const categoriesData = [
  {
    id: 1,
    category_name: "casual",
    category_desc:
      "Best for day to day use. Recommended for office going person, business, students and casual user etc.",
  },
  {
    id: 2,
    category_name: "gaming",
    category_desc:
      "Best for heavy graphical and cpu usage. Recommended for gamers, creators, designers, streamers etc.",
  },
  {
    id: 3,
    category_name: "premium",
    category_desc:
      "Top of the line products. Recommended for enthusiast, luxurious person, rich person etc.",
  },
];

const Categories = () => {
  return (
    <div id="categories" className="px-10 my-20">
      <h3 className="text-4xl font-bold text-blue-900 text-center my-7">
        Laptop Categories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
