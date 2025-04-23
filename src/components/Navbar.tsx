"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = ({ activeItem = "", setActiveItem = (item: string) => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };
  return (
    <nav
      className="bg-orange-500 lg:flex flex-wrap"
      aria-label="Main navigation"
    >
      {/* Desktop View */}
      <ul className="lg:flex flex-wrap justify-center items-center sm:justify-start text-white hidden">
        <li
          className={`flex flex-row justify-center items-center hover:bg-white hover:border-red-500 hover:text-red-500 px-3 py-4  ${
            activeItem === "konto"
              ? "bg-white text-red-500"
              : "hover:bg-white hover:text-red-500"
          }`}
        >
          <div className="relative">
            {/* Dropdown Trigger */}
            <button
              className="flex flex-row justify-center items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              Konto & Depot <RiArrowDropDownLine className="text-xl" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute -left-3 w-[152px] z-10 bg-white border border-red-300  shadow-lg text-black">
                <li
                  className="px-3 py-2 cursor-pointer"
                  onClick={() => handleItemClick("konto")}
                >
                  <Link href="/Kontent">Übersicht</Link>
                </li>
                <li className="px-3 py-2 cursor-pointer">Depotbestand</li>
                <li className="px-3 py-2 cursor-pointer">Depotumsätze</li>
                <li className="px-3 py-2 cursor-pointer">Kontoumsätze</li>
                <li className="px-3 py-2 cursor-pointer">Steuerbuchungen</li>
                <li className="px-3 py-2 cursor-pointer">Überweisung</li>
              </ul>
            )}
          </div>
        </li>

        <li className="lg:flex lg:flex-row lg:justify-center lg:items-center hidden sm:block cursor-pointer hover:bg-white hover:text-red-500  hover:border-red-300 px-3 py-4">
          Handel <RiArrowDropDownLine />
        </li>
        <li className="hidden sm:block cursor-pointer hover:bg-white hover:text-red-500  hover:border-red-300 px-2 py-4">
          Krypto
        </li>
        <li className="hidden sm:block cursor-pointer hover:bg-white hover:text-red-500  hover:border-red-300 px-2 py-4">
          Kredit
        </li>

        <button
          className={`flex flex-row justify-center items-center hover:w-40 px-2 py-4 border-red-300  ${
            activeItem === "Dokument"
              ? "bg-white text-red-500 w-32"
              : "hover:bg-white hover:text-red-500"
          }`}
          onClick={() => setIsOpen1(!isOpen1)}
        >
          Post <RiArrowDropDownLine className="text-xl" />
        </button>

        {/* Dropdown Menu */}
        {isOpen1 && (
          <ul className="absolute left-[522px] w-40 top-[118px] z-10 bg-white border border-red-300  shadow-lg text-black ">
            <li
              className="px-1 py-2 cursor-pointer"
              onClick={() => handleItemClick("Dokument")}
            >
              <Link href="/Dokument">Dokumentenarchiv</Link>
            </li>
            <li
              className="px-1 py-2 cursor-pointer"
              onClick={() => handleItemClick("Dokument")}
            >
              E-Mail-Benachrichtigungen
            </li>
            <li
              className="px-1 py-2 cursor-pointer"
              onClick={() => handleItemClick("Dokument")}
            >
              Support/Kontakt
            </li>
          </ul>
        )}
        <Link href="/Services">
          <li
            className={`hidden sm:block cursor-pointer hover:bg-white hover:text-red-500  hover:border-red-300 px-2 py-4 ${
              activeItem === "Service"
                ? "bg-white text-red-500 "
                : "hover:bg-white hover:text-red-500"
            }`}
            onClick={() => handleItemClick("Service")}
          >
            Service
          </li>
        </Link>
        <li className="hidden sm:block cursor-pointer  hover:bg-white hover:text-red-500  hover:border-red-300  px-2 py-4">
          Wechsel zu flatex next
        </li>
      </ul>

      {/* Mobile View */}
      <div className="block lg:hidden justify-end">
        {/* Hamburger Icon */}
        <div
          className="flex justify-end items-center py-2 text-white px-3 ml-auto"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
        >
          <FaBars size={30} />
        </div>

        {/* Conditional rendering of vertical navbar */}
        {isNavbarOpen && (
          <ul className="flex flex-col items-start gap-5 text-white bg-orange-500 p-4">
            <li className="flex flex-row justify-end items-center w-full py-3">
              <div className="relative ml-auto">
                {/* Dropdown Trigger */}
                <button
                  className="flex flex-row justify-start items-center"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Konto & Depot <RiArrowDropDownLine className="text-xl" />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <ul className="absolute right-0 w-80 bg-white border border-red-300 shadow-lg text-black text-end">
                    <li className="px-5 py-2 cursor-pointer">
                      <Link href="/Kontent">Übersicht</Link>
                    </li>
                    <li className="px-5 py-2 cursor-pointer">Depotbestand</li>
                    <li className="px-5 py-2 cursor-pointer">Depotumsätze</li>
                    <li className="px-5 py-2 cursor-pointer">Kontoumsätze</li>
                    <li className="px-5 py-2 cursor-pointer">
                      Steuerbuchungen
                    </li>
                    <li className="px-5 py-2 cursor-pointer">Überweisung</li>
                  </ul>
                )}
              </div>
            </li>

            <li className=" flex flex-row justify-end items-center cursor-pointer w-full py-4">
              Handel <RiArrowDropDownLine className="inline" />
            </li>
            <li className="flex flex-row justify-end items-center cursor-pointer py-4 w-full">
              Krypto
            </li>
            <li className="flex flex-row justify-end items-center cursor-pointer py-4 w-full">
              Kredit
            </li>

            <li className="flex flex-row justify-end items-center cursor-pointer py-4 w-full">
              <div className="w-full flex justify-end">
                <button
                  className="flex flex-row items-center text-white border-red-300"
                  onClick={() => setIsOpen1(!isOpen1)}
                >
                  Post <RiArrowDropDownLine className="text-xl" />
                </button>
              </div>

              {/* Dropdown Menu for Post */}
              {isOpen1 && (
                <ul className="absolute right-4 mt-48 w-80 bg-white border border-red-300 shadow-lg text-black">
                  <li className="px-5 py-4 cursor-pointer text-end ">
                    <Link href="/Dokument">Dokumentenarchiv</Link>
                  </li>
                  <li className="px-5 py-4 cursor-pointer text-end ">
                    E-Mail-Benachrichtigungen
                  </li>
                  <li className="px-5 py-4 cursor-pointer text-end ">
                    Support/Kontakt
                  </li>
                </ul>
              )}
            </li>

            <li
              className="flex flex-row justify-end items-center cursor-pointer w-full py-4"
              onClick={() => handleItemClick("Service")}
            >
              <Link href="/Services">Service</Link>
            </li>
            <li className="flex flex-row justify-end items-center cursor-pointer w-full py-4">
              Wechsel zu flatex next
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
