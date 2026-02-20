import React, { useRef, useEffect } from "react";
import { LuCalendarSearch } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { GrAnnounce } from "react-icons/gr";

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div className="home my-10 w-[90%] mx-auto">
      <div>
        <div className="flex">
          <div className="flex justify-center items-center flex-col flex-1">
            <p className="text-6xl font-semibold">
              Streamline your <br /> school operations
            </p>
            <p className="text-gray-700 text-xl mt-4">
              Streamline school administration with our all-in-one, <br />
              advanced management software.
            </p>
            <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-xl mt-6 hover:bg-blue-500 transition-colors duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/images/BG-Home.png"
              alt=""
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
        <div>
          <p className="flex justify-center items-center text-4xl font-bold my-10">
            Key Features
          </p>
          <div className="flex">
            <div className="w-[200px] border border-gray-400 bg-gray-100 rounded-lg p-4 text-center mx-auto">
              <p className="flex justify-center items-center text-7xl text-blue-500 font-semibold">
                <LuCalendarSearch />
              </p>
              <p className="text-gray-800 text-2xl font-semibold">
                Attendance Tracking
              </p>
              <p className="text-gray-600 text-base">
                Keep track of student attendance effortlessly.
              </p>
            </div>
            <div className="w-[200px] border border-gray-400 bg-gray-100 rounded-lg p-4 text-center mx-auto">
              <p className="flex justify-center items-center text-7xl text-blue-500 font-semibold">
                <MdAttachMoney />
              </p>
              <p className="text-gray-800 text-2xl font-semibold">
                Free Management
              </p>
              <p className="text-gray-600 text-base">
                Manage and track school fees with ease.
              </p>
            </div>
            <div className="w-[200px] border border-gray-400 bg-gray-100 rounded-lg p-4 text-center mx-auto">
              <p className="flex justify-center items-center text-7xl text-blue-500 font-semibold">
                <IoCalendarOutline />
              </p>
              <p className="text-gray-800 text-2xl font-semibold">
                Timaetable Management
              </p>
              <p className="text-gray-600 text-base">
                Create and manage class and school schedules efficiently.
              </p>
            </div>
            <div className="w-[200px] border border-gray-400 bg-gray-100 rounded-lg p-4 text-center mx-auto">
              <p className="flex justify-center items-center text-7xl text-blue-500 font-semibold">
                <TiMessages />
              </p>
              <p className="text-gray-800 text-2xl font-semibold">
                Parent Messaging
              </p>
              <p className="text-gray-600 text-base">
                Enhance communication with parents.
              </p>
            </div>
            <div className="w-[200px] border border-gray-400 bg-gray-100 rounded-lg p-4 text-center mx-auto">
              <p className="flex justify-center items-center text-7xl text-blue-500 font-semibold">
                <GrAnnounce />
              </p>
              <p className="text-gray-800 text-2xl font-semibold">
                <span className="text-[22px]">Announcement</span> Management
              </p>
              <p className="text-gray-600 text-base">
                Track of important announcements and updates.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center text-3xl font-bold my-15">
            Study Edutrack School At Glance
          </p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <p className="text-blue-500 text-5xl font-medium">2k+</p>
              <p className="text-gray-800 text-xl font-medium">
                Students Enrolled
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-blue-500 text-5xl font-medium">50+</p>
              <p className="text-gray-800 text-xl font-medium">
                Qualified Teachers
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-blue-500 text-5xl font-medium">60+</p>
              <p className="text-gray-800 text-xl font-medium">
                Clubs & Activities
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-blue-500 text-5xl font-medium">30+</p>
              <p className="text-gray-800 text-xl font-medium">PTFA Staff</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <video
              className="rounded-lg shadow-lg mt-14 w-[500px] h-[500px] object-fill"
              controls
              ref={videoRef}
            >
              <source src="/images/Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="bg-[#f0f0f0]">
          <div className="flex justify-center items-center flex-col my-15">
            <p className="text-gray-800 text-5xl font-fuzzy w-full">
              <span className="text-blue-500">"</span>
              <span className="italic">
                We aim to create a supportive and inspiring place where every
                student can learn, grow, and prepare for a brighter future.
              </span>
              <span className="text-blue-500">"</span>
            </p>
            <p className="text-gray-800 text-2xl self-start mt-6">
              Charles Bennett - Headmaster
            </p>
          </div>
        </div>
        <div className="flex p-10">
          <p className="text-4xl font-semibold w-[50%] items-center flex">
            Curriculum <br /> Overview
          </p>
          <p className="text-gray-600 text-lg w-[50%]">
            <p className="text-4xl text-blue-600">_____</p>
            The champion school is a place where students are encouraged to
            explore their interests and develop their skills in a supportive
            environment.
          </p>
        </div>

        <div className="flex justify-center gap-8 my-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[350px] flex flex-col items-center hover:scale-105 transition-transform duration-10 cursor-pointer">
            <img
              src="/images/cs.jpg"
              alt="Computer Science"
              className="h-[220px] w-full object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                Computer Science
              </h3>
              <p className="text-gray-600 text-center">
                Hands-on learning about computer science and its applications in
                the real world.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[350px] flex flex-col items-center hover:scale-105 transition-transform duration-10 cursor-pointer">
            <img
              src="/images/Maths.jpg"
              alt="Mathematics"
              className="h-[220px] w-full object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                Mathematics
              </h3>
              <p className="text-gray-600 text-center">
                Engaging with mathematical concepts and problem-solving skills.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[350px] flex flex-col items-center hover:scale-105 transition-transform duration-10 cursor-pointer">
            <img
              src="/images/physics.jpg"
              alt="Physics"
              className="h-[220px] w-full object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Physics</h3>
              <p className="text-gray-600 text-center">
                Exploring the fundamental principles of the universe and their
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 my-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[350px] flex flex-col items-center hover:scale-105 transition-transform duration-10 cursor-pointer">
            <img
              src="/images/Arts.jpg"
              alt="Arts"
              className="h-[220px] w-full object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Arts</h3>
              <p className="text-gray-600 text-center">
                understanding how natural laws and patterns are reflected in
                creative works
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[350px] flex flex-col items-center hover:scale-105 transition-transform duration-10 cursor-pointer">
            <img
              src="/images/biology.jpg"
              alt="Mathematics"
              className="h-[220px] w-full object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">Biology</h3>
              <p className="text-gray-600 text-center">
                Exploring the diversity of life and the processes that sustain
                it.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden w-[350px] flex flex-col items-center hover:scale-105 transition-transform duration-10 cursor-pointer">
            <img
              src="/images/Humanities.jpg"
              alt=""
              className="h-[220px] w-full object-cover"
            />
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                Humanities
              </h3>
              <p className="text-gray-600 text-center">
                Exploring the fundamental principles of human culture and
                society.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full items-center mt-20">
          <div className="w-[50%]">
            <p className="text-5xl font-bold">Explore edutrack</p>
            <p className="text-4xl text-blue-600">_____</p>
          </div>
          <div className="w-[50%]">
            <p className="text-justify text-gray-800">
              Discover a world of knowledge and skills tailored just for you,
              where every lesson inspires growth, curiosity, and a passion for
              lifelong learning. Unlock your full potential with resources and
              opportunities designed to help you succeed at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
