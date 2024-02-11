"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // State to manage the visibility of the menu on mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="#home" aria-label="Home">
          <div className="flex items-center">
            <Image
              src="/rydlle_logo.png"
              alt="Rydlle Logo"
              height={60}
              width={70}
            />
          </div>
        </Link>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5H17M3 10H17M3 15H17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link href="#home">
                <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="#products">
                <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Products
                </div>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  About Us
                </div>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <div className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
