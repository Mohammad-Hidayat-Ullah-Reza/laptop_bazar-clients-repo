import React from "react";

const Article = ({ article }) => {
  const { question, answer } = article;
  return (
    <article className="my-7 hover:shadow-xl p-5 rounded">
      <h4 className="text-xl md:text-2xl text-blue-900 font-bold mb-3">
        # {question}
      </h4>
      <p className="text-md md:text-lg text-justify">{answer}</p>
    </article>
  );
};

export default Article;
