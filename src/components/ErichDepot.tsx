"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Header2 from "./Header2";
import { useSelector } from "react-redux";

const ErichDepot = () => {
  const currentDate = new Date();
  const [selectedAccount, setSelectedAccount] = useState("***307");
  const userData = useSelector((state: any) => state.user);
  currentDate.setDate(currentDate.getDate() - 1);
  const formattedDate = currentDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");
  console.log("userData", userData);
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
              <select
                className="appearance-none text-gray-700 border rounded px-2 py-1 w-full pr-10"
                onChange={(e) => setSelectedAccount(e.target.value)}
              >
                <option value="***307">
                  ***307 Cashkonto - {userData.name}
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
          <div className="grid grid-cols-7 gap-4 text-black text-xs font-bold p-2 min-w-[1200px]">
            <div className="col-span-2">
              Bezeichnung <p>ISIN/WKN</p>
              <p>Kategorie</p>
            </div>
            <div className="col-span-1 text-end">
              Stk./Nominale <p>Einstandskurs</p>
              <p>Sperre / Lagerst.</p>
            </div>
            <div className="col-span-1 text-end">
              Börse <p>Datum</p>
              <p>offen</p>
            </div>
            <div className="col-span-1 text-end">
              Letzter Kurs <p>+/- Vortag</p>
              <p>in %</p>
            </div>
            <div className="col-span-1 text-end">
              Aktueller Wert <p>Einstandswert</p>
            </div>
            <div className="col-span-1 text-end">
              Entw. abs.<p>Entw. in %</p>
            </div>
            {/* <div className="col-span-2 text-end"></div> */}
          </div>

          {/* Table Row 1 */}
          {/* <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
            <div className="col-span-2">
              COCA-COLA CO., THE (CCC3)
              <p>
                <span className="text-orange-500">US1912161007 </span> | 850663
              </p>
              <p>Aktien</p>
            </div>
            <div className="col-span-1 text-end">
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
            <div className="col-span-1 text-end">
              590.900,00 EUR <p>410.217,17 EUR </p>
            </div>
            <div className="col-span-1 text-end">
              0,00 EUR <p>0,00 %</p>
            </div>
          </div> */}

          {selectedAccount === "***307" && (
            <>
              {/* AT & T INC. */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  AT & T INC.
                  <p>
                    <span className="text-orange-500">US00206R1023</span> |
                    A0HL9Z
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  8.000 Stk.
                  <p>21,54 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  24,07 EUR
                  <p className="text-green-600">+0,24</p>
                  <p className="text-green-600">+1,00 %</p>
                </div>
                <div className="col-span-1 text-end">
                  192.560,00 EUR
                  <p>172.320,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-green-600"> 20.240,00 EUR</p>
                  <p className="text-green-600">11,75 %</p>
                </div>
              </div>

              {/* Coca-Cola Co., The (CCC3) */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  Coca-Cola Co., The (CCC3)
                  <p>
                    <span className="text-orange-500">US1912161007</span> |
                    850663
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  1.000,00 Stk
                  <p>56,55 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  62,9365 EUR
                  <p className="text-red-500">-0,529</p>
                  <p className="text-red-500">-0,84 %</p>
                </div>
                <div className="col-span-1 text-end">
                  62.936,50 EUR
                  <p>56.550,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-green-600">6.386,50 EUR</p>
                  <p className="text-green-600">11,29 %</p>
                </div>
              </div>

              {/* iShares EM Dividend ETF */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  iShares EM Dividend ETF
                  <p>
                    <span className="text-orange-500">IE00B652H904</span> |
                    A1JNZ9
                  </p>
                  <p>ETF</p>
                </div>
                <div className="col-span-1 text-end">
                  988,12 Stk.
                  <p>10,04 EUR</p>
                  <p>Clearstream Lux.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  12,91 EUR
                  <p className="text-green-600">+0,20</p>
                  <p className="text-green-600">+1,55 %</p>
                </div>
                <div className="col-span-1 text-end">
                  12.756,62 EUR
                  <p>9.920,72 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-green-600"> 2.835,91 EUR</p>
                  <p className="text-green-600">28,59 %</p>
                </div>
              </div>

              {/* Kraft Heinz Co., The */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  Kraft Heinz Co., The
                  <p>
                    <span className="text-orange-500">US5007541064</span> |
                    A14TU4
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  3.602,00 Stk
                  <p>28,51 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  25,74 EUR
                  <p className="text-red-500">-0,50</p>
                  <p className="text-red-500">-1,94 %</p>
                </div>
                <div className="col-span-1 text-end">
                  92.715,48 EUR
                  <p>102.693,02 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-red-500">-9.977,54 EUR</p>
                  <p className="text-red-500">-9,72 %</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ErichDepot;
