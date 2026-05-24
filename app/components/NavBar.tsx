import { FC } from "react";
import ListNav from "./ListNav";
import Link from "next/link";

const NavBar: FC = () => {
  const listNav = ["Home", "Music", "Tour", "Merch"];
  return (
    <nav>
      <Link href="/">
        <img src="/Logo.png" alt="Conan Gray Signature" className="logo" />
      </Link>
      <ListNav data={listNav} />
    </nav>
  );
};

export default NavBar;
