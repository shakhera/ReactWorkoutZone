import React, { useEffect, useState } from "react";
import "./Watch.css";
const Watch = () => {
  const [steps, setSteps] = useState(0);
  const updateSteps = () => {
    const nextSteps = steps + 1;
    setSteps(nextSteps);
  };
  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div
      style={{ border: "2px solid purple", margin: "20px", padding: "20px" }}
    >
      <h3>This is my smart watch!</h3>
      <h4>Current Stepts: {steps}</h4>
      <button onClick={updateSteps}>Click Me</button>
    </div>
  );
};

export default Watch;
