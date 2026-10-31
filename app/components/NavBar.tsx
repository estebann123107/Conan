"use client";

import { type FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { DesktopNavLinks, MobileNavMenu, LoginIcon, RegisterIcon } from "./ListNav";

const UserIcon: FC = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6"
  >
    <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5.5 20a6.5 6.5 0 0 1 13 0"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const NavBar: FC = () => {
  const listNav = ["Home", "Music", "Tour", "Merch"];
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);
  const accountButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        isAccountMenuOpen &&
        event.target instanceof Node &&
        !accountMenuRef.current?.contains(event.target)
      ) {
        setIsAccountMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isAccountMenuOpen) {
          setIsAccountMenuOpen(false);
          accountButtonRef.current?.focus();
        }
        if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isAccountMenuOpen, isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-20 flex w-full items-center justify-between bg-[rgba(83,130,172,0.171)] p-2.5 backdrop-blur-[10px]">
        <Link
          href="/"
          aria-label="Conan Gray, inicio"
          className="transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <Image
            src="/Logo.png"
            alt="Conan Gray Signature"
            width={50}
            height={50}
            className="ml-4 h-[50px] w-[50px] md:ml-[50px]"
            priority
          />
        </Link>
        <div className="flex items-center gap-2 md:gap-4">
          <DesktopNavLinks data={listNav} />

          {/* Menú de cuenta desktop con dropdown animado */}
          <div
            className="relative z-50 mr-3 hidden md:block md:mr-[10px]"
            ref={accountMenuRef}
          >
            <button
              ref={accountButtonRef}
              type="button"
              className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:bg-white/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                isAccountMenuOpen ? "bg-white/20 shadow-md ring-2 ring-white/30 scale-105" : ""
              }`}
              onClick={() => {
                setIsAccountMenuOpen((open) => !open);
                setIsOpen(false);
              }}
              aria-label="Abrir opciones de cuenta"
              aria-expanded={isAccountMenuOpen}
              aria-controls="account-menu"
            >
              <UserIcon />
            </button>

            {/* Menú desplegable con transiciones de entrada y salida */}
            <div
              id="account-menu"
              role="menu"
              aria-label="Opciones de cuenta"
              aria-hidden={!isAccountMenuOpen}
              className={`absolute right-0 top-full mt-4 w-48 origin-top-right overflow-hidden rounded-2xl border border-white/15 bg-[#1c262f]/95 p-1.5 shadow-2xl backdrop-blur-xl transition-all duration-200 ease-out ${
                isAccountMenuOpen
                  ? "pointer-events-auto visible scale-100 opacity-100 translate-y-0"
                  : "pointer-events-none invisible scale-95 opacity-0 -translate-y-2"
              }`}
            >
              <div className="flex flex-col gap-1">
                <Link
                  href="/login"
                  role="menuitem"
                  className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/90 no-underline transition-all duration-200 hover:bg-white/10 hover:text-white hover:translate-x-1 active:scale-[0.98] focus-visible:bg-white/10 focus-visible:outline-none"
                  onClick={() => setIsAccountMenuOpen(false)}
                >
                  <LoginIcon className="h-4 w-4 text-white/70 transition-colors group-hover:text-white" />
                  <span>Iniciar sesión</span>
                </Link>
                <Link
                  href="/register"
                  role="menuitem"
                  className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/90 no-underline transition-all duration-200 hover:bg-white/10 hover:text-white hover:translate-x-1 active:scale-[0.98] focus-visible:bg-white/10 focus-visible:outline-none"
                  onClick={() => setIsAccountMenuOpen(false)}
                >
                  <RegisterIcon className="h-4 w-4 text-brand-light transition-colors group-hover:text-white" />
                  <span>Registrarse</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Botón hamburguesa móvil con animación suave */}
          <button
            type="button"
            className="relative z-40 mr-4 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-white transition-all duration-200 hover:bg-white/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-white md:hidden"
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
              className={`block h-[2.5px] w-[22px] rounded-full bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-[8.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2.5px] w-[22px] rounded-full bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`block h-[2.5px] w-[22px] rounded-full bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "-translate-y-[8.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Menú de navegación móvil */}
      <MobileNavMenu
        data={listNav}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default NavBar;
