"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constants";
import { MovingBorderDemo } from "./MovingBorderButton";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  
  // Create a ref to reference the dropdown and hamburger menu elements
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside both the dropdown and hamburger
      if (
        dropdownRef.current && 
        hamburgerRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setToggleDropdown(false);
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="lg:px-[100px] md:px-[50px] px-[15px] h-[65px] flex items-center justify-between shadow-lg fixed top-0 left-0 right-0 bg-white z-50">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={40} height={60} />
      </Link>
      <ul className="flex gap-10">
        {NavLinks.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="hover:text-university-yellow font-semibold lg:block hidden"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="flex gap-5 items-center">
        <div className="relative">
          <div ref={hamburgerRef}>
            <GiHamburgerMenu
              size={30}
              className="text-university-yellow cursor-pointer lg:hidden"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
          </div>
          {toggleDropdown && (
            <div
              ref={dropdownRef}
              className="bg-gray-100 text-black top-10 lg:hidden -left-10 absolute flex flex-col p-4 rounded-xl"
            >
              <Link
                href="/"
                onClick={() => setToggleDropdown(false)}
                className="parag hover:text-university-yellow text-black"
              >
                Home
              </Link>
              <Link
                href="/eb"
                onClick={() => setToggleDropdown(false)}
                className="parag hover:text-university-yellow text-black"
              >
                EB
              </Link>
              <Link
                href="/departments"
                onClick={() => setToggleDropdown(false)}
                className="parag hover:text-university-yellow text-black"
              >
                Departments
              </Link>
              <Link
                href="/calendar"
                onClick={() => setToggleDropdown(false)}
                className="parag hover:text-university-yellow text-black"
              >
                Calendar
              </Link>
              <Link
                href="/testimonials"
                onClick={() => setToggleDropdown(false)}
                className="parag hover:text-university-yellow text-black"
              >
                Testimonials
              </Link>
              <Link
                href="/trackers"
                onClick={() => setToggleDropdown(false)}
                className="parag hover:text-university-yellow text-black"
              >
                Trackers
              </Link>
            </div>
          )}
        </div>
        <a href="mailto:rayen.belkhoujaa@gmail.com">
          <MovingBorderDemo />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
