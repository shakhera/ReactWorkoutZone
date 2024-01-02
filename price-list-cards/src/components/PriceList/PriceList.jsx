import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div>
      <h2 className="text-7xl text-center  text-purple-950 p-2 mt-4">
        Awesome Affortable Prices
      </h2>
      <div className="grid md:grid-cols-3 gap-3 mx-7">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
