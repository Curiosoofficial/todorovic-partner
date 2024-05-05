"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-7 fixed top-0 nav-index w-full bg-light-900 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Link href="/">
          <p className="h1-bold max-sm:h2-bold">
            Todorovic<span className="text-primary-500">Partner</span>
          </p>
        </Link>

        <div className="hidden lg:flex pr-10">
          {navLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            return (
              <Link
                key={item.label}
                href={item.route}
                className={`pl-10 base-semibold ${
                  isActive ? "text-primary-500" : ""
                }`}
              >
                <p className="base-bold font-spaceGrotesk">{item.label}</p>
              </Link>
            );
          })}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="toggle-index">
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex items-start justify-between p-7 pt-8 fixed  nav-index h-screen w-full bg-light-900">
          <div className="flex flex-col">
          {navLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            return (
              <Link
                key={item.label}
                href={item.route}
                className={`pb-5 base-semibold ${
                  isActive ? "text-primary-500" : ""
                }`}
                onClick={toggleMenu}
              >
                <p className="h2-bold font-spaceGrotesk">{item.label}</p>
              </Link>
            );
          })}
          </div>

          <button onClick={toggleMenu} className="toggle-index">
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
      
      )}
    </>
  );
};

export default Navbar;
