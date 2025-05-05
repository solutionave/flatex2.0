"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Header2 from "./Header2";
import { useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";

const KamilDepot = () => {
  const searchParams = useSearchParams();
  const accountFromUrl = searchParams.get("account") || "***634"; // Default to ***634 if no account in URL
  const [selectedAccount, setSelectedAccount] = useState(accountFromUrl);
  const userData = useSelector((state: any) => state.user);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const formattedDate = currentDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");

  // Update selectedAccount when URL changes
  useEffect(() => {
    setSelectedAccount(accountFromUrl);
  }, [accountFromUrl]);

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
                value={selectedAccount}
                onChange={(e) => setSelectedAccount(e.target.value)}
              >
                <option value="***634">***634 Depot - {userData.name}</option>
                <option value="***493">
                  ***493 Cashkonto - {userData.name}
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

        <hr className="border-gray-200" />

        {/* Grid for Portfolio Table */}
        <div className="mt-6 bg-white p-4 w-full overflow-x-auto sm:overflow-x-hidden md:overflow-x-auto scroll-smooth hide-scrollbar">
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
          </div>

          {selectedAccount === "***634" && (
            <>
              {/* BP PLC */}
              <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
                <div className="col-span-2">
                  BP PLC
                  <p>
                    <span className="text-orange-500">GB0007980591</span> |
                    850517
                  </p>
                  <p>Aktien</p>
                </div>
                <div className="col-span-1 text-end">
                  7.000,00 Stk.
                  <p>4,80 EUR</p>
                  <p>Clearstream Nat.</p>
                </div>
                <div className="col-span-1 text-end">
                  Lang & Schwarz
                  <p>{formattedDate}</p>
                </div>
                <div className="col-span-1 text-end">
                  4,18 EUR
                  <p className="text-green-600">+0,08</p>
                  <p className="text-green-600">+1,91 %</p>
                </div>
                <div className="col-span-1 text-end">
                  29.260,00 EUR
                  <p>33.600,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-red-500">-4.340,00 EUR</p>
                  <p className="text-red-500">-12,92 %</p>
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
                  1.500,00 Stk
                  <p>58,25 EUR</p>
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
                  94.404,75 EUR
                  <p>87.375,00 EUR</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className="text-green-600">7.029,75 EUR</p>
                  <p className="text-green-600">8,05 %</p>
                </div>
              </div>
            </>
          )}

          {selectedAccount === "***493" && (
            <div className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]">
              <div className="col-span-7 text-center">
                No holdings available for this account.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default KamilDepot;
