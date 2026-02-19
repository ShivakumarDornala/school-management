import React from "react";
import { BsThreeDots } from "react-icons/bs";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 90,
    absent: 10,
  },
  {
    name: "Tue",
    present: 75,
    absent: 25,
  },
  {
    name: "Wed",
    present: 60,
    absent: 40,
  },
  {
    name: "Thur",
    present: 70,
    absent: 30,
  },
  {
    name: "Fri",
    present: 80,
    absent: 20,
  },
  {
    name: "Sat",
    present: 90,
    absent: 10,
  },
];

const Attendencechart = () => {
  return (
    <div className="bg-[#ffffff] shadow-lg h-full">
      <div className="flex justify-between items-center p-3 rounded-lg ">
        <p className="text-2xl text-gray-900 font-medium">
          Attendance{" "}
          <span className="text-gray-500 text-[12px] font-normal">( in %)</span>
        </p>
        <p>
          <BsThreeDots />
        </p>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{
              paddingTop: "10px",
              paddingBottom: "20px",
              paddingLeft: "5px",
            }}
          />
          <Bar
            dataKey="present"
            fill="#29bf12"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
          />
          <Bar
            dataKey="absent"
            fill="#ff4800"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Attendencechart;
