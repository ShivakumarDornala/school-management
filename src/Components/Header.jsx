import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { MdLogin } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="h-screen w-52 bg-blue-700 flex flex-col justify-between shadow-lg sticky left-0 top-0">
      <div>
        <div className="font-bold text-3xl text-[#fffffc] py-8 px-6">
          Edutrack
        </div>
        <ul className="flex flex-col gap-2 text-[#fffffc]">
          <Link
            to="/"
            className="flex items-center gap-3 py-2 px-4 rounded hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            <AiFillHome />
            Home
          </Link>
          <Link
            to="/dashboard"
            className="flex items-center gap-3 py-2 px-4 rounded hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            <RxDashboard />
            Dashboard
          </Link>
          <Link
            to="/classes"
            className="flex items-center gap-3 py-2 px-4 rounded hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            <SiGoogleclassroom />
            Classes
          </Link>
          <Link
            to="/teachers"
            className="flex items-center gap-3 py-2 px-4 rounded hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            <BsPeopleFill />
            Teachers
          </Link>
          <Link
            to="#"
            className="flex items-center gap-3 py-2 px-4 rounded hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            <FaChalkboardTeacher />
            Students
          </Link>
          <a
            href="#"
            className="flex items-center gap-3 py-2 px-4 rounded hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            <GrAnnounce />
            Announcements
          </a>
        </ul>
      </div>
      <div className="mb-8 px-6">
        <button className="flex items-center gap-2 text-[#fffffc] bg-blue-800 px-4 py-2 rounded hover:bg-blue-900 transition-colors duration-200 w-full justify-center cursor-pointer">
          Log in
          <MdLogin />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
