import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-2 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSZAHXaQEA3BsMWrgoGodCqxh7E-1YOqnonH_RqS6eJVHkFpgNNRLcg98aogSulalC2X4&usqp=CAU"  alt="logo" className="h-20 w-20 object-contain" />
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">MJCET Forms</span>
          </div>
          {/* Navigation links */}
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/allforms"
                  className="text-white hover:text-blue-200 transition duration-300"
                >
                All forms
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu (hidden on large screens) */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
