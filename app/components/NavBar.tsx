"use client";

import { FC, useState } from "react";
import { DesktopNavLinks, MobileNavMenu } from "./ListNav";
import Link from "next/link";

const NavBar: FC = () => {
  const listNav = ["Home", "Music", "Tour", "Merch"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed z-20 flex w-full items-center justify-between bg-[rgba(83,130,172,0.171)] p-2.5 backdrop-blur-[10px]">
        <Link href="/">
          <img
            src="/Logo.png"
            alt="Conan Gray Signature"
            className="ml-[50px] h-[50px] w-[50px]"
          />
        </Link>
        <div className="flex items-center">
          <DesktopNavLinks data={listNav} />
          <button
            className="relative z-20 mr-[50px] flex flex-col gap-1.5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-[3px] w-[25px] bg-white transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[3px] w-[25px] bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[3px] w-[25px] bg-white transition-transform duration-300 ${isOpen ? "translate-y-[-7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>
      <MobileNavMenu
        data={listNav}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default NavBar;
