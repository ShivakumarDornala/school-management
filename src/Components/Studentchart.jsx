import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const StudentCountData = [
  {
    name: "Total",
    count: 100,
    fill: "#ffffff",
  },
  {
    name: "Girls",
    count: 48,
    fill: "#ffafcc",
  },
  {
    name: "Boys",
    count: 52,
    fill: "#00b4d8",
  },
];

const Studentchart = () => {
  return (
    <div className="bg-[#ffffff] shadow-lg h-full">
      <div className="flex justify-between items-center p-3 rounded-lg ">
        <p className="text-2xl text-gray-900 font-medium">Students</p>
        <p>
          <BsThreeDots />
        </p>
      </div>
      <div className="h-60 relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={30}
            data={StudentCountData}
          >
            <RadialBar
              minAngle={15}
              label={{ position: "insideStart", fill: "#fff" }}
              background
              clockWise
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div>
          <img
            src="/images/MaleFemale.png"
            alt=""
            width={50}
            height={50}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <div className="flex justify-evenly items-center p-3">
        <div>
          <p className="bg-[#00b4d8] rounded-full p-1 w-4 h-4"></p>
          <p className="text-gray-500">Boys</p>
          <p className="text-gray-500">52%</p>
        </div>
        <div>
          <p className="bg-[#ffafcc] rounded-full p-1 w-4 h-4"></p>
          <p className="text-gray-500">Girls</p>
          <p className="text-gray-500">48%</p>
        </div>
      </div>
    </div>
  );
};

export default Studentchart;
