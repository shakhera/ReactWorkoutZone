import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user && user.uid) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-56 mt-10 ml-10"></progress>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRouter;
