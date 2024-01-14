import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import App from "../../App";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-5xl text-red-800 ">Home page</h2>
      <h2> {user && <span>{user.displayName}</span>}</h2>
    </div>
  );
};

export default Home;
