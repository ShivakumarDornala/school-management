import React from "react";
import { BsThreeDots } from "react-icons/bs";
import Studentchart from "./Studentchart";
import Attendencechart from "./Attendencechart";
import Expensivechart from "./Expensivechart";
import Calender from "./Calender";
import "react-calendar/dist/Calendar.css";
import Events from "./Events";
import Exams from "./Exams";

const Dashboard = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold flex justify-center my-5">
          Dashboard
        </h2>
      </div>
      <div className="flex justify-between items-center p-3 shadow-md">
        <div className="w-[70%] mx-auto my-5">
          <div>
            <div>
              <div className="flex justify-evenly">
                <div className="bg-amber-100 p-3 rounded-2xl w-fit">
                  <div className="flex items-center gap-16 mb-2">
                    <p className="bg-white text-green-800 p-0.5 rounded">
                      2024/25
                    </p>
                    <p>
                      <BsThreeDots />
                    </p>
                  </div>
                  <div className="">
                    <p className="text-2xl font-semibold mb-4">2069</p>
                    <p className="text-gray-500">Students</p>
                  </div>
                </div>
                <div className="bg-purple-100 p-3 rounded-2xl w-fit">
                  <div className="flex items-center gap-16 mb-2">
                    <p className="bg-white text-green-800 p-0.5 rounded">
                      2024/25
                    </p>
                    <p>
                      <BsThreeDots />
                    </p>
                  </div>
                  <div className="">
                    <p className="text-2xl font-semibold mb-4">52</p>
                    <p className="text-gray-500">Teachers</p>
                  </div>
                </div>
                <div className="bg-red-100 p-3 rounded-2xl w-fit">
                  <div className="flex items-center gap-16 mb-2">
                    <p className="bg-white text-green-800 p-0.5 rounded">
                      2024/25
                    </p>
                    <p>
                      <BsThreeDots />
                    </p>
                  </div>
                  <div className="">
                    <p className="text-2xl font-semibold mb-4">60</p>
                    <p className="text-gray-500">Clubs & Activists</p>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-2xl w-fit">
                  <div className="flex items-center gap-16 mb-2">
                    <p className="bg-white text-green-800 p-0.5 rounded">
                      2024/25
                    </p>
                    <p>
                      <BsThreeDots />
                    </p>
                  </div>
                  <div className="">
                    <p className="text-2xl font-semibold mb-4">10+</p>
                    <p className="text-gray-500">Classes</p>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="m-3 flex-col gap-2">
            <div className="flex">
              <div className="bg-[#fff]  w-[30%] h-full">
                <Studentchart />
              </div>
              <div className="bg-[#fff]  w-[70%] h-[383px]">
                <Attendencechart />
              </div>
            </div>
            <div className="">
              <div className="bg-[#fff]  w-full h-[383px]">
                <Expensivechart />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] my-2">
          <div>
            <div className="text-gray-500">
              <Calender />
            </div>
            <div className="mt-5 my-2">
              <Events />
            </div>
            <div className="mt-5 my-2">
              <Exams />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
