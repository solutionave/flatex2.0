"use client";
import React, { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import { TimeContext } from "@/providers/TimeProvider";
import { useDispatch } from "react-redux";
import { clearUserData } from "../store/slices/userSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const context = useContext(TimeContext);
  if (!context) return null;
  const { timeMinutes, timeSeconds, resetTimer } = context;
  const handleLogout = () => {
    resetTimer && resetTimer();
    dispatch(clearUserData());
    router.push("/");
  };
  return (
    <nav className="flex justify-between items-center bg-[#2c2a2b] p-4 text-white lg:px-40">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <img
          src="/images/logo.png"
          className="h-10 sm:h-12 w-auto"
          alt="Logo"
        />
      </div>

      {/* Right Section: Search Bar and Logout */}
      <div className="hidden lg:flex items-center space-x-5">
        {/* Search Bar */}
        <div className="flex items-center bg-white px-3 py-0 ">
          <input
            type="text"
            placeholder="WKN, Name, ISIN"
            className="bg-transparent outline-none text-black"
          />
          <FiSearch className="text-gray-400" />
        </div>

        {/* Logout Button */}
        <button
          className="flex items-center bg-orange-500 px-1 py-0"
          onClick={handleLogout} // Call endTime on button click
        >
          <span className="px-1">
            <>Logout</>
          </span>
          <span className="px-2">
            {timeMinutes?.toString().padStart(2, "0")}:
            {timeSeconds?.toString().padStart(2, "0")}
          </span>
          <div className="w-[1px] h-5 bg-white ml-7"></div>
          <RiArrowDropDownLine />
        </button>
      </div>

      {/* Logout for Small Screens */}
      <button
        className="lg:hidden flex items-center bg-orange-500 px-1 py-2 "
        onClick={handleLogout}
      >
        <span className="px-1">
          {" "}
          <>Logout</>
        </span>
        <div className="w-[1px] h-5 bg-white mx-1"></div>
        <RiArrowDropDownLine />
      </button>
    </nav>
  );
};

export default Header;
