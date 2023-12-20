import React, { useState } from "react";
import "./Mobile.css";
const Mobile = () => {
  const [mobile, setMobile] = useState(100);
  const decreaseBattery = () => {
    if (mobile > 0) {
      setMobile(mobile - 10);
    }
  };
  return (
    <div className="mobile-container">
      <h3>Mobile Charger Update</h3>
      <h5>Charge: {mobile}%</h5>
      <button onClick={decreaseBattery}>battery down</button>
    </div>
  );
};

export default Mobile;
