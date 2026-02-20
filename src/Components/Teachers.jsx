import React from "react";
import { MessageCircle, Phone, Trash2, Edit } from "lucide-react";
import { FaAddressCard } from "react-icons/fa";

import { Link } from "react-router-dom";

const teachers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    teacherId: "7419380756",
    subjects: "Math, Geometry",
    classes: "1B, 2A, 3C",
    phone: "7283941",
    address: "512 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 2,
    name: "Dean Guerrero",
    email: "elmer@doe.com",
    teacherId: "2304567890",
    subjects: "Physics, Chemistry",
    classes: "5A, 4B, 3C",
    phone: "8027856",
    address: "597 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 3,
    name: "Mike Geller",
    email: "mike@geller.com",
    teacherId: "5534567890",
    subjects: "Biology",
    classes: "5A, 4B, 3C",
    phone: "2744534",
    address: "841 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 4,
    name: "Jay French",
    email: "jay@gmail.com",
    teacherId: "7844567890",
    subjects: "History",
    classes: "5A, 4B, 3C",
    phone: "5481430",
    address: "997 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 5,
    name: "Jane Smith",
    email: "jane@gmail.com",
    teacherId: "1254567890",
    subjects: "Music, History",
    classes: "5A, 4B, 3C",
    phone: "7401901",
    address: "209 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 6,
    name: "Anna Santiago",
    email: "anna@gmail.com",
    teacherId: "2144567890",
    subjects: "Physics",
    classes: "5A, 4B, 3C",
    phone: "7095867",
    address: "775 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 7,
    name: "Allen Black",
    email: "allen@black.com",
    teacherId: "1754567890",
    subjects: "English, Spanish",
    classes: "5A, 4B, 3C",
    phone: "8977388",
    address: "103 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 8,
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    teacherId: "8844567890",
    subjects: "Math, Geometry",
    classes: "5A, 4B, 3C",
    phone: "5652552",
    address: "363 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 9,
    name: "Derek Briggs",
    email: "derek@briggs.com",
    teacherId: "7334567890",
    subjects: "Literature, English",
    classes: "5A, 4B, 3C",
    phone: "16119132",
    address: "313 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&q=80",
  },
  {
    id: 10,
    name: "John Glover",
    email: "john@glover.com",
    teacherId: "8024567890",
    subjects: "Biology",
    classes: "5A, 4B, 3C",
    phone: "10571924",
    address: "939 Main St, Anytown, USA",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&q=80",
  },
];

export const Teachers = () => {
  return (
    <div className="w-[98%] p-6 mx-auto">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold flex justify-center mb-6">
          Teachers
        </h2>
        <div className="bg-white rounded-lg shadow-sm">
          <div className="">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                    Info
                  </th>
                  <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                    Teacher ID
                  </th>
                  <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                    Subjects
                  </th>
                  <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                    Classes
                  </th>
                  <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                    Address
                  </th>
                  <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {teachers.map((teacher) => (
                  <tr
                    key={teacher.id}
                    className="hover:bg-gray-50 p-1 bg-white odd:bg-gray-100 even:bg-white"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={teacher.avatar}
                          alt={teacher.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-gray-900">
                            {teacher.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {teacher.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {teacher.teacherId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {teacher.subjects}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-gray-900">
                      {teacher.classes}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {teacher.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {teacher.address}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link to={`/teachers/${teacher.id}`}>
                          <button className="p-2 text-green-600 hover:bg-green-100 cursor-pointer rounded-full transition-colors">
                            <Phone size={16} />
                          </button>
                          <button className="p-2 text-blue-600 hover:bg-blue-100 cursor-pointer  rounded-full transition-colors">
                            <FaAddressCard size={18} />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-100 cursor-pointer rounded-full transition-colors">
                            <Edit size={16} />
                          </button>
                        </Link>
                        {/* <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                          <MessageCircle size={16} />
                        </button> */}
                        {/* <button className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors">
                          <Phone size={16} />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors">
                          <Trash2 size={16} />
                        </button> */}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
