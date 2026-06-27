import React, { useContext, useState } from "react";
import { useRef } from "react";
import { ClassContext } from "../ClassContext";
import Teachers from "./Teachers";
import { FaPlus } from "react-icons/fa6";

const AddTeacher = () => {
  const { addteacher, editteacher } = useContext(ClassContext);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const addInfo = useRef();
  const addSubjects = useRef();
  const addClasses = useRef();
  const addNumber = useRef();
  const addDetails = useRef();

  const handleEditTeacherSubmit = (classItem) => {
    setEditing(classItem);
    setShowForm(true);
  };

  const handleTeacherSubmit = (e) => {
    e.preventDefault();

    const info = addInfo.current.value;
    const subjects = addSubjects.current.value;
    const classes = addClasses.current.value;
    const number = addNumber.current.value;
    const details = addDetails.current.value;

    if (editing) {
      editteacher(editing.info, info, subjects, classes, number, details);
      setEditing(null);
    } else {
      addteacher(info, subjects, classes, number, details);
    }
    setShowForm(false);
  };

  return (
    <>
      <div className="w-[96%] mx-auto justify-evenly bg-[#fffffff4] p-4 rounded-2xl my-5">
        <div className="w-[96%] mx-auto flex justify-between my-3">
          <h2 className="text-3xl font-bold flex justify-center">
            All Teachers
          </h2>

          <button
            className="w-10 h-10 font-semibold rounded-full bg-blue-500 flex items-center justify-center hover:cursor-pointer"
            onClick={() => {
              setShowForm(true);
              setEditing(null);
            }}
          >
            <FaPlus className="text-white" />
          </button>
        </div>

        {showForm && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => {
                setShowForm(false);
                setEditing(null);
              }}
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="relative bg-white rounded-lg shadow-xl p-6 w-[50%] max-w-4xl">
                <h2 className="mb-4 text-xl font-semibold">
                  {editing ? "Edit Teacher" : "Add Teacher"}
                </h2>

                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditing(null);
                  }}
                  className="absolute top-4 right-4 flex items-center justify-center text-2xl hover:bg-gray-400 px-2 rounded-full cursor-pointer"
                >
                  ×
                </button>

                <form onSubmit={handleTeacherSubmit}>
                  <div className="mb-4">
                    <label className="mb-1 block font-medium">
                      Teacher Information
                    </label>
                    <input
                      type="text"
                      placeholder="Enter teacher name"
                      defaultValue={editing ? editing.info : ""}
                      required
                      ref={addInfo}
                      className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1 block font-medium">Subjects</label>
                    <input
                      type="text"
                      placeholder="Enter subjects"
                      defaultValue={editing ? editing.subjects : ""}
                      required
                      ref={addSubjects}
                      className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1 block font-medium">Classes</label>
                    <input
                      type="text"
                      placeholder="Enter classes"
                      defaultValue={editing ? editing.classes : ""}
                      required
                      ref={addClasses}
                      className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1 block font-medium">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter contact number"
                      defaultValue={editing ? editing.number : ""}
                      required
                      ref={addNumber}
                      className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1 block font-medium">Address</label>
                    <textarea
                      rows={3}
                      placeholder="Enter address details"
                      defaultValue={editing ? editing.details : ""}
                      required
                      ref={addDetails}
                      className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 cursor-pointer"
                    >
                      {editing ? "Update" : "Save"}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </>
        )}
        <Teachers onEdit={handleEditTeacherSubmit} />
      </div>
    </>
  );
};

export default AddTeacher;
