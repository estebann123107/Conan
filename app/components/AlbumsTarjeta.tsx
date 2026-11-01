"use client";

import Image from "next/image";

export type AlbumData = {
  id: string;
  Ruta: string;
  nombre: string;
  yearMeta: string;
  gradient: string;
  shineAsset: string;
  imagenReal: string;
  tracks?: {
    id: number;
    title: string;
    duration: string;
  }[];
};

type Props = {
  album: AlbumData;
  isSelected?: boolean;
  onSelect?: (album: AlbumData) => void;
};

export default function AlbumsTarjeta({ album, isSelected, onSelect }: Props) {
  return (
    <div
      onClick={() => onSelect?.(album)}
      className="group flex w-[208px] shrink-0 cursor-pointer flex-col gap-[12px] text-left transition-transform duration-200 hover:-translate-y-1.5"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect?.(album);
        }
      }}
      aria-label={`Seleccionar álbum ${album.nombre}`}
    >
      {/* Portada con imagen real del álbum y estilo Figma */}
      <div
        className={`relative size-[208px] shrink-0 overflow-hidden rounded-[6px] drop-shadow-[0px_14px_20px_rgba(0,0,0,0.55)] transition-all duration-300 ${
          isSelected
            ? "ring-2 ring-[#d4af37] shadow-[0_0_22px_rgba(212,175,55,0.45)]"
            : "ring-1 ring-white/10 group-hover:ring-[#8da3b5]/60"
        }`}
      >
        {/* Imagen real del álbum (de la rama main) */}
        <Image
          src={album.imagenReal}
          alt={album.nombre}
          fill
          sizes="208px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Degradado oscuro inferior estilo Figma para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09101a]/85 via-[#09101a]/25 via-40% to-transparent pointer-events-none" />

        {/* Brillo decorativo sutil de Figma */}
        <div className="absolute -top-[10px] -right-[10px] size-[120px] pointer-events-none opacity-40 mix-blend-screen transition-opacity duration-300 group-hover:opacity-70">
          <Image
            src={album.shineAsset}
            alt=""
            width={120}
            height={120}
            className="size-full object-contain"
          />
        </div>

        {/* Título en la portada (estilo Figma) */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-[14px]">
          <p className="font-serif text-[19px] font-bold leading-[21px] text-[#f0f4f8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] truncate">
            {album.nombre}
          </p>
        </div>
      </div>

      {/* Textos bajo la portada (estilo Figma) */}
      <div className="flex flex-col gap-0.5">
        <p className="font-serif text-[18px] font-medium leading-normal text-[#f0f4f8] transition-colors group-hover:text-[#d4af37] truncate">
          {album.nombre}
        </p>
        <p className="text-[14px] font-normal text-[#8da3b5] leading-normal">
          {album.yearMeta}
        </p>
      </div>
    </div>
  );
}
