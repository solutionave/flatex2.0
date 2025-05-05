"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Header2 from "./Header2";
import { useSelector } from "react-redux";
import { portfolioData } from "@/shared/data";
import { useSearchParams, useRouter } from "next/navigation";

// Define the interface for a single portfolio item
interface PortfolioItem {
  name: string;
  isin: string;
  wkn: string;
  category: string;
  quantity: string;
  purchasePrice: string;
  custody: string;
  exchange: string;
  date: string;
  lastPrice: string;
  prevDayChange: string;
  prevDayChangePercent: string;
  currentValue: string;
  purchaseValue: string;
  absoluteChange: string;
  percentChange: string;
  changeColor: string;
}

const DanielDepot = () => {
  const currentDate = new Date();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState<
    "***774" | "***612" | "***605" | "***881" | "***336"
  >("***774");
  const userData = useSelector((state: any) => state.user);

  // Set selectedAccount based on URL query parameter
  useEffect(() => {
    const accountId = searchParams.get("accountId");
    if (
      accountId &&
      ["***774", "***612", "***605", "***881", "***336"].includes(accountId)
    ) {
      setSelectedAccount(
        accountId as "***774" | "***612" | "***605" | "***881" | "***336"
      );
    }
  }, [searchParams]);

  // Handle dropdown change and update URL
  const handleAccountChange = (
    accountId: "***774" | "***612" | "***605" | "***881" | "***336"
  ) => {
    setSelectedAccount(accountId);
    router.push(`/Depot?accountId=${accountId}`);
  };

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
                  value={selectedAccount}
                  onChange={(e) =>
                    handleAccountChange(
                      e.target.value as
                        | "***774"
                        | "***612"
                        | "***605"
                        | "***881"
                        | "***336"
                    )
                  }
                >
                  <option value="***774">***774 Depot - {userData.name}</option>
                  <option value="***612">***612 Depot - {userData.name}</option>
                  <option value="***605">***605 Depot - {userData.name}</option>
                  <option value="***881">***881 Depot - {userData.name}</option>
                  <option value="***336">***336 Depot - {userData.name}</option>
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
              Deckungsreserve:{" "}
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

          {/* Table Rows - Mapped */}
          {portfolioData[selectedAccount]?.map(
            (item: PortfolioItem, index: number) => (
              <div
                key={index}
                className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]"
              >
                <div className="col-span-2">
                  {item.name}
                  <p>
                    <span className="text-orange-500">{item.isin}</span> |{" "}
                    {item.wkn}
                  </p>
                  <p>{item.category}</p>
                </div>
                <div className="col-span-1 text-end">
                  {item.quantity}
                  <p>{item.purchasePrice}</p>
                  <p>{item.custody}</p>
                </div>
                <div className="col-span-1 text-end">
                  {item.exchange}
                  <p>{item.date.replace("formattedDate", formattedDate)}</p>
                </div>
                <div className="col-span-1 text-end">
                  {item.lastPrice}
                  <p className={item.changeColor}>{item.prevDayChange}</p>
                  <p className={item.changeColor}>
                    {item.prevDayChangePercent}
                  </p>
                </div>
                <div className="col-span-1 text-end">
                  {item.currentValue}
                  <p>{item.purchaseValue}</p>
                </div>
                <div className="col-span-1 text-end">
                  <p className={item.changeColor}>{item.absoluteChange}</p>
                  <p className={item.changeColor}>{item.percentChange}</p>
                </div>
              </div>
            )
          ) || <div>No data available for selected account.</div>}
        </div>
      </div>
    </>
  );
};

export default DanielDepot;
