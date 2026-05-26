import Link from "next/link";

type Props = {
  id: string;
  Ruta: string;
  imagen: string;
  nombre: string;
};

export default function AlbumsTarjeta({ id, Ruta, imagen, nombre }: Props) {
  return (
    <div
      id={id}
      className="h-[200px] w-full rounded-[10px] flex flex-col items-center justify-center"
    >
      <Link
        href={`/${Ruta}`}
        className="text-white no-underline transition-colors duration-300 hover:text-brand flex flex-col items-center justify-center"
      >
        <img src={imagen} alt="Disco" className="w-[200px] mb-2" />
        <h3>{nombre}</h3>
      </Link>
    </div>
  );
}
