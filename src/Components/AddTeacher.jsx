import React, { useContext, useState } from "react";
import { useRef } from "react";
import { ClassContext } from "../ClassContext";
import Teachers from "./Teachers";
import { FaPlus } from "react-icons/fa6";

const AddTeacher = () => {
  const { addteacher } = useContext(ClassContext);
  const [showForm, setShowForm] = useState(false);

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

    setShowForm(false);
  };

  return (
    <>
      <div className="w-[98%] mx-auto justify-evenly bg-[#fffffff4] p-4 rounded-2xl my-5">
        <div className="w-[98%] mx-auto flex justify-between my-6">
          <h2 className="text-3xl font-bold flex justify-center">
            All Teachers
          </h2>

          <button
            class="w-10 h-10 font-semibold rounded-full bg-blue-500 flex items-center justify-center hover:cursor-pointer"
            onClick={() => setShowForm(!showForm)}
          >
            <FaPlus />
          </button>
        </div>

        {showForm && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowForm(false)}
            />
            <div className="fixed inset-0 z-40 bg-gray-50 gap-1.5 flex items-center justify-center">
              <div className="relative bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-4xl">
                <div>
                  <h2 className="my-3 text-xl font-semibold">Add Teacher</h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex items-center justify-center absolute top-4 right-4 text-2xl hover:bg-gray-400 px-2 hover:cursor-pointer hover:rounded-full"
                  >
                    ×
                  </button>
                </div>
                <form
                  action="POST"
                  onSubmit={handleTeacherSubmit}
                  className="flex gap-2"
                >
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
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600"
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
        <Teachers />
      </div>
    </>
  );
};

export default AddTeacher;
