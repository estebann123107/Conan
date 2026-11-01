"use client";

import Image from "next/image";

export type AlbumData = {
  id: string;
  Ruta: string;
  nombre: string;
  yearMeta: string;
  gradient: string;
  shineAsset: string;
  imagenReal?: string;
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
      className="group flex w-[208px] shrink-0 cursor-pointer flex-col gap-[12px] text-left transition-transform duration-200 hover:-translate-y-1"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect?.(album);
        }
      }}
      aria-label={`Seleccionar álbum ${album.nombre}`}
    >
      {/* Portada */}
      <div
        className={`relative size-[208px] shrink-0 overflow-hidden rounded-[6px] p-[14px] drop-shadow-[0px_14px_20px_rgba(0,0,0,0.5)] transition-all duration-300 ${
          isSelected
            ? "ring-2 ring-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            : "group-hover:ring-1 group-hover:ring-[#8da3b5]/50"
        }`}
      >
        {/* Fondo degradado */}
        <div className={`absolute inset-0 bg-gradient-to-b ${album.gradient}`} />

        {/* Brillo decorativo Figma */}
        <div className="absolute -top-[8.44px] left-[53.96px] size-[150px] pointer-events-none opacity-90 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={album.shineAsset}
            alt=""
            width={150}
            height={150}
            className="size-full object-contain"
          />
        </div>

        {/* Degradado de sombra inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-[45%] to-[#09101a]/70 pointer-events-none" />

        {/* Título en la portada */}
        <div className="relative z-10 mt-auto">
          <p className="font-serif text-[20px] font-bold leading-[21px] text-[#f0f4f8] drop-shadow-md">
            {album.nombre}
          </p>
        </div>
      </div>

      {/* Textos bajo la portada */}
      <div className="flex flex-col gap-1">
        <p className="font-serif text-[18px] font-medium leading-normal text-[#f0f4f8] truncate">
          {album.nombre}
        </p>
        <p className="text-[14px] font-normal text-[#8da3b5] leading-normal">
          {album.yearMeta}
        </p>
      </div>
    </div>
  );
}
