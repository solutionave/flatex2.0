"use client";

import React, { useState } from "react";
import { FaChevronDown, FaPencilAlt, FaTimes } from "react-icons/fa";
import Header2 from "../../components/Header2";
import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";

const Zugrif = () => {
  const [activeButton, setActiveButton] = useState("Kontoinhaber");
  const userData = useSelector((state: any) => state.user);
  console.log("user data:", userData);
  return (
    <>
      <Header2 />
      <div className="lg:px-40 z-10 -mt-3">
        <Navbar />
      </div>
      <div className="bg-white pb-6 rounded-lg shadow-md px-4 sm:px-6 md:px-8 lg:px-40">
        {/* Section: Header */}
        <h2 className="text-2xl lg:text-3xl lg:pt-8  lg:mt-0 mt-10">
          Zugriffsberechtigte
        </h2>

        {/* Section: Current Account */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 lg:py-5">
          {/* Left Section */}
          <div>
            <h3 className="text-base font-semibold">Aktuelles Konto</h3>
            <div className="relative mt-1">
              {/* Dropdown */}
              <select className="appearance-none text-gray-700 border rounded px-2 py-1 w-full pr-10">
                <option value="cashkonto">
                  ***767 Cashkonto - {userData.name}
                </option>
              </select>
              {/* Custom Dropdown Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-400 rounded-r">
                <FaChevronDown className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:text-right mt-4 sm:mt-0">
            <p className="text-gray-700">
              Gebuchter Saldo:{" "}
              <span className=" text-black font-semibold">1.894,90 EUR</span>
            </p>
            <p className="text-gray-700">
              Verfügbar:{" "}
              <span className="text-black font-semibold">1.894,90 EUR</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full ">
          {/* Kontoinhaber Button */}
          <button
            className={`px-4 py-2 sm:px-8 w-full sm:w-[50%] ${
              activeButton === "Kontoinhaber"
                ? "bg-orange-500 text-white"
                : "bg-[#2c2a2b] text-gray-200"
            }`}
            onClick={() => setActiveButton("Kontoinhaber")}
          >
            Kontoinhaber
          </button>
          {/* Bevollmächtigte Button */}
          <button
            className={`py-2 sm:px-8 w-full sm:w-[50%] ${
              activeButton === "Bevollmachtigte"
                ? "bg-orange-500 text-white"
                : "bg-[#2c2a2b] text-gray-200"
            }`}
            onClick={() => setActiveButton("Bevollmachtigte")}
          >
            Bevollmächtigte
          </button>
        </div>
      </div>
      <div className="bg-gray-200 px-4 sm:px-6 lg:px-40 py-6">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
          {/* First Column: Kontoinhaber */}
          <div className="w-full sm:w-1/2 mb-4">
            <h3 className="text-lg pt-5">1. Kontoinhaber</h3>
            <p className="text-gray-700">Inhaber</p>
            <div className="flex justify-between items-center py-1">
              <div>
                <p className="text-gray-700">
                  Name
                  <span className="block font-semibold text-black">
                    {userData?.name}
                  </span>
                </p>
              </div>
              <button className="text-gray-500 hover:text-gray-800">
                <FaPencilAlt className="h-3 w-3 text-orange-500" />
              </button>
            </div>
            <div className="flex flex-col py-1">
              <p className="text-gray-700">Kundennummer</p>
              <p className="text-black font-bold">{userData?.kundennummer}</p>
            </div>
            <div className="flex flex-col py-1">
              <p className="text-gray-700">Geburtstag</p>
              <p className="text-black font-bold">{userData?.geburtstag}</p>
            </div>
            <div className="flex justify-between items-center py-1">
              <div>
                <p className="text-gray-700">
                  Risikoklasse
                  <span className="block font-semibold text-black">
                    {userData?.risikoklasse}
                  </span>
                </p>
              </div>
              <button className="text-gray-500 hover:text-gray-800">
                <FaPencilAlt className="h-3 w-3 text-orange-500" />
              </button>
            </div>
            <div className="flex flex-col py-1">
              <p className="text-gray-700">Steuerstatus</p>
              <p className="text-black font-bold ">{userData?.steuerstatus}</p>
            </div>
            <div className="flex justify-between items-center py-1">
              <div>
                <p className="text-gray-700">Steuer-ID</p>
                <p className="block font-semibold text-black">
                  {userData?.steuernummer}
                </p>
              </div>
              <button className="text-gray-500 hover:text-gray-800">
                <FaPencilAlt className="h-3 w-3 text-orange-500" />
              </button>
            </div>
          </div>

          {/* Second Column: Beschäftigungsdaten */}
          <div className="w-full sm:w-1/2 mb-4">
            <div className="flex justify-between items-center py-1 pt-12">
              <div>
                <p className="text-gray-700">Beschäftigungsdaten</p>
              </div>
              <button className="text-gray-500 hover:text-gray-800">
                <FaPencilAlt className="h-3 w-3 text-orange-500" />
              </button>
            </div>
            <div className="flex flex-col py-1">
              <p className="text-gray-700">Berufsgruppe</p>
              <p className="text-black font-bold">{userData?.berufsgruppe}</p>
            </div>
            <div className="flex flex-col py-1">
              <p className="text-gray-700">Branche</p>
              <p className="text-black font-bold">{userData?.branche}</p>
            </div>
            <div className="flex flex-col py-1">
              <p className="text-gray-700">Beruf</p>
              <p className="text-black font-bold">{userData?.beruf}</p>
            </div>
          </div>

          {/* Third Column: Adress and Contact Info */}
          <div className="w-full sm:w-1/2 mb-4">
            <div className="flex justify-between items-center pt-12 py-1">
              <div>
                <p className="text-gray-700">Stammadresse</p>
                <p className=" text-black font-bold">
                  {userData?.stammadresse}
                </p>
                {/* <p className="text-gray-700">01067 Dresden</p>
                <p className="text-gray-700">Deutschland</p> */}
              </div>
              <button className="text-gray-500 hover:text-gray-800">
                <FaPencilAlt className="h-3 w-3 text-orange-500" />
              </button>
            </div>

            <div className="flex justify-between items-center py-1">
              <div>
                <p className="text-gray-700">Postadresse</p>
                {/* <p className="block text-black font-bold">Hauptstr. 23</p> */}
                <p className="text-black font-bold">{userData?.stammadresse}</p>
                {/* <p className="text-gray-700">Deutschland</p> */}
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-800">
                  <FaPencilAlt className="h-3 w-3 text-orange-500" />
                </button>
                <button className="text-orange-500 border-[2px] border-orange-500 rounded-full p-1 hover:bg-orange-600 hover:text-white">
                  <FaTimes className="h-3 w-3" />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center py-1">
              <div>
                <p className="text-gray-700">Privatkontakt</p>
                <p className="block text-black font-bold">Telefon</p>
                <p className="text-gray-700">{userData.telefon}</p>
                <p className="text-black font-bold">Mobil</p>
                <p className="text-gray-700">{userData.mobilfunk}</p>
                <p className="text-black font-bold">eMail</p>
                <p className="text-gray-700">{userData.email}</p>
                <p className="text-black font-bold">Geschäftskontakt</p>
                <p className="text-gray-700">{userData.geschaeftskontakt}</p>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-800">
                  <FaPencilAlt className="h-3 w-3 text-orange-500" />
                </button>
                <button className="text-orange-500 border-[2px] border-orange-500 rounded-full p-1 hover:bg-orange-600 hover:text-white">
                  <FaTimes className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zugrif;
