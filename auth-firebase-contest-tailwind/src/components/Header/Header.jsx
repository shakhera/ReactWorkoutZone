import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Home
          </Link>
          <Link to="/orders" className="btn btn-ghost text-xl">
            Orders
          </Link>
          <Link to="/register" className="btn btn-ghost text-xl">
            Register
          </Link>
          <Link to="/login" className="btn btn-ghost text-xl">
            Login
          </Link>
          {user?.email && <span>Welcome {user.email}</span>}
          {user?.email ? (
            <button onClick={handleSignOut} className="btn btn-sm">
              LogOut
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">LogIn</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
