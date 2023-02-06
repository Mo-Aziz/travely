import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";

import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { RiMenu3Line } from "react-icons/ri";

import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex w-full justify-between items-center h-20 absolute z-10 text-white  mx-2 px-3">
      {/* main logo */}
      <div>
        <p className=" text-3xl md:text-4xl font-extrabold ">TRAVECO</p>
      </div>
      {/* header menu */}
      <ul className=" hidden md:flex  ">
        <li> Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Views</li>
        <li>Book</li>
        <div></div>
      </ul>
      {/* side icons */}
      <div className="hidden md:flex">
        <BiSearch className="mr-4" size={30} />
        <BsPerson size={30} />
      </div>
      {/* hamburger menu */}
      <div className="md:hidden cursor-pointer z-10" onClick={handleNav}>
        {nav ? (
          <VscChromeClose size={30} className=" text-black z-10" />
        ) : (
          <RiMenu3Line size={30} className="fill-white z-10" />
        )}
      </div>
      {/* mobile dropdown menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex text-black flex-col md:hidden"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <p className=" mt-2 pr-2 text-3xl font-extrabold   ">TRAVECO</p>
          <li> Home</li>

          <li className="">Travel</li>
          <li>Views</li>
          <li>Books</li>
          <li>Guides</li>
          <li>Business</li>
          <li>OutDoors</li>
          <li>Education</li>
          <li className="border-none">Destinations</li>
          {/* buttons */}
          <div className="flex flex-col">
            <button className="mb-3">Search</button>
            <button className="mt-3 border-none">Login</button>
          </div>
          <div className="flex flex-row justify-between my-8">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
