import React from "react";
import moment from "moment";
import { FaRegCalendarAlt } from "react-icons/fa";

import editorsInsight1 from "../../../assets/editorsInsight1.png";
import editorsInsight2 from "../../../assets/editorsInsight2.png";
import editorsInsight3 from "../../../assets/editorsInsight3.png";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

const EditorsInsight = () => {
  const currentDate = moment().format(" MMMM D, YYYY");
  return (
    <div className="mt-5">
      <h2>Editors Insight</h2>
      <CardGroup>
        <Card className="me-4">
          <Card.Img variant="top" src={editorsInsight1} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <FaRegCalendarAlt></FaRegCalendarAlt> {currentDate}
          </Card.Footer>
        </Card>
        <Card className="me-4">
          <Card.Img variant="top" src={editorsInsight2} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <FaRegCalendarAlt></FaRegCalendarAlt> {currentDate}
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={editorsInsight3} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <FaRegCalendarAlt></FaRegCalendarAlt> {currentDate}
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default EditorsInsight;
