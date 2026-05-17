type Props = {
  id: string;
  link: string;
  imagen: string;
  nombre: string;
};

function Albums({ id, link, imagen, nombre }: Props) {
  return (
    <div id={id} className="Album">
      <a href={link}>
        <img src={imagen} alt="Disco" />
        <h3>{nombre}</h3>
      </a>
    </div>
  );
}

export default Albums;
