import { Trash2, Edit } from "lucide-react";
import { useRef, useContext, useState } from "react";
import { ClassContext } from "../ClassContext.jsx";
import Classes from "./Classes.jsx";
import { FaPlus } from "react-icons/fa6";

const AddClass = () => {
  const { addclass } = useContext(ClassContext);

  const [showForm, setShowForm] = useState(false);

  const addClassName = useRef();
  const addCapacity = useRef();
  const addClassTeacher = useRef();

  const handleClassSubmit = (e) => {
    e.preventDefault();
    const className = addClassName.current.value;
    const capacity = addCapacity.current.value;
    const classTeacher = addClassTeacher.current.value;

    addclass(className, capacity, classTeacher);

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
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="relative bg-white rounded-lg shadow-xl p-6 w-[50%] max-w-4xl">
                <h2 className="mb-4 text-xl font-semibold">Add Class</h2>

                <button
                  onClick={() => setShowForm(false)}
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
        <Classes />
      </div>
    </>
  );
};

export default AddClass;
