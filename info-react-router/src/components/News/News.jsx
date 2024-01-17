import React from "react";
import { useLoaderData } from "react-router-dom";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2>News: </h2>
    </div>
  );
};

export default News;
