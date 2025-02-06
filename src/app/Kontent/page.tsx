"use client";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Header2 from "../../components/Header2";
import Navbar from "../../components/Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import { useSelector } from "react-redux";

const Konten = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  useEffect(() => {
    setActiveItem("konto");
  }, []);
  const userData = useSelector((state: any) => state.user);
  return (
    <>
      <Header2 />
      <div className="lg:px-40 z-10 -mt-3">
        {" "}
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
      <div className="px-4 sm:px-8 lg:px-40">
        <div className="text-2xl sm:text-3xl mt-10 lg:mt-0 lg:pt-8">
          Konten & Depots
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 pt-5">
          {/* Left Section */}
          <div className="flex flex-row">
            <button className="bg-orange-500 p-2 rounded-full">
              <FiSearch className="text-white w-5 h-5" />
            </button>
            <div className="flex flex-col items-center justify-center">
              <span className="text-sm font-semibold">
                Krypto bald neu bei flatex!
              </span>
              <span className="font-medium text-sm mx-1 text-gray-400">
                Jetzt Wartelisteplatz sichern.
              </span>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-col text-left lg:text-right mt-4 lg:mt-0 bg-white ml-auto">
            <div className="flex justify-end items-center space-x-2">
              <button className="bg-orange-500 p-2">
                <FiSearch className="text-white w-5 h-5" />
              </button>
              <button className="bg-orange-500 p-2">
                <IoReload className="text-white w-5 h-5" />
              </button>
              <button className="bg-orange-500 p-2">
                <BsThreeDots className="text-white w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 mt-4 mb-1" />

        {/* Grid for Portfolio Table */}
        <div className="mt-6 bg-white p-2 w-full overflow-x-auto sm:overflow-x-auto md:overflow-x-auto scroll-smooth">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-black font-bold text-xs p-2 min-w-[1200px]">
            <div className="col-span-7">Konto</div>
            <div className="col-span-2 text-end">
              Saldo/Wert*<p>Verfügbar</p>
            </div>
            <div className="col-span-2 text-end">
              Kreditlinie<p>Beleihungswert</p>
            </div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Row 1 */}
          <div className="grid grid-cols-12 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
            <div className="col-span-7">
              <Link href="/Depot">***774 Depot - {userData.name}</Link>
            </div>
            <div className="col-span-2 text-end">
              590.900 EUR<p>-</p>
            </div>
            <div className="col-span-2 text-end">
              -<p>410.217,17 EUR</p>
            </div>
            <div className="col-span-1">
              <div className="py-2  px-3 mx-5 lg:px-2 m-2 bg-gray-400 text-white lg:mx-7">
                <FaChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Table Row 2 */}
          <div className="grid grid-cols-12 gap-4 text-xs mt-4 p-2 min-w-[1200px]">
            <div className="col-span-7">***767 Cashkonto - {userData.name}</div>
            <div className="col-span-2 text-end">
              1.894,90 EUR<p>1.894,90 EUR</p>
            </div>
            <div className="col-span-2 text-end">
              -<p>-</p>
            </div>
            <div className="col-span-1">
              <div className="py-2 px-3 mx-5 lg:px-2 m-2 bg-gray-400 text-white lg:mx-7">
                <FaChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Konten;
