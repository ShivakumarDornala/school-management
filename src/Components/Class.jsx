import React, { useContext } from "react";
import { Trash2, Edit } from "lucide-react";
import { ClassContext } from "../ClassContext";

const Class = ({ name, capacity, Teacher, onEdit }) => {
  const { deleteclass } = useContext(ClassContext);
  return (
    <tr className="hover:bg-gray-50 odd:bg-gray-100 even:bg-white">
      <td className="p-4 ">{name}</td>
      <td className="p-4">{capacity}</td>
      <td className="p-4 font-semibold">{Teacher}</td>

      <td className="p-4 ">
        <div className="flex justify-center gap-2">
          <button
            className="text-blue-600 hover:bg-blue-100 rounded-full p-2 cursor-pointer"
            onClick={() => onEdit({ name, capacity, Teacher })}
          >
            <Edit size={16} />
          </button>

          <button
            className="text-red-600 hover:bg-red-100 rounded-full p-2 cursor-pointer"
            onClick={() => deleteclass(name)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Class;
