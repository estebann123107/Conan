import { FC } from "react";
import Link from "next/link";

type Props = {
  data: string[];
};

const ListNav: FC<Props> = ({ data }) => {
  return (
    <ul className="navLinks">
      {data.map((elemento) => (
        <li key={elemento}>
          <Link
            href={elemento === "Home" ? "/" : `/${elemento.toLowerCase()}`}
            className="list-group-item"
          >
            {elemento}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListNav;
