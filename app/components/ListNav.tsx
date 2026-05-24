import Link from "next/link";

type Props = {
  data: string[];
};

function ListNav({ data }: Props) {
  return (
    <ul className="navLinks">
      {data.map((elemento) => (
        <li key={elemento}>
          <Link href={`/${elemento.toLowerCase()}`} className="list-group-item">
            {elemento}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListNav;
