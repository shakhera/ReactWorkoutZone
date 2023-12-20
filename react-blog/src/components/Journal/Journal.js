import React from "react";

const Journal = (props) => {
  return (
    <div>
      <h2>Heading: {props.heading}</h2>
      <p>Author: {props.author}</p>
    </div>
  );
};

export default Journal;
