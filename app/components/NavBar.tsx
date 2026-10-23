"use client";

import { FC, useState, useRef, useEffect } from "react";
import { DesktopNavLinks, MobileNavMenu } from "./ListNav";
import Link from "next/link";
import Image from "next/image";

const UserIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" />
    <path
      d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const NavBar: FC = () => {
  const listNav = ["Home", "Music", "Tour", "Merch"];
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed z-20 flex w-full items-center justify-between bg-[rgba(83,130,172,0.171)] p-2.5 backdrop-blur-[10px]">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Conan Gray Signature"
            width={50}
            height={50}
            className="ml-4 h-[50px] w-[50px] md:ml-[50px]"
          />
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <DesktopNavLinks data={listNav} />
          <div className="relative z-50" ref={userMenuRef}>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              aria-label="Menú de usuario"
              aria-expanded={userMenuOpen}
            >
              <UserIcon />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 top-full z-[9999] mt-2 w-48 overflow-hidden rounded-lg bg-[rgba(28,38,47,0.98)] shadow-xl backdrop-blur-md">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-white transition-colors hover:bg-white/10"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 text-white transition-colors hover:bg-white/10"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
          <button
            className="relative z-20 mr-4 flex flex-col gap-1.5 md:hidden"
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
