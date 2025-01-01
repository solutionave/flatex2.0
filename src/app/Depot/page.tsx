"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Header2 from "../../components/Header2";

const Depot = () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const formattedDate = currentDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");
  return (
    <>
      <Header2 />
      <div className="lg:px-40 z-10 -mt-3">
        <Navbar />
      </div>
      <div className="px-4 sm:px-8 lg:px-40 pb-6">
        <div className="text-2xl sm:text-3xl lg:pt-8 mt-10 lg:mt-0">
          Depotbestand
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 pt-5">
          {/* Left Section */}
          <div className="w-full lg:w-auto">
            <h3 className="text-base">Aktuelles Konto</h3>
            <div className="relative mt-1">
              {/* Dropdown */}
              <select className="appearance-none text-gray-700 border rounded px-2 py-1 w-full pr-10">
                <option value="cashkonto">
                  ***767 Cashkonto - Daniel Mehner
                </option>
              </select>
              {/* Custom Dropdown Icon */}
              <div className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-400 rounded-r">
                <FaChevronDown className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col text-left lg:text-right mt-4 lg:mt-0">
            <p className="text-gray-700">
              Depotbestand:{" "}
              <span className="text-black font-semibold pl-10">
                8.309,35 EUR
              </span>
            </p>
            <p className="text-gray-700">
              Gebuchter Saldo:{" "}
              <span className="text-black font-semibold pl-10">
                1.894,90 EUR
              </span>
            </p>
            <p className="text-gray-700">
              Verfügbar:{" "}
              <span className="text-black font-semibold pl-10">
                1.894,90 EUR
              </span>
            </p>
          </div>
        </div>

        {/* Actions Section */}
        <div className="bg-white pt-7">
          <div className="flex justify-end items-center space-x-2">
            <button className="bg-orange-500 p-3">
              <FiSearch className="text-white w-5 h-5" />
            </button>
            <button className="bg-orange-500 p-3">
              <IoReload className="text-white w-5 h-5" />
            </button>
            <button className="bg-orange-500 p-3">
              <BsThreeDots className="text-white w-5 h-5" />
            </button>
          </div>
        </div>

        <hr className=" border-gray-200" />

        {/* Grid for Portfolio Table */}
        <div className="mt-6 bg-white p-4 w-full overflow-x-auto sm:overflow-x-hidden md:overflow-x-auto scroll-smooth">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-black text-xs font-bold p-2 min-w-[1200px]">
            <div className="col-span-3">
              Bezeichnung <p>ISIN/WKN</p>
              <p>Kategorie</p>
            </div>
            <div className="col-span-2 text-end">
              Stk./Nominale <p>Einstandskurs</p>
              <p>Sperre / Lagerst.</p>
            </div>
            <div className="col-span-1 text-end">
              Börse <p>Datum</p>
              <p>Often</p>
            </div>
            <div className="col-span-1 text-end">
              Letzter Kurs <p>+/- Vortag</p>
              <p>in %</p>
            </div>
            <div className="col-span-2 text-end">
              Aktueller Wert <p>Einstandswert</p>
            </div>
            <div className="col-span-1 text-end">
              Entw. abs.<p>Entw. in %</p>
            </div>
            <div className="col-span-2 text-end"></div>
          </div>

          {/* Table Row 1 */}
          <div className="grid grid-cols-12 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
            <div className="col-span-3">
              COCA-COLA CO., THE (CCC3)
              <p>
                <span className="text-orange-500">US1912161007 </span> | 850663
              </p>
              <p>Aktien</p>
            </div>
            <div className="col-span-2 text-end">
              10.000,0000 Stk<p>59,090 EUR</p>
              <p>ClearStream Nat.</p>
            </div>
            <div className="col-span-1 text-end">
              Lang & Schwarz <p>{formattedDate} | 22:56</p>
            </div>
            <div className="col-span-1 text-end">
              59,09 EUR <p className="text-red-500">-0,21</p>
              <p className="text-red-500">-0,354 %</p>
            </div>
            <div className="col-span-2 text-end">
              590.900,00 EUR <p>410.217,17 EUR </p>
            </div>
            <div className="col-span-1 text-end">
              0,00 EUR <p>0,00 %</p>
            </div>
            <div className="col-span-2 flex flex-row space-x-2 px-9">
              <div className="py-4 px-3 my-2 lg:my-5 bg-green-500 text-white">
                K
              </div>
              <div className="py-4 px-3 m-2 lg:my-5 bg-red-700 text-white">
                V
              </div>
              <div className="pt-4 px-2 m-2 lg:my-5 bg-gray-400 text-white">
                <FaChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Depot;
