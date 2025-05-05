"use Client";
import React, { useContext, useState } from "react";
import { RxPerson } from "react-icons/rx";
import Modal from "react-modal";
import { IoInformationCircleOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { setUserData } from "../store/slices/userSlice";
import { useRouter } from "next/navigation";
import { userData } from "@/app/data/userData";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowModal, setisShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, username });
  };

  const handleOpenModal = () => {
    setisShowModal(true);
  };

  const handleCloseModal = () => {
    setisShowModal(false);
  };

  const isFormValid = username1.trim() !== "" && password1.trim() !== "";

  const handleLogin = () => {
    // Find the user matching the entered credentials
    const user = userData.find(
      (user) => user.username === username1 && user.password === password1
    );

    if (user) {
      setErrorMessage("");
      dispatch(
        setUserData({
          name: user.name,
          username: user.username,
          email: user.email,
          isAuthenticated: true,
          kundennummer: user.kundennummer,
          geburtstag: user.geburtstag,
          risikoklasse: user.risikoklasse,
          steuerstatus: user.steuerstatus,
          steuernummer: user.steuernummer,
          berufsgruppe: user.berufsgruppe,
          branche: user.branche,
          beruf: user.beruf,
          stammadresse: user.stammadresse,
          telefon: user.telefon,
          mobilfunk: user.mobilfunk,
          geschaeftskontakt: user.geschaeftskontakt,
        })
      );
      router.push("/Kontent"); // Change to routing method if using React Router
    } else {
      setErrorMessage("Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.");
    }
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (menu: any) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleOptionClick1 = (item: any) => {
    console.log(item);
    // Add your logic for handling dropdown option click
  };

  // const { timeMinutes, timeSeconds, startTime } = useContext(TimeContext);

  // const handleButtonClick = () => {
  //   if (startTime) {
  //     startTime();
  //   }
  // };

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    console.log(`Selected: ${option}`);
    // Add any additional logic here, e.g., navigation or API calls
  };

  return (
    <nav className="bg-[#2c2a2b] text-white px-5 py-4 lg:px-10 lg:py-5 flex items-center justify-between sticky">
      {/* Logo */}
      <div className="flex justify-center gap-2 lg:gap-28 ">
        <div className="flex justify-center items-center ">
          <img src="/images/logo.png" className="lg:px-2 lg:h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center px-8">
          <ul className="hidden md:flex items-center text-xl font-semibold space-x-5">
            <li>
              <button className="hover:text-orange-400">
                <Link href="/Unsere">Preise</Link>
              </button>
            </li>

            <li>
              <Link href="/Unsere">
                <button className="hover:text-orange-400">Aktionen</button>
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => handleDropdownToggle("produkte")}
                className="flex items-center hover:text-orange-400 whitespace-nowrap"
              >
                Produkte & Handel
                <RiArrowDropDownLine className="ml-1" size={24} />
              </button>
              {openDropdown === "produkte" && (
                <Link href="/Unsere">
                  <ul className="absolute left-0 bg-white text-gray-800 shadow-md mt-2 rounded">
                    {[
                      "Aktien",
                      "Sparpläne",
                      "ETFs",
                      "Fonds",
                      "Zertifikate & Hebelprodukte",
                      "Anleihen",
                    ].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-orange-100"
                        onClick={() => handleOptionClick(item)}
                      >
                        <button className="block w-full text-left">
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </Link>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => handleDropdownToggle("plattformen")}
                className="flex items-center hover:text-orange-400"
              >
                Plattformen
                <RiArrowDropDownLine className="ml-1" size={24} />
              </button>
              <Link href="/Unsere">
                {openDropdown === "plattformen" && (
                  <ul className="absolute left-0 bg-white text-gray-800 shadow-md mt-2 rounded whitespace-nowrap">
                    {[
                      "Flatex next",
                      "Flatex classic",
                      "Flatex Trader 2.0",
                      "Stock 3",
                      "Produktfinder",
                    ].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-orange-100"
                        onClick={() => handleOptionClick(item)}
                      >
                        <button className="block w-full text-left">
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => handleDropdownToggle("boersenwissen")}
                className="flex items-center hover:text-orange-400"
              >
                Börsenwissen
                <RiArrowDropDownLine className="ml-1" size={24} />
              </button>
              <Link href="/Unsere">
                {openDropdown === "boersenwissen" && (
                  <ul className="absolute left-0 bg-white text-gray-800 shadow-md mt-2 rounded whitespace-nowrap">
                    {[
                      "Online-Seminare",
                      "Wissenszentrum",
                      "Markt-Update",
                      "TV-Dokumentation",
                      "Podcast",
                      "Aktien und Indizes",
                    ].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-orange-100"
                        onClick={() => handleOptionClick(item)}
                      >
                        <button className="block w-full text-left">
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </li>

            <li className="relative">
              <button
                onClick={() => handleDropdownToggle("service")}
                className="flex items-center hover:text-orange-400"
              >
                Service
                <RiArrowDropDownLine className="ml-1" size={24} />
              </button>
              <Link href="/Unsere">
                {openDropdown === "service" && (
                  <ul className="absolute left-0 bg-white text-gray-800 shadow-md mt-2 rounded whitespace-nowrap">
                    {[
                      "Erste Schritte",
                      "Häufige Fragen – FAQs",
                      "Formulare",
                      "Beschwerden",
                      "Kontakt",
                    ].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 hover:bg-orange-100"
                        onClick={() => handleOptionClick(item)}
                      >
                        <button className="block w-full text-left">
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </Link>
            </li>

            <li>
              <div className="flex justify-center relative">
                <button className="text-white hover:text-orange-400">
                  <svg
                    className="w-9 h-9 pt-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
                    />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Login */}
      <div
        className="hidden md:flex items-center space-x-4"
        onClick={handleOpenModal}
      >
        {/* Login */}
        <button className="flex items-center font-semibold text-xl space-x-1 hover:text-orange-400">
          <div className="px-1">Login</div>
          <div className="text-orange-400 text-2xl">
            <RxPerson />
          </div>
        </button>
      </div>

      <Modal
        isOpen={isShowModal}
        onRequestClose={handleCloseModal}
        contentLabel="Login"
        className="modal lg:w-[70%] w-[80%]  bg-white shadow-lg max-h-[80%] overflow-y-scroll lg:overflow-y-auto hide-scrollbar"
        overlayClassName="overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        ariaHideApp={false}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
          {/* Left side: Login Form */}
          <div className="flex flex-col p-10">
            {/* Modal header */}
            <h2
              id="modal-title"
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Login
            </h2>

            {/* Login form */}
            <form
              className="w-full"
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="mb-4">
                <InputField
                  type="text"
                  name="username"
                  placeholder="Kundennr. / Benutzername"
                  value={username1}
                  onChange={(e) => setUsername1(e.target.value)}
                  className="text-xl font-semibold py-7"
                />
              </div>
              <div className="mb-4">
                <InputField
                  type="password"
                  name="password"
                  placeholder="Passwort"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  className="text-xl font-semibold py-7"
                />
              </div>

              {/* Error message */}
              {errorMessage && (
                <p className="text-red-500 font-semibold mb-4">
                  {errorMessage}
                </p>
              )}

              {/* Forgot password link */}
              <p className="mt-4 text-sm text-red-500 font-semibold">
                Passwort vergessen oder gesperrt?
              </p>

              {/* Session-TAN option */}
              <div className="mt-4 flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="session-tan"
                  name="session-tan"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="session-tan"
                  className="flex flex-row justify-center items-center text-sm text-gray-700"
                >
                  Session-TAN verwenden
                  <span className="text-orange-400 px-2">
                    <IoInformationCircleOutline height={30} width={30} />
                  </span>
                </label>
              </div>

              <div>
                {userData.some(
                  (user) =>
                    user.username === username1 && user.password === password1
                ) ? (
                  <>
                    {/* Login button */}
                    <button
                      type="submit"
                      className="w-full bg-orange-400 text-white font-bold py-2 px-4 border-orange-400 transition-all mt-5"
                    >
                      Anmelden
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="w-full bg-orange-400 text-white font-bold py-2 px-4 border-orange-400 transition-all mt-5 cursor-not-allowed opacity-50"
                    onClick={() =>
                      alert(
                        "Ungültige Anmeldedaten. Bitte geben Sie die richtigen Daten ein."
                      )
                    }
                  >
                    Anmelden
                  </button>
                )}
              </div>
            </form>

            <button className="w-full text-red-500 font-bold py-2 px-4 mt-4 transition-all border-[0.5px] border-red-500 mb-10">
              Depot eröffnen
            </button>
          </div>

          {/* Right side: Informational Text */}

          <div className=" bg-black flex flex-col justify-center text-center px-1 py-10 lg:py-0">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">
              Investieren Sie biem
              <p>mehrfachen Testsieger</p>
            </h2>
            <p className="text-lg text-white mb-6 px-5">
              2024 und 2023 wurde flatex mehrfach in Brokerwahlen als Testsieger
              ausgezeichnet. Durch Qualität, Leistung und Innovation konnte
              flatex Kunden und Jurys über­zeugen. Wir möchten uns herzlich für
              Ihr Vertrauen bedanken.
            </p>
          </div>
        </div>
      </Modal>

      {/* Mobile Actions */}
      <div className="flex items-center md:hidden space-x-4">
        <button className="hover:text-orange-400" onClick={handleOpenModal}>
          {/* User Icon */}
          <svg
            className="w-5 h-5 text-orange-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            />
          </svg>
        </button>
        <button className="hover:text-orange-400">
          {/* Search Icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
            />
          </svg>
        </button>
        <button
          className="hover:text-orange-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger Menu Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="fixed inset-0 top-16 bg-[#2c2a2b] -mt-3 text-white text-xl text-end px-5 space-y-4 py-10 md:hidden z-50">
          <Link href="/Unsere">
            <li>
              <a className="block hover:text-orange-400 py-4">
                <Link href="/Unsere">Preise</Link>
              </a>
            </li>
            <li>
              <a className="block hover:text-orange-400 py-4">
                <Link href="/Unsere">Aktionen</Link>
              </a>
            </li>
            <li>
              <a className="block hover:text-orange-400 py-4 whitespace-nowrap">
                Produkte & Handel
              </a>
            </li>
            <li>
              <a className="block hover:text-orange-400 py-4">Plattformen</a>
            </li>
            <li>
              <a className="block hover:text-orange-400 py-4">Börsenwissen</a>
            </li>
            <li>
              <a className="block hover:text-orange-400 py-4">Service</a>
            </li>
          </Link>
          <li className="flex justify-center items-center pt-8">
            {/* Login Button */}
            <button
              className=" text-xl text-white text-center bg-orange-400 px-20 py-3"
              onClick={handleOpenModal}
            >
              Login
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
