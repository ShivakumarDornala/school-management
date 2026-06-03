import React, { useContext } from "react";
import AddTeacher from "./AddTeacher";
import { ClassContext } from "../ClassContext.jsx";

const AddClasses = () => {
  const { teacher } = useContext(ClassContext);

  return (
    <table className="w-[98%] mx-auto bg-gray-100 rounded-2xl">
      <thead className="rounded-2xl">
        <tr className="bg-gray-100 text-left rounded-2xl">
          <th className="p-4 rounded-tl-2xl">Class Name</th>
          <th className="p-4 ">Capacity</th>
          <th className="p-4 ">Class Teacher</th>
          <th className="p-4 text-center rounded-tr-2xl">Actions</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 rounded-2xl">
        {teacher.map((item) => (
          <AddTeacher
            key={item.name}
            name={item.name}
            capacity={item.capacity}
            Teacher={item.Teacher}
          />
        ))}
      </tbody>
    </table>
  );
};

export default AddClasses;
