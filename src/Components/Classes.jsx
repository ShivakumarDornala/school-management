import { Trash2, Edit } from "lucide-react";

const classes = [
  {
    className: "1A",
    capacity: "50",
    classTeacher: "Sarah Johnson",
  },
  {
    className: "1B",
    capacity: "23",
    classTeacher: "Michael Chen",
  },
  {
    className: "2A",
    capacity: "45",
    classTeacher: "Emily Rodriguez",
  },
  {
    className: "2B",
    capacity: "34",
    classTeacher: "David Thompson",
  },
  {
    className: "3A",
    capacity: "55",
    classTeacher: "Lisa Anderson",
  },
  {
    className: "3B",
    capacity: "55",
    classTeacher: "James Wilson",
  },
  {
    className: "4A",
    capacity: "50",
    classTeacher: "Maria Garcia",
  },
  {
    className: "4B",
    capacity: "45",
    classTeacher: "Robert Brown",
  },
  {
    className: "5A",
    capacity: "50",
    classTeacher: "Jennifer Lee",
  },
  {
    className: "5B",
    capacity: "34",
    classTeacher: "Christopher Davis",
  },
  {
    className: "6A",
    capacity: "50",
    classTeacher: "Amanda White",
  },
  {
    className: "6B",
    capacity: "50",
    classTeacher: "Kevin Martinez",
  },
  {
    className: "7A",
    capacity: "30",
    classTeacher: "Rachel Taylor",
  },
  {
    className: "7B",
    capacity: "30",
    classTeacher: "Thomas Jackson",
  },
  {
    className: "8A",
    capacity: "50",
    classTeacher: "Nicole Smith",
  },
  {
    className: "9A",
    capacity: "55",
    classTeacher: "Daniel Miller",
  },
  {
    className: "9B",
    capacity: "50",
    classTeacher: "Jessica Clark",
  },
  {
    className: "10A",
    capacity: "34",
    classTeacher: "Matthew Lewis",
  },
  {
    className: "10B",
    capacity: "65",
    classTeacher: "Ashley Walker",
  },
];

const Classes = () => {
  return (
    <>
      <div className="w-[98%] p-6 mx-auto">
        <div>
          <h2 className="text-3xl font-bold flex justify-center mb-6">
            Classes
          </h2>
        </div>
        <div>
          <table className="w-full bg-white rounded-lg shadow-sm">
            <thead>
              <tr>
                <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                  Class Name
                </th>
                <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                  Capacity
                </th>
                <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900 ">
                  Class Teacher
                </th>
                <th className="px-6 py-4 text-left text-[16px] font-medium text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {classes.map((cls) => (
                <tr
                  key={cls.className}
                  className="hover:bg-gray-50 p-1 bg-white odd:bg-gray-100 even:bg-white"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {cls.className}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {cls.capacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                    {cls.classTeacher}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div>
                      <button className="text-blue-600 hover:bg-blue-100 cursor-pointer rounded-full transition-colors p-2">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:bg-red-100 cursor-pointer rounded-full transition-colors p-2">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Classes;
