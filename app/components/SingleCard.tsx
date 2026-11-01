"use client";

import Image from "next/image";

type Props = {
  title?: string;
  type?: string;
  coverTitle?: string;
  shineAsset?: string;
  gradient?: string;
  onClick?: () => void;
};

export default function SingleCard({
  title = "Wishbone",
  type = "Single",
  coverTitle = "Wishbone",
  shineAsset = "/figma-assets/shine-single.svg",
  gradient = "from-[#1a3a52] to-[#09101a]",
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
      className="group flex w-full max-w-[520px] cursor-pointer items-center gap-[20px] rounded-[14px] border border-[#8da3b5]/30 bg-[#162032] p-[16px] transition-all duration-200 hover:border-[#8da3b5]/70 hover:shadow-lg active:scale-[0.99]"
      aria-label={`Reproducir sencillo ${title}`}
    >
      {/* Portada */}
      <div className="relative size-[96px] shrink-0 overflow-hidden rounded-[6px] p-[8px] flex flex-col justify-end drop-shadow-md">
        {/* Fondo degradado */}
        <div className={`absolute inset-0 bg-gradient-to-b ${gradient}`} />

        {/* Brillo */}
        <div className="absolute top-[2px] left-[13px] size-[70px] pointer-events-none opacity-90 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={shineAsset}
            alt=""
            width={70}
            height={70}
            className="size-full object-contain"
          />
        </div>

        {/* Sombra suave inferior */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09101a]/60 pointer-events-none" />

        {/* Título en portada */}
        <p className="relative z-10 font-serif text-[14px] font-bold text-[#f0f4f8] whitespace-nowrap">
          {coverTitle}
        </p>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-[2px]">
        <p className="font-serif text-[24px] font-medium text-[#f0f4f8] transition-colors group-hover:text-[#d4af37]">
          {title}
        </p>
        <p className="text-[15px] font-normal text-[#8da3b5]">{type}</p>
      </div>
    </div>
  );
}
