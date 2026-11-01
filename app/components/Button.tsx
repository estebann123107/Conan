"use client";

import Image from "next/image";

type Props = {
  linkButton: string;
  contenido: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
};

export default function ButtonLink({
  linkButton,
  contenido,
  icon = "/figma-assets/hero-play.svg",
  className = "",
  onClick,
}: Props) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (linkButton) {
      window.open(linkButton, "_blank");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group cursor-pointer rounded-full bg-[#d4af37] px-[26px] py-[14px] text-[15px] font-semibold text-[#09101a] transition-all duration-200 hover:brightness-110 active:scale-95 shadow-[0_4px_20px_rgba(212,175,55,0.35)] flex items-center justify-center gap-[10px] ${className}`}
    >
      {icon && (
        <div className="relative size-[16px] shrink-0 transition-transform duration-200 group-hover:scale-110">
          <Image
            src={icon}
            alt=""
            width={16}
            height={16}
            className="size-full object-contain"
          />
        </div>
      )}
      <span>{contenido}</span>
    </button>
  );
}
