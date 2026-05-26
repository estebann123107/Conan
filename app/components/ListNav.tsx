import { FC } from "react";
import Link from "next/link";

type Props = {
  data: string[];
  isOpen: boolean;
  onClose: () => void;
};

const ListNav: FC<Props> = ({ data, isOpen, onClose }) => {
  return (
    <>
      <ul className="mr-[100px] hidden list-none gap-5 md:flex">
        {data.map((elemento) => (
          <li key={elemento}>
            <Link
              href={elemento === "Home" ? "/" : `/${elemento.toLowerCase()}`}
              className="text-lg text-white no-underline transition-colors duration-300 hover:text-brand"
            >
              {elemento}
            </Link>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div className="absolute left-0 top-full w-full bg-[rgba(83,130,172,0.171)] backdrop-blur-[10px] md:hidden">
          <ul className="flex list-none flex-col items-center gap-5 py-5">
            {data.map((elemento) => (
              <li key={elemento}>
                <Link
                  href={elemento === "Home" ? "/" : `/${elemento.toLowerCase()}`}
                  className="text-lg text-white no-underline transition-colors duration-300 hover:text-brand"
                  onClick={onClose}
                >
                  {elemento}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ListNav;
