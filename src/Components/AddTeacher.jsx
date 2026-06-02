import React from "react";
import { Trash2 } from "lucide-react";

const AddTeacher = ({ name, capacity, classTeacher }) => {
  return (
    <div className="flex justify-between m-3 gap-2">
      <div className="w-2xs p-1">{name}</div>
      <div className="w-2xs p-1">{capacity}</div>
      <div className="w-2xs p-1">{classTeacher}</div>
      <div>
        <button className="bg-red-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-red-700">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default AddTeacher;
