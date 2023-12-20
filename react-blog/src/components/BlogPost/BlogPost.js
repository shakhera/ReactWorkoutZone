import React from "react";

const BlogPost = (props) => {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p>{props.author}</p>
    </div>
  );
};

export default BlogPost;
