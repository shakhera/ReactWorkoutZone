import React, { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";

const Orders = () => {
  const user = useContext(AuthContext);
  return (
    <div>
      <h2>Order page</h2>
      <h2>{user && <span>{user.displayName}</span>}</h2>
    </div>
  );
};

export default Orders;
