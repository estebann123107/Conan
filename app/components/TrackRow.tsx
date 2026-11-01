"use client";

import { useState } from "react";
import Image from "next/image";

export type Track = {
  id: number;
  title: string;
  duration: string;
};

type Props = {
  track: Track;
  isActive: boolean;
  isSaved: boolean;
  onPlay: (track: Track) => void;
  onToggleSave: (trackId: number) => void;
};

export default function TrackRow({
  track,
  isActive,
  isSaved,
  onPlay,
  onToggleSave,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onPlay(track)}
      className={`group flex w-full cursor-pointer items-center gap-[12px] rounded-[10px] px-[14px] py-[10px] transition-colors duration-150 ${
        isActive
          ? "bg-[#162032] shadow-sm"
          : "hover:bg-[#162032]/60"
      }`}
      role="row"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onPlay(track);
        }
      }}
      aria-label={`${track.title}, duración ${track.duration}`}
    >
      {/* Columna número / Play */}
      <div className="flex h-[32px] w-[44px] shrink-0 items-center justify-center">
        {isActive || isHovered ? (
          <div className="relative size-[14px] shrink-0 text-[#d4af37]">
            <Image
              src="/figma-assets/track-play.svg"
              alt="Play"
              width={14}
              height={14}
              className="size-full object-contain"
            />
          </div>
        ) : (
          <span className="text-[15px] font-normal text-[#8da3b5]">
            {track.id}
          </span>
        )}
      </div>

      {/* Título de la pista */}
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-[15px] font-medium leading-normal transition-colors ${
            isActive ? "text-[#d4af37]" : "text-[#f0f4f8]"
          }`}
        >
          {track.title}
        </p>
      </div>

      {/* Duración */}
      <div className="w-[90px] shrink-0 text-right">
        <p className="text-[15px] font-normal text-[#8da3b5] leading-normal">
          {track.duration}
        </p>
      </div>

      {/* Botón Favorito / Guardado */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleSave(track.id);
        }}
        className="flex size-[36px] shrink-0 items-center justify-center rounded-full p-2 text-[#8da3b5] transition-all hover:scale-110 hover:text-white active:scale-95 cursor-pointer"
        aria-label={isSaved ? "Quitar de guardados" : "Guardar en favoritos"}
      >
        <div className="relative size-[20px] shrink-0">
          <Image
            src={
              isSaved
                ? "/figma-assets/heart-filled.svg"
                : "/figma-assets/heart-outline.svg"
            }
            alt={isSaved ? "Guardado" : "Favorito"}
            width={20}
            height={20}
            className="size-full object-contain"
          />
        </div>
      </button>
    </div>
  );
}
