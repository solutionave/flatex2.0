"use client";
import Header from "@/components/Header";
import React, { useRef, useState } from "react";
import { BsChatRightDotsFill, BsThreeDots } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const accounts = [
    {
      name: "***774 Depot - Daniel Mehner",
      balance: "8.309,35 EUR",
      creditLine: "4.229,26 EUR",
    },
    {
      name: "***767 Cashkonto - Daniel Mehner",
      balance: "1.894,90 EUR",
      creditLine: "1.894,90 EUR",
    },
  ];
  const bannerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="sticky">
        <Header />
      </div>
      <div className="bg-[url('/images/mobbg.png')] lg:bg-[url('/images/background.png')] h-screen bg-cover bg-no-repeat lg:h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-4 text-[#2c2a2b]">
          {/* Left Section */}
          <div className="flex items-center justify-center"></div>
          {/* Right Section */}
          <div className="flex flex-col items-start text-left mt-5 lg:mt-16 lg:px-24">
            <h1 className="lg:text-6xl text-4xl font-bold text-white lg:text-[#2c2a2b]">
              Jetzt Angebot sichern
            </h1>
            <div>
              <div className="hidden lg:block">
                <h2 className="text-xl font-bold text-white lg:text-[#2c2a2b] py-5">
                  1 Jahr für 1,90 EUR pro Order
                </h2>
                <p className="text-white lg:text-[#2c2a2b] font-medium text-xl ">
                  an ausgewählten Handelsplätzen zzgl. 2 EUR
                  Fremdkosten­pauschale. Sparpläne, ausgewählte ETFs und Fonds
                  für 0 EUR. Jeweils zzgl. marktüblicher Spreads, Zuwendungen
                  und Produktkosten.
                  <span>
                    <IoInformationCircleOutline
                      height={40}
                      width={40}
                      className="text-orange-400 inline"
                    />
                  </span>
                  <span className="text-orange-500 font-semibold">
                    Angebotsbedingungen
                  </span>
                </p>
              </div>
              <div className="block lg:hidden">
                <h2 className="text-xl font-semibold text-white py-5">
                  Handeln Sie Aktien, Anleihen und mehr 1 Jahr für 1,90 EUR pro
                  Order* zzgl. 2 EUR Fremdkostenpauschale, markt­üblicher
                  Spreads und Zuwendungen.
                  <p className="text-orange-500 font-semibold">Mehr Details</p>
                </h2>
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-center items-end py-5">
              <button className="py-3 px-6 bg-orange-500 text-white mt-20 mx-20 lg:mt-0 lg:mx-0">
                Depot eröffnen
              </button>
            </div>
          </div>
        </div>

        {/* Chat Icon */}
        <div
          ref={bannerRef}
          className="fixed flex justify-center items-center lg:w-[33%] lg:left-1/2 lg:-translate-x-1/2 bottom-0 left-0 right-0 shadow-white bg-white px-2 py-1 mb-10"
        >
          <div className="text-black py-4 relative">
            <button
              className="absolute -top-2 right-0 lg:-right- text-3xl text-gray-600 hover:text-gray-800"
              onClick={() =>
                bannerRef.current && (bannerRef.current.style.display = "none")
              }
            >
              ×
            </button>
            <div className="font-semibold text-lg lg:text-xl">
              <p className="">
                Investitionen in Finanzinstrumente bergen{" "}
                <span className="text-orange-600">Verlustrisiken</span>.
                <span className="lg:hidden">Keine Anlageberatung.</span>
              </p>
              <p className="hidden lg:block">Keine Anlageberatung.</p>
            </div>
          </div>
        </div>

        <div className="fixed lg:bottom-4 lg:right-4 bottom-2 right-1 bg-orange-500 p-4 m-5 rounded-full shadow-lg hover:bg-orange-600 text-3xl">
          <div className="text-white w-8">
            <BsChatRightDotsFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
