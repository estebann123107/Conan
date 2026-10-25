import { FC } from "react";
import Link from "next/link";

type Props = {
  data: string[];
  isOpen: boolean;
  onClose: () => void;
};

const navLinkClass =
  "text-lg text-white no-underline transition-colors duration-300 hover:text-brand";
const mobileNavLinkClass =
  "block px-4 py-3 text-sm text-white no-underline transition-colors hover:text-brand focus-visible:bg-white/10 focus-visible:outline-none";

export const DesktopNavLinks: FC<Pick<Props, "data">> = ({ data }) => (
  <ul className="mr-4 hidden list-none gap-5 md:flex lg:mr-[50px]">
    {data.map((elemento) => (
      <li key={elemento}>
        <Link
          href={elemento === "Home" ? "/" : `/${elemento.toLowerCase()}`}
          className={navLinkClass}
        >
          {elemento}
        </Link>
      </li>
    ))}
  </ul>
);

export const MobileNavMenu: FC<Props> = ({ data, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0  top-[80px] z-14 md:hidden">
      <ul className="ml-auto mr-4 flex w-30 list-none flex-col overflow-hidden rounded-lg bg-[rgba(83,130,172,0.171)] py-2 shadow-xl backdrop-blur-md">
        {data.map((elemento) => (
          <li key={elemento}>
            <Link
              href={elemento === "Home" ? "/" : `/${elemento.toLowerCase()}`}
              className={mobileNavLinkClass}
              onClick={onClose}
            >
              {elemento}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/login" className={mobileNavLinkClass} onClick={onClose}>
            Iniciar sesión
          </Link>
        </li>
        <li>
          <Link href="/register" className={mobileNavLinkClass} onClick={onClose}>
            Registrarse
          </Link>
        </li>
      </ul>
    </div>
  );
};
