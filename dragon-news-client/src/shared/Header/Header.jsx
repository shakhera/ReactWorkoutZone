import React, { useEffect, useState } from "react";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(moment().format("dddd, MMMM D,  YYYY"));
  }, []);

  return (
    <div className="container mt-1">
      {/* //heading */}
      <div>
        <div className="text-center">
          <img src={logo} alt="" />
          <p>Journalism Without Fear or Favour</p>
          <p>{currentDate}</p>
        </div>
        <div className="d-flex bg-body-tertiary">
          <Button className="bg-danger px-3 py-2 fs-4">Latest</Button>
          <Marquee className="text-danger">
            "Dragon News" is a recommends checking latest news from reputable
            sources or search engines.
          </Marquee>
        </div>
      </div>
      {/* navbar  */}
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">
                <ActiveLink to="/" className="text-decoration-none text-black">
                  Home
                </ActiveLink>
              </Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Career</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#deets">
                <img className="w-25 " src={user} alt="" />
              </Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <Button variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </div>
  );
};

export default Header;
