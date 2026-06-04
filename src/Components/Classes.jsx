import { Trash2, Edit } from "lucide-react";
import { useRef, useContext } from "react";
import { ClassContext } from "../ClassContext.jsx";
import AddClasses from "./AddClasses.jsx";

const Classes = () => {
  const { addteacher } = useContext(ClassContext);
  const addClassName = useRef();
  const addCapacity = useRef();
  const addClassTeacher = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const className = addClassName.current.value;
    const capacity = addCapacity.current.value;
    const classTeacher = addClassTeacher.current.value;

    addteacher(className, capacity, classTeacher);

    addClassName.current.value = "";
    addCapacity.current.value = "";
    addClassTeacher.current.value = "";
  };

  return (
    <>
      <div className="w-[96%] mx-auto justify-evenly  rounded-2xl">
        <div>
          <h2 className="text-3xl font-bold flex justify-center my-6">
            Add New Class
          </h2>
        </div>
        <div className="bg-gray-50">
          <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="Enter Classname"
              className="border border-gray-600 p-2 rounded flex-1 min-w-[150px]"
              ref={addClassName}
              required
            />
            <input
              type="text"
              placeholder="Capacity"
              className="border border-gray-600 p-2 rounded flex-1 min-w-[150px]"
              ref={addCapacity}
              required
            />
            <input
              type="text"
              placeholder="Class Teacher"
              className="border border-gray-600 p-2 rounded flex-1 min-w-[150px]"
              ref={addClassTeacher}
              required
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
      <AddClasses />
    </>
  );
};

export default Classes;
