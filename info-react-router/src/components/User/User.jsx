import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, phone, id } = user;
  return (
    <div className="user">
      <h2>Name: {name}</h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <Link to={`/user/${id}`}>show me details</Link>
    </div>
  );
};

export default User;
