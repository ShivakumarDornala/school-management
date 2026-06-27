import React, { useContext } from "react";
import { Trash2, Edit } from "lucide-react";
import { ClassContext } from "../ClassContext";

export const Teacher = ({
  info,
  subjects,
  classes,
  number,
  details,
  onEdit,
}) => {
  const { deleteteacher } = useContext(ClassContext);
  return (
    <tr className="hover:bg-gray-50 odd:bg-gray-100 even:bg-white">
      <td className="p-4">{info}</td>
      <td className="p-4">{subjects}</td>
      <td className="p-4">{classes}</td>
      <td className="p-4">{number}</td>
      <td className="p-4">{details}</td>

      <td className="p-4 ">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => onEdit({ info, subjects, classes, number, details })}
            className="text-blue-600 hover:bg-blue-100 rounded-full p-2 cursor-pointer"
          >
            <Edit size={16} />
          </button>

          <button
            className="text-red-600 hover:bg-red-100 rounded-full p-2 cursor-pointer"
            onClick={() => deleteteacher(info)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Teacher;
