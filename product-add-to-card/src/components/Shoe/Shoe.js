import React from "react";
import { add, multiple } from "../../utilities/Calculate/Calculate";

const Shoe = () => {
  const first = 13;
  const second = 21;
  const sum = add(first, second);
  const result = multiple(first, second);
  return (
    <div>
      <h3>This is Shoes Compo </h3>
      <p>
        result: {result} and total is {sum}
      </p>
    </div>
  );
};

export default Shoe;
