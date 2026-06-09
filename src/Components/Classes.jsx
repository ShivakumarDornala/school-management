import React, { useContext } from "react";
import Class from "./Class";
import { ClassContext } from "../ClassContext.jsx";

const Classes = () => {
  const { classes } = useContext(ClassContext);

  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      <div className="w-[98%] mx-auto rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full mx-auto border-separate border-spacing-0">
          <thead>
            <tr className="bg-white text-left">
              <th className="p-4 rounded-tl-2xl">Class Name</th>
              <th className="p-4">Capacity</th>
              <th className="p-4">Class Teacher</th>
              <th className="p-4 text-center rounded-tr-2xl">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {classes.map((item, index) => (
              <Class
                key={item.name}
                name={item.name}
                capacity={item.capacity}
                Teacher={item.Teacher}
                isLast={index === classes.length - 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Classes;
