import React from "react";
import "./Posts.css";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Now, you can post anything: {posts.length}</h2>
      <div className="users-container">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
