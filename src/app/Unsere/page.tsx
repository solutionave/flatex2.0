"use client";
import React from "react";
import Header from "../../components/Header";
import Image from "next/image";
import img1 from "../../../public/images/img1.png";
import { FaArrowRight } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Unsere = () => {
  return (
    <>
      <Header />
      {/* Desktop */}
      <div className="hidden lg:flex flex-col lg:flex-row pl-0 lg:pl-40 items-start bg-[#F3F4F6]">
        {/* Left Section: Text Content */}
        <div className="lg:w-[45%] w-full lg:text-left px-5 lg:px-0 py-12">
          <h1 className="text-3xl lg:text-6xl font-bold py-5">
            Unsere günstigen Aktionen für Sie auf einen Blick
          </h1>
          <p className="text-gray-800 lg:font-normal font-medium text-base py-0 lg:py-5 mr-0 lg:text-2xl lg:mr-40 ">
            Ob Neukunde oder Bestandskunde: Hier finden Sie interessante
            Angebote, mit denen Sie bei flatex sparen können. Profitieren Sie
            jetzt – ohne Depotgebühren.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-[55%] mt-6 lg:ml-5 ml-0 lg:mt-0">
          <Image
            src={img1}
            alt="Father and son celebrating"
            className="lg:w-full"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col lg:flex-row pl-0 lg:pl-40 items-start lg:hidden  bg-[#F3F4F6]">
        {/* Right Section: Image */}
        <div className="w-full lg:w-[55%] lg:ml-5 ml-0 lg:mt-0">
          <Image
            src={img1}
            alt="Father and son celebrating"
            className="lg:w-full"
          />
        </div>
        {/* Left Section: Text Content */}
        <div className="lg:w-[45%] w-full lg:text-left px-5 lg:px-0 pb-5">
          <h1 className="text-3xl lg:text-6xl font-bold py-5">
            Unsere günstigen Aktionen für Sie auf einen Blick
          </h1>
          <p className="text-gray-800 lg:font-normal font-medium text-base py-0 lg:py-5 mr-0 lg:text-2xl lg:mr-40 ">
            Ob Neukunde oder Bestandskunde: Hier finden Sie interessante
            Angebote, mit denen Sie bei flatex sparen können. Profitieren Sie
            jetzt – ohne Depotgebühren.
          </p>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center gap-4 lg:gap-6 top-0 lg:-top-24 pt-10 relative  bg-[#F3F4F6] ">
        <div className="flex flex-col items-start text-left py-16 px-5 w-full lg:w-[40%] bg-white shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 px-5">
            Neukundenaktion
          </h2>
          <p className="text-gray-800 font-semibold mb-6 inline px-5">
            Jetzt schnell sein und ein Depot eröffnen. Handeln Sie Aktien,
            Anleihen, ETFs und Fonds 1 Jahr
            <span className="font-bold">für 1,90 EUR pro Order*</span> zzgl. 2
            EUR Fremdkostenpauschale, marktüblicher Spreads und Zuwendungen.
            <span className="text-orange-500 cursor-pointer hover:underline flex items-center gap-1">
              <IoInformationCircleOutline
                height={40}
                width={40}
                className="text-orange-400 inline"
              />{" "}
              Angebotsbedingungen
            </span>
          </p>
          <button className="flex justify-end items-center w-full font-semibold text-xl">
            Depot eröffnen <MdKeyboardArrowRight size={40} color="orange" />
          </button>
        </div>

        <div className=" absolute ab md:flex text-orange-500 mb-24 lg:mb-0 lg:py-16 font-bold items-center text-9xl">
          +
        </div>

        <div className="flex flex-col items-start text-left py-16 px-5 bg-white shadow-lg w-full lg:w-[40%] border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 px-5">
            Kunden werben Kunden
          </h2>
          <p className="text-gray-800 font-semibold mb-6 inline px-5">
            Mit jedem Neukunden, den wir dank Ihrer Empfehlung gewonnen haben,
            bekommen Sie und der Geworbene von uns als Dankeschön ein
            <span className="font-bold">Orderguthaben von 50 EUR</span>.
            Zusätzlich profitiert der Geworbene von unserer Neukundenaktion.
            <span className="text-orange-500 cursor-pointer hover:underline flex items-center gap-1">
              <IoInformationCircleOutline
                height={40}
                width={40}
                className="text-orange-400"
              />{" "}
              Angebotsbedingungen
            </span>
          </p>
          <button className="flex justify-end items-center w-full font-semibold text-xl">
            Jetzt werben <MdKeyboardArrowRight size={40} color="orange" />
          </button>
        </div>
      </div>

      <p className=" lg:px-40 text-sm text-gray-500 lg:relative lg:bottom-24  bg-[#F3F4F6]">
        *An ausgewählten Handelsplätzen.
      </p>
    </>
  );
};

export default Unsere;
