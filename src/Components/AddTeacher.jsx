import React from "react";
import { Trash2, Edit } from "lucide-react";

const AddTeacher = ({ name, capacity, Teacher }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="p-4 border-b">{name}</td>
      <td className="p-4 border-b">{capacity}</td>
      <td className="p-4 border-b font-semibold">{Teacher}</td>

      <td className="p-4 border-b">
        <div className="flex justify-center gap-2">
          <button className="text-blue-600 hover:bg-blue-100 rounded-full p-2">
            <Edit size={16} />
          </button>

          <button className="text-red-600 hover:bg-red-100 rounded-full p-2">
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AddTeacher;

// <div className="flex justify-between items-center p-4 m-3 gap-2 bg-white border rounded shadow-sm">
//   <div className="flex-1">{name}</div>
//   <div className="flex-1">{capacity}</div>
//   <div className="flex-1">{classTeacher}</div>
//   <div className="flex gap-2">
//     <button className="text-blue-600 hover:bg-blue-100 cursor-pointer rounded-full transition-colors p-2">
//       <Edit size={16} />
//     </button>
//     <button
//       className="text-red-600 hover:bg-red-100 cursor-pointer rounded-full transition-colors p-2"
//       onClick={onDelete}
//     >
//       <Trash2 size={16} />
//     </button>
//   </div>
// </div>

//  <tbody className="divide-y divide-gray-200">
//
//                 <tr
//                   key={name}
//                   className="hover:bg-gray-50 p-1 bg-white odd:bg-gray-100 even:bg-white"
//                 >
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     {capacity}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
//                     {classTeacher}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     <div>
//                       <button className="text-blue-600 hover:bg-blue-100 cursor-pointer rounded-full transition-colors p-2" >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         className="text-red-600 hover:bg-red-100 cursor-pointer rounded-full transition-colors p-2"
//                         onClick={onDelete}
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//
//             </tbody>
