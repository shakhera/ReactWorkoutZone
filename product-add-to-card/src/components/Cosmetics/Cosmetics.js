import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";
import { getTotal } from "../../utilities/Calculate/Calculate";
// import { add } from "../../utilities/Calculate/Calculate";
// import add from "../../utilities/Calculate/Calculate";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const total = getTotal(cosmetics);
  return (
    <div>
      <h2>Welcome to my Cosmetics webStore </h2>
      <p>Total price of cosmetics: {total}$</p>
      <div className="cosmetics-container">
        {cosmetics.map((cosmetic) => (
          <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
