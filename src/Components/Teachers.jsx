import React, { useContext } from "react";
import Teacher from "./Teacher";
import { ClassContext } from "../ClassContext";

const Teachers = () => {
  const { teacher } = useContext(ClassContext);

  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      <div className="w-[98%] mx-auto rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full mx-auto border-separate border-spacing-0">
          <thead>
            <tr className="bg-white text-left">
              <th className="p-4 rounded-tl-2xl">Info</th>
              <th className="p-4">Subjects</th>
              <th className="p-4">Classes</th>
              <th className="p-4 text-center rounded-tr-2xl">Number</th>
              <th className="p-4 text-center rounded-tr-2xl">Details</th>
              <th className="p-4 text-center rounded-tr-2xl">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {teacher.map((item, index) => (
              <Teacher
                key={item.info}
                info={item.info}
                subjects={item.subjects}
                classes={item.classes}
                number={item.number}
                details={item.details}
                isLast={index === teacher.length - 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teachers;
