import Link from "next/link";

type Props = {
  id: string;
  Ruta: string;
  imagen: string;
  nombre: string;
};

export default function AlbumsTarjeta({ id, Ruta, imagen, nombre }: Props) {
  return (
    <div id={id} className="Album">
      <Link href={`/${Ruta}`}>
        <img src={imagen} alt="Disco" />
        <h3>{nombre}</h3>
      </Link>
    </div>
  );
}
