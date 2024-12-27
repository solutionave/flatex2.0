"use client";
import React, { useState } from "react";
import Header from "../../components/Header";
import { FaCheck } from "react-icons/fa";

const Logout = () => {
  return (
    <>
      <Header />
      <div className="bg-[url('/images/logout.png')] h-screen bg-cover bg-no-repeat w-full">
        <div className="flex justify-center items-center font-base py-6 text-black bg-white bg-opacity-45">
          <FaCheck className="text-green-400 text-xl mx-3" />
          <span className="text-2xl ">
            Sie haben sich erfolgreich abgemeldet.
          </span>
        </div>
        <div className="bg-[#2c2a2b] flex flex-col justify-center items-center text-center mx-5 lg:mx-96 p-6 sm:p-10 lg:py-20 lg:px-16 mt-16">
          <h2 className="text-xl lg:text-3xl font-bold mb-4 text-orange-600">
            Investieren Sie bei mehrfachen Testsiegern
          </h2>
          <p className="text-base lg:text-lg text-white mt-6">
            2024 und 2023 wurde flatex mehrfach in Brokerwahlen als Testsieger
            ausgezeichnet.
            <span className="block text-base mt-4">
              Durch Qualität, Leistung und Innovation konnte flatex Kunden und
              Jurys überzeugen.
            </span>
            <span className="block mt-4">
              Wir möchten uns herzlich für Ihr Vertrauen bedanken.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Logout;
