import { useQuery } from "@tanstack/react-query";
import React from "react";
import Article from "./Article";

const Blog = () => {
  const { data: blog = [] } = useQuery({
    queryKey: ["blog"],
    queryFn: () =>
      fetch("http://localhost:5000/blog").then((res) => res.json()),
  });

  return (
    <div className="px-10">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img
            src="https://i.ibb.co/ThvppF8/20943483-min.jpg"
            className="max-w-lg rounded-lg w-full md:w-1/2"
            alt=""
          />
          <div className="md:w-1/2">
            <h3 className="text-5xl text-center md:text-left font-bold text-blue-900">
              Welcome to Laptop Bazar Blog Page
            </h3>
          </div>
        </div>
      </div>
      {blog.map((article) => (
        <Article key={blog._id} article={article}></Article>
      ))}
    </div>
  );
};

export default Blog;
