import React from "react";
import { BsThreeDots } from "react-icons/bs";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 50,
    expence: 20,
  },
  {
    name: "Feb",
    income: 33,
    expence: 9,
  },
  {
    name: "Mar",
    income: 20,
    expence: 5,
  },
  {
    name: "Apr",
    income: 40,
    expence: 10,
  },
  {
    name: "May",
    income: 13,
    expence: 15,
  },
  {
    name: "Jun",
    income: 25,
    expence: 10,
  },
  {
    name: "Jul",
    income: 70,
    expence: 20,
  },
  {
    name: "Aug",
    income: 46,
    expence: 5,
  },
  {
    name: "Sep",
    income: 35,
    expence: 10,
  },
  {
    name: "Oct",
    income: 20,
    expence: 12,
  },
  {
    name: "Nov",
    income: 20,
    expence: 12,
  },
  {
    name: "Dec",
    income: 44,
    expence: 30,
  },
];

const Expensivechart = () => {
  return (
    <div className="bg-[#ffffff] shadow-lg h-full mt-3">
      <div className="flex justify-between items-center p-3 rounded-lg ">
        <p className="text-2xl text-gray-900 font-medium">
          Expenses{" "}
          <span className="text-gray-500 text-[12px] font-normal">
            ( Last 12 months in Lakhs)
          </span>
        </p>
        <p>
          <BsThreeDots />
        </p>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#29bf12" />
          <Line type="monotone" dataKey="expence" stroke="#ff4800" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Expensivechart;
