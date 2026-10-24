"use client";

import { FC, useEffect, useRef, useState } from "react";
import { DesktopNavLinks, MobileNavMenu } from "./ListNav";
import Link from "next/link";

const NavBar: FC = () => {
  const listNav = ["Home", "Music", "Tour", "Merch"];
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const accountButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isAccountMenuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !accountMenuRef.current?.contains(event.target)
      ) {
        setIsAccountMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAccountMenuOpen(false);
        accountButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAccountMenuOpen]);

  return (
    <>
      <nav className="fixed z-20 flex w-full items-center justify-between bg-[rgba(83,130,172,0.171)] p-2.5 backdrop-blur-[10px]">
        <Link href="/">
          <img
            src="/Logo.png"
            alt="Conan Gray Signature"
            className="ml-3 h-[50px] w-[50px] md:ml-[50px]"
          />
        </Link>
        <div className="flex items-center">
          <DesktopNavLinks data={listNav} />
          <button
            className="relative z-20 mr-3 flex flex-col gap-1.5 md:hidden"
            onClick={() => {
              setIsOpen((open) => !open);
              setIsAccountMenuOpen(false);
            }}
            aria-label={
              isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
            }
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
          <div className="relative mr-3 md:mr-[10px]" ref={accountMenuRef}>
            <button
              ref={accountButtonRef}
              type="button"
              className="flex h-10  w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              onClick={() => {
                setIsAccountMenuOpen((open) => !open);
                setIsOpen(false);
              }}
              aria-label="Abrir opciones de cuenta"
              aria-expanded={isAccountMenuOpen}
              aria-controls="account-menu"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
              >
                <circle
                  cx="12"
                  cy="8"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M5.5 20a6.5 6.5 0 0 1 13 0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {isAccountMenuOpen && (
              <nav
                id="account-menu"
                aria-label="Opciones de cuenta"
                className="absolute right-0 top-full z-30 mt-[20px] w-52 overflow-hidden rounded-lg border border-transparent bg-brand-dark/95 py-2 shadow-lg backdrop-blur-md"
              >
                <Link
                  href="/login"
                  className="block px-4 py-3 text-sm text-white transition-colors hover:text-brand focus-visible:bg-white/10 focus-visible:outline-none"
                  onClick={() => setIsAccountMenuOpen(false)}
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-3 text-sm text-white transition-colors hover:text-brand focus-visible:bg-white/10 focus-visible:outline-none"
                  onClick={() => setIsAccountMenuOpen(false)}
                >
                  Registrarse
                </Link>
              </nav>
            )}
          </div>
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
