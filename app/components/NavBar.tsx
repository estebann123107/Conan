"use client";

import { type FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LoginIcon, RegisterIcon } from "./ListNav";

type NavBarProps = {
  savedCount?: number;
};

const NavBar: FC<NavBarProps> = ({ savedCount = 1 }) => {
  const pathname = usePathname();
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

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Music",
      href: "/music",
      icon: "/figma-assets/nav-music.svg",
    },
    { name: "Tour", href: "/tour" },
    { name: "Merch", href: "/merch" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-[7px] bg-[#162032]/85 border-b border-[#8da3b5]/20 transition-all duration-300">
      <div className="mx-auto flex h-[65px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-[160px]">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-[10px] no-underline transition-opacity hover:opacity-90"
          aria-label="Conan Gray inicio"
        >
          <div className="relative size-[22px] shrink-0">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={22}
              height={22}
              className="size-full object-contain"
              priority
            />
          </div>
          <span className="font-serif text-[20px] font-bold text-[#f0f4f8] tracking-tight">
            Conan Gray
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-[12px] md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-[7px] rounded-full px-[12px] py-[8px] text-[15px] font-medium no-underline transition-all duration-200 ${
                  isActive
                    ? "bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/35 shadow-xs"
                    : "text-[#8da3b5] hover:text-[#f0f4f8] hover:bg-white/5"
                }`}
              >
                {link.icon && (
                  <div className="relative size-[16px] shrink-0 opacity-80">
                    <Image
                      src={link.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="size-full object-contain"
                    />
                  </div>
                )}
                <span>{link.name}</span>
              </Link>
            );
          })}

          {/* Guardados Pill */}
          <a
            href="#tracklist"
            className="flex items-center gap-[7px] rounded-full px-[12px] py-[8px] text-[15px] font-medium text-[#8da3b5] no-underline transition-all duration-200 hover:text-[#f0f4f8] hover:bg-white/5"
          >
            <div className="relative size-[16px] shrink-0 opacity-80">
              <Image
                src="/figma-assets/nav-saved.svg"
                alt=""
                width={16}
                height={16}
                className="size-full object-contain"
              />
            </div>
            <span>Guardados</span>
            <span className="rounded-full bg-[#162032] border border-[#8da3b5]/30 px-1.5 py-0.2 text-[13px] font-semibold text-[#f0f4f8]">
              {savedCount}
            </span>
          </a>

          {/* Iniciar sesión / Menú de cuenta */}
          <div className="relative" ref={accountMenuRef}>
            <button
              ref={accountButtonRef}
              type="button"
              onClick={() => setIsAccountMenuOpen((prev) => !prev)}
              className="flex items-center justify-center rounded-full border border-[#8da3b5]/60 px-[14px] py-[8px] text-[15px] font-medium text-[#f0f4f8] transition-all duration-200 hover:border-white hover:bg-white/10 active:scale-95 cursor-pointer"
              aria-expanded={isAccountMenuOpen}
              aria-haspopup="true"
            >
              Iniciar sesión
            </button>

            {/* Dropdown Menu */}
            {isAccountMenuOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-48 origin-top-right overflow-hidden rounded-2xl border border-white/15 bg-[#162032]/95 p-1.5 shadow-2xl backdrop-blur-xl animate-menu-item"
                role="menu"
              >
                <Link
                  href="/login"
                  role="menuitem"
                  className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#f0f4f8] no-underline transition-all hover:bg-white/10"
                  onClick={() => setIsAccountMenuOpen(false)}
                >
                  <LoginIcon className="h-4 w-4 text-[#8da3b5] group-hover:text-white" />
                  <span>Iniciar sesión</span>
                </Link>
                <Link
                  href="/register"
                  role="menuitem"
                  className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#d4af37] no-underline transition-all hover:bg-[#d4af37]/15"
                  onClick={() => setIsAccountMenuOpen(false)}
                >
                  <RegisterIcon className="h-4 w-4 text-[#d4af37]" />
                  <span>Registrarse</span>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg text-white transition-all hover:bg-white/10 active:scale-95 md:hidden cursor-pointer"
          onClick={() => {
            setIsOpen((open) => !open);
            setIsAccountMenuOpen(false);
          }}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span
            className={`block h-[2px] w-[20px] rounded-full bg-white transition-all duration-300 ${
              isOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[20px] rounded-full bg-white transition-all duration-300 ${
              isOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-[20px] rounded-full bg-white transition-all duration-300 ${
              isOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[65px] z-40 bg-[#162032]/98 border-b border-[#8da3b5]/20 p-6 backdrop-blur-xl md:hidden animate-menu-item">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-[#f0f4f8] no-underline hover:bg-white/10"
              >
                {link.icon && (
                  <Image
                    src={link.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="opacity-80"
                  />
                )}
                <span>{link.name}</span>
              </Link>
            ))}
            <a
              href="#tracklist"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-[#f0f4f8] no-underline hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/figma-assets/nav-saved.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="opacity-80"
                />
                <span>Guardados</span>
              </div>
              <span className="rounded-full bg-[#09101a] px-2.5 py-0.5 text-xs font-semibold text-[#d4af37]">
                {savedCount}
              </span>
            </a>
            <div className="my-2 border-t border-[#8da3b5]/20" />
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-[#f0f4f8] no-underline hover:bg-white/10"
            >
              <LoginIcon className="h-5 w-5 text-[#8da3b5]" />
              <span>Iniciar sesión</span>
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 rounded-xl bg-[#d4af37] px-4 py-3 text-base font-semibold text-[#09101a] no-underline"
            >
              <RegisterIcon className="h-5 w-5 text-[#09101a]" />
              <span>Registrarse</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
