import React, { useContext } from "react";
import AddTeacher from "./AddTeacher";
import { ClassContext } from "../ClassContext.jsx";

const AddClasses = () => {
  const { addteacher } = useContext(ClassContext);

  return (
    <table className="w-[98%] mx-auto bg-white border rounded-lg shadow-sm">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-4 border-b">Class Name</th>
          <th className="p-4 border-b">Capacity</th>
          <th className="p-4 border-b">Class Teacher</th>
          <th className="p-4 border-b text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {addteacher.map((item) => (
          <AddTeacher
            key={item.id}
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
