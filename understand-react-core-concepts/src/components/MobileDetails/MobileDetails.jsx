import React from "react";

const MobileDetails = (props) => {
  console.log(props);
  return (
    <div>
      <h2>My Mobile is: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
};

export default MobileDetails;
