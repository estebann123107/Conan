import { FC } from "react";
import Link from "next/link";

type Props = {
  data: string[];
  isOpen: boolean;
  onClose: () => void;
};

export const LoginIcon: FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);

export const RegisterIcon: FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

export const DesktopNavLinks: FC<Pick<Props, "data">> = ({ data }) => (
  <ul className="mr-4 hidden list-none items-center gap-6 md:flex lg:mr-[50px]">
    {data.map((elemento) => (
      <li key={elemento}>
        <Link
          href={elemento === "Home" ? "/" : `/${elemento.toLowerCase()}`}
          className="group relative py-1 text-base lg:text-lg font-medium text-white/90 no-underline transition-colors duration-200 hover:text-white"
        >
          <span>{elemento}</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-brand transition-all duration-300 ease-out group-hover:w-full" />
        </Link>
      </li>
    ))}
  </ul>
);

export const MobileNavMenu: FC<Props> = ({ data, isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop con transición suave de opacidad */}
      <div
        className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menú desplegable móvil con animación de escala, deslizamiento y fade */}
      <div
        id="mobile-nav-menu"
        role="region"
        aria-label="Menú de navegación móvil"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 top-[74px] z-30 px-4 md:hidden transition-all duration-300 ease-out ${
          isOpen
            ? "pointer-events-auto visible scale-100 opacity-100 translate-y-0"
            : "pointer-events-none invisible scale-95 opacity-0 -translate-y-3"
        }`}
      >
        <div className="ml-auto w-56 origin-top-right overflow-hidden rounded-2xl border border-white/15 bg-[#1c262f]/95 p-2 shadow-2xl backdrop-blur-xl">
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {data.map((elemento, index) => (
              <li
                key={elemento}
                className={isOpen ? "animate-menu-item" : ""}
                style={{ animationDelay: `${index * 45}ms` }}
              >
                <Link
                  href={elemento === "Home" ? "/" : `/${elemento.toLowerCase()}`}
                  className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/90 no-underline transition-all duration-200 hover:bg-white/10 hover:text-white hover:translate-x-1 active:scale-[0.98]"
                  onClick={onClose}
                >
                  <span>{elemento}</span>
                  <span className="text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/80">
                    &rarr;
                  </span>
                </Link>
              </li>
            ))}

            <li className="my-1 border-t border-white/10" aria-hidden="true" />

            <li
              className={isOpen ? "animate-menu-item" : ""}
              style={{ animationDelay: `${data.length * 45}ms` }}
            >
              <Link
                href="/login"
                className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-white/90 no-underline transition-all duration-200 hover:bg-white/10 hover:text-white hover:translate-x-1 active:scale-[0.98]"
                onClick={onClose}
              >
                <LoginIcon className="h-4 w-4 text-white/70 transition-colors group-hover:text-white" />
                <span>Iniciar sesión</span>
              </Link>
            </li>
            <li
              className={isOpen ? "animate-menu-item" : ""}
              style={{ animationDelay: `${(data.length + 1) * 45}ms` }}
            >
              <Link
                href="/register"
                className="group flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium text-brand-light no-underline transition-all duration-200 hover:bg-brand/20 hover:text-white hover:translate-x-1 active:scale-[0.98]"
                onClick={onClose}
              >
                <RegisterIcon className="h-4 w-4 text-brand-light transition-colors group-hover:text-white" />
                <span>Registrarse</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
