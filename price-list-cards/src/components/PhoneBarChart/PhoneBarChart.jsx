import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
} from "recharts";

const PhoneBarChart = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        // console.log(loadedData);
        const phoneData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfo;
        });
        console.log(phoneData);
        setPhones(phoneData);
      });
  }, []);
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3">
      <BarChart width={500} height={400} data={phones}>
        <Bar dataKey="price" fill="#413ea0"></Bar>
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
};

export default PhoneBarChart;
