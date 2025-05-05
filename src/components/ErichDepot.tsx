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

interface UserState {
  name: string;
}

interface Holding {
  name: string;
  isin: string;
  wkn: string;
  category: string;
  quantity: string;
  einstandskurs: string;
  lagerst: string;
  bourse: string;
  date: string;
  lastPrice: string;
  priceChange: string;
  priceChangePercent: string;
  currentValue: string;
  einstandswert: string;
  developmentAbs: string;
  developmentPercent: string;
  changeColor: string;
}

interface AccountData {
  depotbestand: string;
  gebuchterSaldo: string;
  verfugbar: string;
  holdings: Holding[];
}

const ErichDepot = () => {
  const searchParams = useSearchParams();
  const initialAccount = searchParams.get("account") || "***307";
  const [selectedAccount, setSelectedAccount] = useState(initialAccount);
  const userData = useSelector((state: { user: UserState }) => state.user);

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  const formattedDate = currentDate
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");

  // Sample data for accounts
  const accountData: { [key: string]: AccountData } = {
    "***307": {
      depotbestand: "8.309,35 EUR",
      gebuchterSaldo: "1.894,90 EUR",
      verfugbar: "1.894,90 EUR",
      holdings: [
        {
          name: "AT & T INC.",
          isin: "US00206R1023",
          wkn: "A0HL9Z",
          category: "Aktien",
          quantity: "8.000 Stk.",
          einstandskurs: "21,54 EUR",
          lagerst: "Clearstream Nat.",
          bourse: "Lang & Schwarz",
          date: formattedDate,
          lastPrice: "24,07 EUR",
          priceChange: "+0,24",
          priceChangePercent: "+1,00 %",
          currentValue: "192.560,00 EUR",
          einstandswert: "172.320,00 EUR",
          developmentAbs: "20.240,00 EUR",
          developmentPercent: "11,75 %",
          changeColor: "text-green-600",
        },
        {
          name: "Coca-Cola Co., The (CCC3)",
          isin: "US1912161007",
          wkn: "850663",
          category: "Aktien",
          quantity: "1.000,00 Stk",
          einstandskurs: "56,55 EUR",
          lagerst: "Clearstream Nat.",
          bourse: "Lang & Schwarz",
          date: formattedDate,
          lastPrice: "62,9365 EUR",
          priceChange: "-0,529",
          priceChangePercent: "-0,84 %",
          currentValue: "62.936,50 EUR",
          einstandswert: "56.550,00 EUR",
          developmentAbs: "6.386,50 EUR",
          developmentPercent: "11,29 %",
          changeColor: "text-green-600",
        },
        {
          name: "iShares EM Dividend ETF",
          isin: "IE00B652H904",
          wkn: "A1JNZ9",
          category: "ETF",
          quantity: "988,12 Stk.",
          einstandskurs: "10,04 EUR",
          lagerst: "Clearstream Lux.",
          bourse: "Lang & Schwarz",
          date: formattedDate,
          lastPrice: "12,91 EUR",
          priceChange: "+0,20",
          priceChangePercent: "+1,55 %",
          currentValue: "12.756,62 EUR",
          einstandswert: "9.920,72 EUR",
          developmentAbs: "2.835,91 EUR",
          developmentPercent: "28,59 %",
          changeColor: "text-green-600",
        },
        {
          name: "Kraft Heinz Co., The",
          isin: "US5007541064",
          wkn: "A14TU4",
          category: "Aktien",
          quantity: "3.602,00 Stk",
          einstandskurs: "28,51 EUR",
          lagerst: "Clearstream Nat.",
          bourse: "Lang & Schwarz",
          date: formattedDate,
          lastPrice: "25,74 EUR",
          priceChange: "-0,50",
          priceChangePercent: "-1,94 %",
          currentValue: "92.715,48 EUR",
          einstandswert: "102.693,02 EUR",
          developmentAbs: "-9.977,54 EUR",
          developmentPercent: "-9,72 %",
          changeColor: "text-red-500",
        },
      ],
    },
    "***297": {
      depotbestand: "53.272,18 EUR",
      gebuchterSaldo: "53.272,18 EUR",
      verfugbar: "53.272,18 EUR",
      holdings: [
        {
          name: "Sample Stock",
          isin: "US1234567890",
          wkn: "A1B2C3",
          category: "Aktien",
          quantity: "500 Stk.",
          einstandskurs: "100,00 EUR",
          lagerst: "Clearstream Nat.",
          bourse: "Lang & Schwarz",
          date: formattedDate,
          lastPrice: "105,00 EUR",
          priceChange: "+5,00",
          priceChangePercent: "+5,00 %",
          currentValue: "52.500,00 EUR",
          einstandswert: "50.000,00 EUR",
          developmentAbs: "2.500,00 EUR",
          developmentPercent: "5,00 %",
          changeColor: "text-green-600",
        },
      ],
    },
  };

  // Validate selected account
  useEffect(() => {
    if (!accountData[initialAccount]) {
      setSelectedAccount("***307"); // Fallback to default if invalid
    } else {
      setSelectedAccount(initialAccount);
    }
  }, [initialAccount]);

  // Handle undefined userData.name
  const userName = userData?.name || "User";

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
                <option value="***307">***307 Depot – {userName}</option>
                <option value="***297">***297 Cashkonto – {userName}</option>
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
                {accountData[selectedAccount].depotbestand}
              </span>
            </p>
            <p className="text-gray-700">
              Gebuchter Saldo:{" "}
              <span className="text-black font-semibold pl-10">
                {accountData[selectedAccount].gebuchterSaldo}
              </span>
            </p>
            <p className="text-gray-700">
              Verfügbar:{" "}
              <span className="text-black font-semibold pl-10">
                {accountData[selectedAccount].verfugbar}
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

          {/* Table Rows */}
          {accountData[selectedAccount].holdings.map((holding, index) => (
            <div
              key={index}
              className="grid grid-cols-7 gap-4 text-xs mt-4 bg-gray-100 p-2 min-w-[1200px]"
            >
              <div className="col-span-2">
                {holding.name}
                <p>
                  <span className="text-orange-500">{holding.isin}</span> |{" "}
                  {holding.wkn}
                </p>
                <p>{holding.category}</p>
              </div>
              <div className="col-span-1 text-end">
                {holding.quantity}
                <p>{holding.einstandskurs}</p>
                <p>{holding.lagerst}</p>
              </div>
              <div className="col-span-1 text-end">
                {holding.bourse}
                <p>{holding.date}</p>
              </div>
              <div className="col-span-1 text-end">
                {holding.lastPrice}
                <p className={holding.changeColor}>{holding.priceChange}</p>
                <p className={holding.changeColor}>
                  {holding.priceChangePercent}
                </p>
              </div>
              <div className="col-span-1 text-end">
                {holding.currentValue}
                <p>{holding.einstandswert}</p>
              </div>
              <div className="col-span-1 text-end">
                <p className={holding.changeColor}>{holding.developmentAbs}</p>
                <p className={holding.changeColor}>
                  {holding.developmentPercent}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ErichDepot;
