import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

import first from "../../assets/1.png";
import second from "../../assets/2.png";
import third from "../../assets/3.png";
import { Card } from "react-bootstrap";
import moment from "moment";

const LeftSideSpot = () => {
  const currentDate = moment().format(" MMMM D, YYYY");

  return (
    <div>
      <h2>Spots Zone</h2>
      <Card className="mb-4">
        <Card.Img variant="top" src={first} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted pe-4">Sports </small>

          <FaRegCalendarAlt></FaRegCalendarAlt>
          {currentDate}
        </Card.Footer>
      </Card>
      <Card className="mb-4">
        <Card.Img variant="top" src={second} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted pe-4">Sports </small>

          <FaRegCalendarAlt></FaRegCalendarAlt>
          {currentDate}
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={third} />
        <Card.Body>
          <Card.Title>
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted pe-4">Sports </small>

          <FaRegCalendarAlt></FaRegCalendarAlt>
          {currentDate}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default LeftSideSpot;
