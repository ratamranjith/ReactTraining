import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 bg-gradient-to-r from-indigo-900 via-gray-950 to-gray-950 shadow-lg z-50 ">
      <div className="container mx-auto px-12 py-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-3xl font-bold tracking-wider">
            <Link
              to="#"
              className="hover:text-yellow-300 transition duration-500 ease-in-out"
            >
              RANJITH KUMAR
            </Link>
          </div>

          {/* Navigation for larger screens */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-white text-lg hover:text-yellow-300 transition-transform transform hover:-translate-y-1 ease-in-out duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg hover:text-yellow-300 transition-transform transform hover:rotate-3 ease-in-out duration-300"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-white text-lg hover:text-yellow-300 transition-transform transform hover:scale-110 ease-in-out duration-300"
            >
              Projects
            </Link>
            <Link
              to="#"
              className="text-white text-lg hover:text-yellow-300 transition-transform transform hover:translate-x-2 ease-in-out duration-300"
            >
              Certifications
            </Link>
            <Link
              to="#"
              className="bg-yellow-300 text-red-500 px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </Link>
          </div>

          {/* Hamburger Menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <svg
                className={`w-8 h-8 transition-transform transform ${
                  isOpen ? "rotate-90" : "rotate-0"
                } ease-in-out duration-500`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="md:hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="flex flex-col items-center space-y-4 py-5">
            <Link
              to="#"
              className="text-white text-lg hover:text-yellow-300 transition duration-500 ease-in-out transform hover:-translate-y-1"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg hover:text-yellow-300 transition duration-500 ease-in-out transform hover:rotate-3"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-white text-lg hover:text-yellow-300 transition duration-500 ease-in-out transform hover:scale-110"
            >
              Projects
            </Link>
            <Link
              to="#"
              className="text-white text-lg hover:text-yellow-300 transition duration-500 ease-in-out transform hover:translate-x-2"
            >
              Certifications
            </Link>
            <Link
              to="#"
              className="bg-yellow-300 text-red-500 px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
