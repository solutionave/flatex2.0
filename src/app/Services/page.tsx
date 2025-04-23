"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Header2 from "../../components/Header2";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

const Service = () => {
  const [activeItem, setActiveItem] = useState("");
  useEffect(() => {
    setActiveItem("Service");
  }, []);
  return (
    <>
      <Header2 />
      <div className="lg:px-40 z-10 -mt-3">
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem} />
      </div>
      <div className="bg-white shadow-lg px-4 lg:px-40 pb-10">
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4 sm:my-6">
          <h2 className="text-xl sm:text-3xl font-semibold lg:mt-2  mt-10  text-gray-800">
            Serviceübersicht
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {/* Card Components */}
          {[
            {
              title: "Persönliche Daten",
              description: "Ändern Sie hier Ihre persönlichen Daten",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 sm:w-14 sm:h-14 text-orange-500"
                >
                  <path
                    d="M12 12c2.7 0 4.5-2.7 4.5-5.5S14.7 1 12 1 7.5 3.7 7.5 6.5 9.3 12 12 12zm0 1c-4.5 0-8 3-8 6v1h16v-1c0-3-3.5-6-8-6z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              actions: [
                "Bankverbindungen",
                <Link href="/Zugrif">Zugriffsberechtigte</Link>,
                "Ertragsausschüttung",
                "Anlageziele",
              ],
            },
            {
              title: "Sicherheit",
              description: "Verwalten Sie hier Ihre Sicherheitseinstellungen",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 sm:w-14 sm:h-14 text-orange-500"
                >
                  <rect
                    x="9"
                    y="11"
                    width="6"
                    height="7"
                    rx="1"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 11V8a3 3 0 0 1 6 0v3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              actions: [
                "Mein Benutzername",
                "Logon-Passwort ändern",
                "Telefon-PIN ändern",
                "flatexSecure Einstellungen",
              ],
            },
            {
              title: "Service",
              description: "Informationen und andere Aktionen",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 sm:w-14 sm:h-14 text-orange-500"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <line
                    x1="12"
                    y1="8"
                    x2="12"
                    y2="8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="18"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              actions: [
                "Support",
                "Formulare & Infos",
                "flatex weiterempfehlen",
                "Gutscheine",
                "Depotanlage",
                "Fremdwährungskonto anlegen",
                "Depotübertrag",
              ],
            },
            {
              title: "Steuern",
              description: "Anträge, Formulare und Bescheinigungen",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-10 h-10 sm:w-14 sm:h-14 text-orange-500"
                >
                  <path
                    d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="14 2 14 8 20 8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="8"
                    y1="12"
                    x2="16"
                    y2="12"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="15"
                    x2="14"
                    y2="15"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              actions: [
                "Steuerbescheinigungen",
                "Freistellungsauftrag",
                "NV-Bescheinigung",
                "Kirchensteuerdaten",
              ],
            },
          ].map((card, index) => (
            <div key={index} className="bg-gray-100 p-4">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-800 mb-4 h-10">{card.description}</p>
              <div className="flex justify-center items-center mx-auto w-16 h-16 sm:w-24 sm:h-24 border-2 border-black rounded-full mt-6 sm:mt-10 mb-3 sm:mb-5">
                {card.icon}
              </div>
              {card.actions.map((action, i) => (
                <button
                  key={i}
                  className="block w-full mb-2 py-2 px-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg transition-colors duration-300"
                >
                  {action}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
