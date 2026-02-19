import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="p-10 flex justify-between items-center w-[80%] mx-auto">
          <div className="flex justify-between w-full">
            <div className="">
              <p className="text-4xl font-bold pb-5">Edutrack</p>
              <p className="text-gray-600">
                1234 demo street, demo city, 12345
              </p>
            </div>
            <div className="">
              <p className="text-4xl font-bold pb-5">Main Office</p>
              <p className="text-gray-600">Ny, 10001, USA</p>
              <p className="text-gray-600">9am - 5pm</p>
            </div>
            <div className="">
              <p className="text-4xl font-bold pb-5">Admission</p>
              <p className="text-gray-600">+11 222 3333</p>
              <p className="text-gray-600">info@edutrack.com</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[80%] mx-auto mt-10">
          <div>
            <p className="text-xl font-bold pb-5">
              Edutrack
              <br />
              <span className="text-gray-500">school management system</span>
            </p>
          </div>
          <div className="flex items-center">
            <ul className="text-gray-600 flex gap-3">
              <li className="hover:text-gray-900 cursor-pointer">About Us</li>
              <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
              <li className="hover:text-gray-900 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-gray-900 cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-5 text-3xl text-blue-500">
              <li className="hover:text-gray-900 cursor-pointer">
                <FaFacebook />
              </li>
              <li className="hover:text-gray-900 cursor-pointer">
                <FaSquareXTwitter />
              </li>
              <li className="hover:text-gray-900 cursor-pointer">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-gray-600 pt-10 justify-center flex">
            copyright © 2025 Edutrack. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
