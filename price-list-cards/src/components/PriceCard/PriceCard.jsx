import React from "react";
import Features from "../Features/Features";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-5 p-6 mx-3 m-2 rounded-md flex flex-col">
      <h1 className="text-center">
        <span className="text-5xl text-purple-950 font-extrabold">
          {price.price}
        </span>
        <span className="text-white font-bold">/mon</span>
      </h1>
      <h1 className="text-center text-3xl font-bold my-6">{price.name}</h1>
      <h2>
        <span className="text-2xl font-bold underline text-white">
          Features:
        </span>
        {price.features.map((feature, inx) => (
          <Features key={inx} feature={feature}></Features>
        ))}
      </h2>
      <button className="w-full text-1xl text-white font-bold bg-green-400 p-2 rounded-md mt-auto hover:bg-green-800">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
