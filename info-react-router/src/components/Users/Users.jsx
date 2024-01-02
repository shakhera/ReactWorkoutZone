import React from "react";
import "./Users.css";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";
const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div className="container">
      <h2>Users : {users.length}</h2>
      <div className="users-container">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
