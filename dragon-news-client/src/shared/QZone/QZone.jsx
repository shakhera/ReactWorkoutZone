import React from "react";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="mt-5 bg-body-tertiary">
      <h2>Q-Zone</h2>
      <div>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;
