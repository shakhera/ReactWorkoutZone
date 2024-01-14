import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div className=" ">
      <Nav className="fs-5 m-3 ">
        <Link to="/" className="mx-5 text-decoration-none">
          Home
        </Link>
        <Link to="/register" className="mx-5 text-decoration-none">
          Register
        </Link>
        <Link to="/signup" className="mx-5 text-decoration-none">
          SignUp
        </Link>
        <Link to="/login" className="ms-5 text-decoration-none">
          Login
        </Link>
      </Nav>
    </div>
  );
};

export default Header;
