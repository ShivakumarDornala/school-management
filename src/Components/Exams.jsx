import React from "react";
import { BsThreeDots } from "react-icons/bs";

const exams = [
  {
    id: 1,
    title: "FA - 1 Test",
    date: "2025-08-20",
    description: "FA - 1 Exams for class 1A, 5A, 7A",
  },
  {
    id: 2,
    title: "Mid - 2 Test",
    date: "2025-08-22",
    description: "Mid - 2 Exams for class 6A, 7A",
  },
  {
    id: 3,
    title: "Final Exam",
    date: "2025-08-25",
    description: "Final Exams for 10A, 10B, 10C.",
  },
];

const Exams = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="flex justify-between items-center">
          <p className="text-black p-1 font-semibold">Events</p>
          <p>
            <BsThreeDots />
          </p>
        </div>
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="p-1 bg-white odd:bg-gray-100 even:bg-gray-70"
          >
            <div className="flex justify-between items-center p-1">
              <p className="text-gray-900 font-semibold">{exam.title}</p>
              <p className="text-gray-800">Date: {exam.date}</p>
            </div>
            <div>
              <p className="text-gray-600 p-1">{exam.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exams;
