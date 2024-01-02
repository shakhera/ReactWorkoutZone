import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { userId, title, id } = post;

  const navigate = useNavigate();
  const handleToNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="user">
      <h2>UserId: {userId}</h2>
      <h4>Title: {title}</h4>
      {/* <Link to={`/post/${id}`}>show post details</Link> */}
      <button onClick={handleToNavigate}>Show Details</button>
    </div>
  );
};

export default Post;
