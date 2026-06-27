import { Trash2, Edit } from "lucide-react";
import { useRef, useContext, useState } from "react";
import { ClassContext } from "../ClassContext.jsx";
import Classes from "./Classes.jsx";
import { FaPlus } from "react-icons/fa6";

const AddClass = () => {
  const { addclass, editclass } = useContext(ClassContext);

  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const addClassName = useRef();
  const addCapacity = useRef();
  const addClassTeacher = useRef();

  const handleEditSubmit = (classItem) => {
    setEditing(classItem);
    setShowForm(true);
  };

  const handleClassSubmit = (e) => {
    e.preventDefault();
    const className = addClassName.current.value;
    const capacity = addCapacity.current.value;
    const classTeacher = addClassTeacher.current.value;

    if (editing) {
      editclass(editing.name, className, capacity, classTeacher);
      setEditing(null);
    } else {
      addclass(className, capacity, classTeacher);
    }

    addClassName.current.value = "";
    addCapacity.current.value = "";
    addClassTeacher.current.value = "";

    setShowForm(false);
  };

  return (
    <>
      <div className="w-[96%] mx-auto justify-evenly bg-[#fffffff4] p-4 rounded-2xl my-5">
        <div className="flex justify-between w-[96%] mx-auto my-3">
          <h2 className="text-3xl font-bold flex justify-start">All Classes</h2>
          <button
            className="w-10 h-10 font-semibold rounded-full bg-blue-500 flex items-center justify-center hover:cursor-pointer"
            onClick={() => setShowForm(!showForm)}
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
                  {editing ? "Edit Class" : "Add Class"}
                </h2>

                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditing(null);
                  }}
                  className="flex items-center justify-center absolute top-4 right-4 text-2xl hover:bg-gray-400 px-2 hover:cursor-pointer hover:rounded-full"
                >
                  ×
                </button>

                <form onSubmit={handleClassSubmit}>
                  <div className="mb-4">
                    <label className="mb-1 block font-medium">Class Name</label>
                    <input
                      type="text"
                      placeholder="Enter class name"
                      name="classname"
                      defaultValue={editing ? editing.name : ""}
                      required
                      className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                      ref={addClassName}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1 block font-medium">Capacity</label>
                    <input
                      type="number"
                      required
                      defaultValue={editing ? editing.capacity : ""}
                      placeholder="Enter capacity"
                      className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                      ref={addCapacity}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="mb-1 block font-medium">
                      Class Teacher
                    </label>
                    <input
                      type="text"
                      required
                      defaultValue={editing ? editing.Teacher : ""}
                      placeholder="Enter teacher name"
                      className="w-full rounded-lg border p-2 outline-none focus:ring-2 focus:ring-blue-500"
                      ref={addClassTeacher}
                    />
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:cursor-pointer hover:bg-blue-600"
                    >
                      {editing ? "Update" : "Save"}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowForm(false);
                        setEditing(null);
                      }}
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
        <Classes onEdit={handleEditSubmit} />
      </div>
    </>
  );
};

export default AddClass;
