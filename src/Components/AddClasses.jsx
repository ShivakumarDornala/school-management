import React, { useContext } from "react";
import AddTeacher from "./AddTeacher";
import { ClassContext } from "../ClassContext.jsx";

const AddClasses = () => {
  const { teacher } = useContext(ClassContext);

  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      <div className="w-full rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-white text-left">
              <th className="p-4 rounded-tl-2xl">Class Name</th>
              <th className="p-4">Capacity</th>
              <th className="p-4">Class Teacher</th>
              <th className="p-4 text-center rounded-tr-2xl">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {teacher.map((item, index) => (
              <AddTeacher
                key={item.name}
                name={item.name}
                capacity={item.capacity}
                Teacher={item.Teacher}
                isLast={index === teacher.length - 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddClasses;
