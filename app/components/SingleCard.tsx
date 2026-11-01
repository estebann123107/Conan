"use client";

import Image from "next/image";

type Props = {
  title?: string;
  type?: string;
  coverTitle?: string;
  imageSrc?: string;
  shineAsset?: string;
  onClick?: () => void;
};

export default function SingleCard({
  title = "Wishbone",
  type = "Single",
  coverTitle = "Wishbone",
  imageSrc = "/Wishbone.png",
  shineAsset = "/figma-assets/shine-single.svg",
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick?.();
      }}
      className="group flex w-full max-w-[520px] cursor-pointer items-center gap-[20px] rounded-[14px] border border-[#8da3b5]/30 bg-[#162032] p-[16px] transition-all duration-200 hover:border-[#8da3b5]/70 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99]"
      aria-label={`Reproducir sencillo ${title}`}
    >
      {/* Portada con imagen real de main y estilo Figma */}
      <div className="relative size-[96px] shrink-0 overflow-hidden rounded-[6px] drop-shadow-md">
        {/* Imagen real */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="96px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Degradado oscuro inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09101a]/85 via-transparent to-transparent pointer-events-none" />

        {/* Brillo sutil de Figma */}
        <div className="absolute top-[2px] left-[13px] size-[70px] pointer-events-none opacity-40 mix-blend-screen transition-transform duration-500 group-hover:scale-110">
          <Image
            src={shineAsset}
            alt=""
            width={70}
            height={70}
            className="size-full object-contain"
          />
        </div>

        {/* Título en portada */}
        <p className="absolute inset-x-0 bottom-1.5 z-10 px-2 font-serif text-[13px] font-bold text-[#f0f4f8] drop-shadow-md truncate">
          {coverTitle}
        </p>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-[2px]">
        <p className="font-serif text-[24px] font-medium text-[#f0f4f8] transition-colors group-hover:text-[#457490]">
          {title}
        </p>
        <p className="text-[15px] font-normal text-[#8da3b5]">{type}</p>
      </div>
    </div>
  );
}
