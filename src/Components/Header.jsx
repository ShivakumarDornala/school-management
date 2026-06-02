import { FaGraduationCap } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div className="sticky top-0 z-1 bg-[#f8f9fa] items-center flex justify-center font-[Inter] shadow-md">
      <div className="flex items-center justify-between w-[95%] mx-auto">
        <div className="Logo py-2">
          <p className="flex items-center gap-2 text-xl font-semibold">
            <FaGraduationCap className="text-4xl bg-blue-700 p-1.5 rounded-[50%] text-white" />
            Edutrack
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-3 py-2 text-[15px] cursor-pointer ">
            <li className="hover:text-blue-700 font-medium">Home</li>
            <li className="hover:text-blue-700 font-medium">Dashboard</li>
            <li className="hover:text-blue-700 font-medium">Classes</li>
            <li className="hover:text-blue-700 font-medium">Teachers</li>
            <li className="hover:text-blue-700 font-medium">Students</li>
            <li className="hover:text-blue-700 font-medium">Announcements</li>
          </ul>
        </div>
        <div className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 p-2 text-white rounded-4xl text-[15px] cursor-pointer">
          Login <MdArrowOutward />
        </div>
      </div>
    </div>
  );
};

export default Header;
