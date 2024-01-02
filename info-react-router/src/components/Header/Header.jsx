import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLink from "../ActiveLink/ActiveLink";
const Header = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/about">About</ActiveLink>
        <ActiveLink to="/users">Users</ActiveLink>
        <ActiveLink to="/posts">Posts</ActiveLink>
        <ActiveLink to="/contact">Contact</ActiveLink>
      </nav>
    </div>
  );
};

export default Header;
