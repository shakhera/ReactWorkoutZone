import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="3">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="6">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Root;
