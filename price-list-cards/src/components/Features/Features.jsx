import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Features = ({ feature }) => {
  return (
    <div className="flex ">
      <CheckCircleIcon className="h-6 w-6 pr-2 text-blue-500" />
      <p>{feature}</p>
    </div>
  );
};

export default Features;
