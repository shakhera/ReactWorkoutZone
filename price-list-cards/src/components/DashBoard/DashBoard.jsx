import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const studentMarks = [
    {
      studentId: 1,
      studentName: "Alice",
      mathematics: 85,
      physics: 78,
      chemistry: 92,
    },
    {
      studentId: 2,
      studentName: "Bob",
      mathematics: 76,
      physics: 89,
      chemistry: 91,
    },
    {
      studentId: 3,
      studentName: "Charlie",
      mathematics: 92,
      physics: 82,
      chemistry: 78,
    },
    {
      studentId: 4,
      studentName: "David",
      mathematics: 68,
      physics: 75,
      chemistry: 85,
    },
    {
      studentId: 5,
      studentName: "Eva",
      mathematics: 91,
      physics: 88,
      chemistry: 77,
    },
    {
      studentId: 6,
      studentName: "Frank",
      mathematics: 80,
      physics: 72,
      chemistry: 90,
    },
    {
      studentId: 7,
      studentName: "Grace",
      mathematics: 84,
      physics: 91,
      chemistry: 79,
    },
    {
      studentId: 8,
      studentName: "Hannah",
      mathematics: 77,
      physics: 83,
      chemistry: 88,
    },
    {
      studentId: 9,
      studentName: "Ian",
      mathematics: 89,
      physics: 78,
      chemistry: 86,
    },
    {
      studentId: 10,
      studentName: "Jane",
      mathematics: 73,
      physics: 85,
      chemistry: 92,
    },
    {
      studentId: 11,
      studentName: "Kevin",
      mathematics: 90,
      physics: 94,
      chemistry: 83,
    },
    {
      studentId: 12,
      studentName: "Lily",
      mathematics: 82,
      physics: 79,
      chemistry: 91,
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl mt-4">Students marks line chart</h2>
        <div className="w-16 md:w-32 lg:w-48 ">
          <LineChart width={1200} height={300} data={studentMarks}>
            <Line
              type={"monotone"}
              stroke="#8884d8"
              strokeWidth={3}
              dataKey="mathematics"
            ></Line>
            <Line
              type={"monotone"}
              stroke="#82ca9d"
              strokeWidth={3}
              dataKey="physics"
            ></Line>
            <Line type={"monotone"} strokeWidth={3} dataKey="chemistry"></Line>
            <XAxis dataKey="studentName"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
          </LineChart>
        </div>
      </div>
      {/* 
      <div>
        <h2 className="text-3xl text-center mt-4">Students marks bart chart</h2>
        <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 ">
          <BarChart width={1200} height={200} data={studentMarks} barSize={20}>
            <XAxis
              dataKey="studentName"
              scale="point"
              padding={{ left: 10, right: 10 }}
            ></XAxis>
            <Bar
              dataKey="mathematics"
              fill="#8884d8"
              background={{ fill: "#eee" }}
            ></Bar>
            <Bar
              dataKey="physics"
              fill="#82ca9d"
              background={{ fill: "#eee" }}
            ></Bar>
            <Bar dataKey="chemistry" background={{ fill: "#eee" }}></Bar>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
          </BarChart>
        </div>
      </div> */}
    </div>
  );
};

export default DashBoard;
