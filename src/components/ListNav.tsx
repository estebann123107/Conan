type Props = {
  data: string[];
};

function ListNav({ data }: Props) {
  return (
    <ul className="navLinks">
      {data.map((elemento) => (
        <li key={elemento}>
          <a className="list-group-item" href={`/${elemento}`}>
            {elemento}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ListNav;
