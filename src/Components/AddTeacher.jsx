import React from "react";

const AddTeacher = () => {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Classname"
          className="w-2xs border border-gray-600 p-1"
        />
        <input
          type="text"
          placeholder="Capacity"
          className="w-2xs border border-gray-600 cursor-pointer p-1"
        />
        <input
          type="text"
          placeholder="ClassTeacher"
          className="w-2xs border border-gray-600 cursor-pointer p-1"
        />
        <button className="bg-green-600 text-white rounded py-2 px-4 cursor-pointer hover:bg-green-700">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTeacher;
