"use client";
import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Header2 from "./Header2";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import { useSelector } from "react-redux";

const accountData = [
  {
    name: "***774 Depot – Daniel Mehner",
    value: "645.099,13 EUR",
    available: "-",
    credit: "-",
    pledge: "341.903,52 EUR",
  },
  {
    name: "***767 Cashkonto – Daniel Mehner",
    value: "125.064,91 EUR",
    available: "125.064,91 EUR",
    credit: "0,00 EUR",
    pledge: "-",
  },
  {
    name: "***612 Depot – Daniel Mehner",
    value: "455.740,00 EUR",
    available: "-",
    credit: "-",
    pledge: "244.278,04 EUR",
  },
  {
    name: "***782 Cashkonto – Daniel Mehner",
    value: "1.815,72 EUR",
    available: "1.815,72 EUR",
    credit: "0,00 EUR",
    pledge: "-",
  },
  {
    name: "***605 Depot – Daniel Mehner",
    value: "226.267,22 EUR",
    available: "-",
    credit: "-",
    pledge: "104.718,02 EUR",
  },
  {
    name: "***618 Cashkonto – Daniel Mehner",
    value: "812,13 EUR",
    available: "812,13 EUR",
    credit: "0,00 EUR",
    pledge: "-",
  },
  {
    name: "***881 Depot – Daniel Mehner",
    value: "1.047.510,16 EUR",
    available: "-",
    credit: "-",
    pledge: "560.013,18 EUR",
  },
  {
    name: "***874 Cashkonto – Daniel Mehner",
    value: "200,18 EUR",
    available: "200,18 EUR",
    credit: "0,00 EUR",
    pledge: "-",
  },
  {
    name: "***336 Depot – Daniel Mehner",
    value: "25.753,95 EUR",
    available: "-",
    credit: "-",
    pledge: "12.002,22 EUR",
  },
  {
    name: "***329 Cashkonto – Daniel Mehner",
    value: "52.052,23 EUR",
    available: "52.052,23 EUR",
    credit: "0,00 EUR",
    pledge: "-",
  },
];

const DanielKonten = () => {
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
                Jetzt Wartelistenplatz sichern.
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

          <div className="min-w-[1200px]">
            {accountData.map((acc, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 text-xs mt-4 bg-gray-100 p-2"
              >
                <div className="col-span-7">
                  <Link href="/Depot">{acc.name}</Link>
                </div>
                <div className="col-span-2 text-end">
                  {acc.value}
                  <p>{acc.available}</p>
                </div>
                <div className="col-span-2 text-end">
                  {acc.credit}
                  <p>{acc.pledge}</p>
                </div>
                <div className="col-span-1">
                  <div className="py-2 px-3 mx-5 lg:px-2 m-2 bg-gray-400 text-white lg:mx-7">
                    <FaChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DanielKonten;
