import React, { useState } from "react";
import { Link } from "react-router-dom";
import HackMateImage from "/HackMate_Transparent.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="text-customGray flex justify-between items-center bg-customBlack w-screen px-4">
      {/* Logo Section */}
      <section>
        <img src={HackMateImage} alt="" />
      </section>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex items-center mr-3 px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-gray-900 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <section className="hidden lg:flex text-customGray">
        <ul className="flex justify-center space-x-8 border-b py-2">
          <li className="relative">
            <Link
              to="/"
              className="block transition-transform duration-300 transform hover:translate-y-[-4px]"
            >
              HOME
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/login"
              className="block transition-transform duration-300 transform hover:translate-y-[-4px]"
            >
              SERVICES
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/teams"
              className="block transition-transform duration-300 transform hover:translate-y-[-4px]"
            >
              JOIN A TEAM
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/about"
              className="block transition-transform duration-300 transform hover:translate-y-[-4px]"
            >
              ABOUT US
            </Link>
          </li>
        </ul>
      </section>

      {/* Auth Links */}
      <section className="hidden lg:flex border-solid border-2 border-white p-2 mr-2 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/50">
        {isLoggedIn ? (
          <Link to="/profile" className="text-customGray">
            MY PROFILE
          </Link>
        ) : (
          <Link to="/sign-up" className="text-customGray">
            SIGN UP/LOGIN
          </Link>
        )}
      </section>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-customBlack z-50 transition-transform duration-500 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-customGray hover:text-gray-900"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center mt-16">
          <li className="my-2">
            <Link
              to="/"
              className="transition-transform duration-300 transform hover:translate-y-[-4px]"
            >
              Home
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/login"
              className="transition-transform duration-300 transform hover:translate-y-[-4px]"
            >
              Services
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/teams"
              className="transition-transform duration-300 transform hover:translate-y-[-4px]"
            >
              Join a Team
            </Link>
          </li>
          <li className="my-2">
            <Link
              to="/about"
              className="transition-transform duration-300 transform hover:translate-y-[-4px] hover:shadow-lg"
            >
              About Us
            </Link>
          </li>
          <li className="my-2">
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="border-2 border-white py-2 px-4 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/50"
              >
                My Profile
              </Link>
            ) : (
              <Link
                to="/sign-up"
                className="border-2 border-white py-2 px-4 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Sign Up / Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
