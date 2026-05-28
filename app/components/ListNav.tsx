import { FC } from "react";
import Link from "next/link";

type Props = {
  data: string[];
  isOpen: boolean;
  onClose: () => void;
};

const navLinkClass =
  "text-lg text-white no-underline transition-colors duration-300 hover:text-brand";

export const DesktopNavLinks: FC<Pick<Props, "data">> = ({ data }) => (
  <ul className="mr-[100px] hidden list-none gap-5 md:flex">
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
    <div className="fixed inset-x-0 top-[69px] z-14 border-t  bg-[rgba(83,130,172,0.171)] backdrop-blur-md md:hidden">
      <ul className="flex list-none flex-col items-center gap-5 py-5">
        {data.map((elemento) => (
          <li key={elemento}>
            <Link
              href={elemento === "Home" ? "/" : `/${elemento.toLowerCase()}`}
              className={navLinkClass}
              onClick={onClose}
            >
              {elemento}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
