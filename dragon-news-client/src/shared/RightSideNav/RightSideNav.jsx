import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import bg1 from "../../assets/bg1.png";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h3>Login With</h3>
        <div>
          <Button className="mb-2 w-75" variant="outline-primary">
            <FaGoogle /> Login with Google
          </Button>
          <Button className=" mb-4 w-75" variant="outline-primary">
            <FaGithub />
            Login with GitHub
          </Button>
        </div>
      </div>
      <div>
        <h3>Find Us On</h3>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaLinkedin></FaLinkedin> linkedIn
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div className="mt-5" style={{ backgroundImage: `url(${bg1})` }}>
        <h4 className="text-white text-center fs-2 font-bold pt-5">
          Create an Amazing Newspaper
        </h4>
        <p className="text-white px-5 pt-5">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <div className="pt-5 pb-5 d-flex justify-content-center ">
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
