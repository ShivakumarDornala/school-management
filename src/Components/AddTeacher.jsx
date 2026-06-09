import React, { useContext } from "react";
import { useRef } from "react";
import { ClassContext } from "../ClassContext";

const AddTeacher = () => {
  const { addteacher } = useContext(ClassContext);

  const addInfo = useRef();
  const addSubjects = useRef();
  const addClasses = useRef();
  const addNumber = useRef();
  const addDetails = useRef();

  const handleTeacherSubmit = (e) => {
    e.preventDefault();

    const info = addInfo.current.value;
    const subjects = addSubjects.current.value;
    const classes = addClasses.current.value;
    const number = addNumber.current.value;
    const details = addDetails.current.value;

    addteacher(info, subjects, classes, number, details);
  };

  return (
    <>
      <div className="flex w-[98%] mx-auto justify-evenly rounded-2xl">
        <div>
          <h2>Add New Teacher</h2>
        </div>
        <div className="bg-gray-50">
          <form action="POST" onSubmit={handleTeacherSubmit}>
            <input
              type="text"
              placeholder="Info"
              className="border border-gray-600 p-2 rounded flex-1 min-w-[150px]"
              required
              ref={addInfo}
            />
            <input
              type="text"
              placeholder="Enter Subjects"
              className="border border-gray-600 p-2 rounded flex-1 min-w-[150px]"
              required
              ref={addSubjects}
            />
            <input
              type="text"
              placeholder="Enter Classes"
              className="border border-gray-600 p-2 rounded flex-1 min-w-[150px]"
              required
              ref={addClasses}
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="border border-gray-600 p-2 rounded flex-1 min-w-[150px]"
              required
              ref={addNumber}
            />
            <input
              type="text"
              placeholder="Address Deatails"
              className="border border-gray-600 p-2 rounded flex-1 min-w-[150px]"
              required
              ref={addDetails}
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded py-2 px-6 cursor-pointer hover:bg-green-700"
            >
              Add Teacher
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTeacher;
