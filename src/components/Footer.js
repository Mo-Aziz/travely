import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[30%] bg-gray-100 py-24 my-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center pb-8">
          <h1>TRAVECO</h1>
          <div className="flex  justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div
          className="flex
flex-wrap gap-10 lg:justify-between   lg:gap-6"
        >
          <ul className=" flex flex-col ">
            <li className="border-none">About</li>
            <li className="border-none">Partnerships</li>
            <li className="border-none">Careers</li>
            <li className="border-none">Newsroom</li>
            <li className="border-none">Advertising</li>
          </ul>
          <ul className=" flex flex-col text-left">
            <li className="border-none">Home</li>
            <li className="border-none">Destinations</li>
            <li className="border-none">Travel</li>
            <li className="border-none">View</li>
            <li className="border-none">Book</li>
          </ul>
          <ul className=" flex flex-col text-left ">
            <li className="border-none">About</li>
            <li className="border-none">Partnerships</li>
            <li className="border-none">Careers</li>
            <li className="border-none">Newsroom</li>
            <li className="border-none">Advertising</li>
          </ul>
          <ul className=" flex flex-col ">
            <li className="border-none">About</li>
            <li className="border-none">Partnerships</li>
            <li className="border-none">Careers</li>
            <li className="border-none">Newsroom</li>
            <li className="border-none">Advertising</li>
          </ul>
          <ul className=" flex flex-col ">
            <li className="border-none">About</li>
            <li className="border-none">Partnerships</li>
            <li className="border-none">Careers</li>
            <li className="border-none">Newsroom</li>
            <li className="border-none">Advertising</li>
          </ul>
        </div>
      </div>
      <div>
        {" "}
        <p className="text-center text-gray-500 text-sm pt-12">
          copyright@innovatx2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
