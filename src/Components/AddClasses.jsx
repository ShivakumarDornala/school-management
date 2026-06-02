import React from "react";

const AddClasses = ({ className, capacity, classTeacher }) => {
  return (
    <div>
      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-gray-50 p-1 bg-white odd:bg-gray-100 even:bg-white">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {className}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {capacity}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
            {classTeacher}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            <div>
              <button className="text-blue-600 hover:bg-blue-100 cursor-pointer rounded-full transition-colors p-2">
                <Edit size={16} />
              </button>
              <button
                className="text-red-600 hover:bg-red-100 cursor-pointer rounded-full transition-colors p-2"
                // onClick={() => handleDelete(cls.className)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default AddClasses;
