"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Header2 from "./Header2";
import { useSelector } from "react-redux";

const DanielDepot = () => {
  const currentDate = new Date();
  const [selectedAccount, setSelectedAccount] = useState("***767");
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
              {userData.username === "1045875" && (
                <select
                  className="appearance-none text-gray-700 border rounded px-2 py-1 w-full pr-10"
                  onChange={(e) => setSelectedAccount(e.target.value)}
                >
                  <option value="***767">
                    ***767 Cashkonto - {userData.name}
                  </option>
                  <option value="***774">
                    ***774 Cashkonto - {userData.name}
                  </option>
                  <option value="***612">
                    ***612 Cashkonto - {userData.name}
                  </option>
                  <option value="***605">
                    ***605 Cashkonto - {userData.name}
                  </option>
                  <option value="***881">
                    ***881 Cashkonto - {userData.name}
                  </option>
                  <option value="***336">
                    ***336 Cashkonto - {userData.name}
                  </option>
                </select>
              )}
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

          {selectedAccount === "***767" && (
            <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
              <div className="col-span-2">
                COCA-COLA CO., THE (CCC3)
                <p>
                  <span className="text-orange-500">US1912161007</span> | 850663
                </p>
                <p>Aktien</p>
              </div>
              <div className="col-span-1 text-end">
                10.000,0000 Stk
                <p>59,090 EUR</p>
                <p>ClearStream Nat.</p>
              </div>
              <div className="col-span-1 text-end">
                Lang & Schwarz
                <p>{formattedDate} | 22:56</p>
              </div>
              <div className="col-span-1 text-end">
                59,09 EUR
                <p className="text-red-500">-0,21</p>
                <p className="text-red-500">-0,354 %</p>
              </div>
              <div className="col-span-1 text-end">
                590.900,00 EUR
                <p>410.217,17 EUR</p>
              </div>
              <div className="col-span-1 text-end">
                0,00 EUR
                <p>0,00 %</p>
              </div>
            </div>
          )}

          {selectedAccount === "***774" && (
            <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
              <div className="col-span-2">
                COCA-COLA CO., THE (CCC3)
                <p>
                  <span className="text-orange-500">US1912161007</span> | 850663
                </p>
                <p>Aktien</p>
              </div>
              <div className="col-span-1 text-end">
                10.250,00 Stk
                <p>59,09 EUR</p>
                <p>ClearStream Nat.</p>
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
                645.099,13 EUR
                <p>605.672,50 EUR</p>
              </div>
              <div className="col-span-1 text-end">
                39.429,63 EUR
                <p>6,51 %</p>
              </div>
            </div>
          )}

          {selectedAccount === "***612" && (
            <>
              {/* BMW Row */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  Bayerische Motorenwerke AG (BMW)
                  <p>
                    <span className="text-orange-500">DE0005190003</span> |
                    519000
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  4.000,00 Stk
                  <p>102,45 EUR</p>
                  <p>ClearStream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  70,50 EUR
                  <p className="text-green-600">+0,705</p>
                  <p className="text-green-600">+1,00 %</p>
                </div>
                <div className="col-span-1 text-end">
                  282.000,00 EUR
                  <p>409.800,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  -127.800,00 EUR
                  <p className="text-red-500">-31,19 %</p>
                </div>
              </div>

              {/* Coca-Cola Row */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  COCA-COLA CO., THE (CCC3)
                  <p>
                    <span className="text-orange-500">US1912161007</span> |
                    850663
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  2.000,00 Stk
                  <p>57,84 EUR</p>
                  <p>ClearStream Nat.</p>
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
                  125.873,00 EUR
                  <p>115.680,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  10.193,00 EUR
                  <p>8,81 %</p>
                </div>
              </div>
            </>
          )}

          {selectedAccount === "***605" && (
            <>
              {/* African Rainbow */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  African Rainbow Minerals Ltd.
                  <p>
                    <span className="text-orange-500">ZAE000054045</span> |
                    A0CAQD
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  12.000,00 Stk
                  <p>11,00 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  8,02 EUR
                  <p className="text-green-600">+0,05</p>
                  <p className="text-green-600">+0,00 %</p>
                </div>
                <div className="col-span-1 text-end">
                  96.240,00 EUR
                  <p>132.000,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  -35.760,00 EUR
                  <p className="text-red-500">-27,09 %</p>
                </div>
              </div>

              {/* Coca-Cola */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  COCA-COLA CO., THE (CCC3)
                  <p>
                    <span className="text-orange-500">US1912161007</span> |
                    850663
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  10.000,00 Stk
                  <p>57,84 EUR</p>
                  <p>ClearStream Nat.</p>
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
                  125.873,00 EUR
                  <p>115.680,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  10.193,00 EUR
                  <p>8,81 %</p>
                </div>
              </div>

              {/* Gerdau */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  Gerdau S. A. Vz.
                  <p>
                    <span className="text-orange-500">BRGGBRACNPR8</span> |
                    909187
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  882 Stk.
                  <p>4,71 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  2,12 EUR
                  <p className="text-green-600">+0,15</p>
                  <p className="text-green-600">+7,07 %</p>
                </div>
                <div className="col-span-1 text-end">
                  4.154,22 EUR
                  <p>1.869,84 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  -2.284,38 EUR
                  <p className="text-red-500">-53,69 %</p>
                </div>
              </div>

              {/* Unicredit */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  Unicredit BK Aust.-Anr.
                  <p>
                    <span className="text-orange-500">AT0000A0AJ61</span> |
                    A0Q7SM
                  </p>
                  <p>Nachbesserungsrechte</p>
                </div>
                <div className="col-span-1 text-end">
                  70.128 Stk.
                  <p>2,50 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-end text-gray-500">---</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-end text-gray-500">---</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-end text-gray-500">---</p>
                  <p>175.320,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-end text-gray-500">---</p>
                  <p className="text-end text-gray-500">---</p>
                </div>
              </div>
            </>
          )}

          {selectedAccount === "***881" && (
            <>
              {/* AT&T */}
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
                  20.000 Stk
                  <p>17,65 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  24,07 EUR
                  <p className="text-green-600">0,24</p>
                  <p className="text-green-600">+1,00 %</p>
                </div>
                <div className="col-span-1 text-end">
                  481.400,00 EUR
                  <p>353.000,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  128.400,00 EUR
                  <p>36,37 %</p>
                </div>
              </div>

              {/* BP PLC */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  BP PLC
                  <p>
                    <span className="text-orange-500">GB0007980591</span> |
                    850517
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  80.012 Stk.
                  <p>5,19 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  4,18 EUR
                  <p className="text-green-600">0,08</p>
                  <p className="text-green-600">1,91 %</p>
                </div>
                <div className="col-span-1 text-end">
                  334.450,16 EUR
                  <p>415.262,28 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-red-500">-80.812,12 EUR</p>
                  <p className="text-red-500">-19,46 %</p>
                </div>
              </div>

              {/* Kraft Heinz */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  Kraft Heinz Co, The
                  <p>
                    <span className="text-orange-500">US5007541064</span> |
                    A14TU4
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  9.000,00 Stk
                  <p>32,32 EUR</p>
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
                  <p className="text-red-500"></p> 231.660,00 EUR
                  <p>290.880,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className=" text-red-500"> -59.220,00 EUR</p>
                  <p className="text-red-500">-20,36 %</p>
                </div>
              </div>
            </>
          )}

          {selectedAccount === "***336" && (
            <>
              {/* IShares */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  IShares EM Dividend ETF
                  <p>
                    <span className="text-orange-500">IE00B652H904</span> |
                    A1JNZ9
                  </p>
                  <p>ETF</p>
                </div>
                <div className="col-span-1 text-end">
                  1.200,771 Stk.
                  <p>13,04 EUR</p>
                  <p>Clearstream Lux.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  12,91 EUR
                  <p className="text-green-600">0,20</p>
                  <p className="text-green-600">+1,55 %</p>
                </div>
                <div className="col-span-1 text-end">
                  15.501,95 EUR
                  <p>15.658,05 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  -156,09 EUR
                  <p className="text-red-500">-0,99 %</p>
                </div>
              </div>

              {/* Realty Income */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-2 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  Realty Income Corp.
                  <p>
                    <span className="text-orange-500">US7561091049</span> |
                    899744
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  200 Stk.
                  <p>52,83 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  51,26 EUR
                  <p className="text-green-600">0,25</p>
                  <p className="text-green-600">0,49 %</p>
                </div>
                <div className="col-span-1 text-end">
                  10.252,00 EUR
                  <p>10.566,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  -314,00 EUR
                  <p className="text-red-500">-2,97 %</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DanielDepot;
