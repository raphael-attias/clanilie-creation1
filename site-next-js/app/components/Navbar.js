"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar flex flex-wrap items-center justify-between p-6" style={{ backgroundColor: "rgb(185, 225, 139)" }}>
      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-[#016435] mr-6">
        <span className="font-semibold text-xl tracking-tight">Clanilie Création</span>
      </div>

      {/* Mobile menu button */}
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-[#016435] border-[#016435] hover:text-white hover:border-[#016435]"
          style={{ backgroundColor: "#ff6dc6", maxWidth: "65px", maxHeight: "65px" }}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            style={{ stroke: "black" }}
          >
            <title>Menu</title>
            {isOpen ? (
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414z" />
            ) : (
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop and mobile menu */}
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
        <div className="text-sm lg:flex-grow">
          <Link href="/" legacyBehavior>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-[#016435] hover:text-white mr-4">
              Home
            </a>
          </Link>

          <Link href="/creation" legacyBehavior>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-[#016435] hover:text-white mr-4">
              Création
            </a>
          </Link>

          <Link href="/contact" legacyBehavior>
            <a className="block mt-4 lg:inline-block lg:mt-0 text-[#016435] hover:text-white">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
