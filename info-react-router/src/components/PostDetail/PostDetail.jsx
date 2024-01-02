import React from "react";
import "./PostDetail.css";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const postDetails = useLoaderData();
  console.log(postDetails);
  const { userId, body, title } = postDetails;

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="post-details">
      <h2>details about your post {userId}</h2>
      <h4>Title: {title}</h4>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack} className="btn-go-back">
        Go Back
      </button>
    </div>
  );
};

export default PostDetail;
