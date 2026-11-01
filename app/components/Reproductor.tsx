"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Track } from "./TrackRow";

const WAVEFORM_HEIGHTS = [
  11, 22, 17, 18, 24, 12, 12, 9, 15, 25, 16, 7, 12, 7, 18, 10, 9, 8, 12, 23, 16,
  10, 14, 8, 22, 18, 17, 24, 16, 10, 7, 9, 19, 13, 10, 6, 9, 19, 12, 11, 8, 13,
  26, 21, 13, 17, 9, 18, 16, 13, 20, 15, 11, 9, 7, 16, 10, 16, 13, 13, 23, 18,
  8, 7, 11, 25, 23, 13, 17, 13, 14, 14,
];

type Props = {
  currentTrack: Track;
  albumName?: string;
  albumCover?: string;
  isPlaying: boolean;
  isSaved: boolean;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  onToggleSave: () => void;
};

export default function Reproductor({
  currentTrack,
  albumName = "Wishbone Deluxe",
  albumCover = "/Wishbone.png",
  isPlaying,
  isSaved,
  onTogglePlay,
  onPrev,
  onNext,
  onToggleSave,
}: Props) {
  const [activeBarIndex, setActiveBarIndex] = useState(25);
  const [currentTimeSec, setCurrentTimeSec] = useState(68); // 1:08

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveBarIndex((prev) => (prev >= WAVEFORM_HEIGHTS.length - 1 ? 0 : prev + 1));
      setCurrentTimeSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSeek = (index: number) => {
    setActiveBarIndex(index);
    const ratio = index / (WAVEFORM_HEIGHTS.length - 1);
    const parts = currentTrack.duration.split(":");
    const totalSecs =
      parts.length === 2 ? parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10) : 195;
    setCurrentTimeSec(Math.round(ratio * totalSecs));
  };

  return (
    <aside
      aria-label="Reproductor de música"
      className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex w-full max-w-[960px] items-center justify-between gap-3 sm:gap-4 md:gap-[18px] rounded-[20px] border border-[#8da3b5]/30 bg-[#162032]/95 px-3 sm:px-4 md:px-[18px] py-[12px] shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-[9px]">
        {/* Ahora suena con imagen real */}
        <div className="flex h-[46px] w-[180px] sm:w-[220px] md:w-[250px] shrink-0 items-center gap-[12px]">
          <div className="relative size-[46px] shrink-0 overflow-hidden rounded-[6px] border border-white/10 shadow-md">
            <Image
              src={albumCover}
              alt={albumName}
              fill
              sizes="46px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1 leading-normal">
            <p className="truncate font-serif text-[14px] sm:text-[16px] font-medium text-[#f0f4f8]">
              {currentTrack.title}
            </p>
            <p className="truncate text-[11px] sm:text-[12px] font-normal text-[#8da3b5]">
              {albumName}
            </p>
          </div>
        </div>

        {/* Controles centrales y Onda */}
        <div className="flex flex-1 flex-col items-center gap-[6px] min-w-0">
          {/* Botones */}
          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              onClick={onPrev}
              className="flex size-[36px] items-center justify-center rounded-full text-[#8da3b5] transition-all md:hover:bg-white/10 md:hover:text-white active:scale-95 cursor-pointer"
              aria-label="Pista anterior"
            >
              <div className="relative size-[18px] shrink-0">
                <Image
                  src="/figma-assets/player-prev.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-full object-contain"
                />
              </div>
            </button>

            <button
              type="button"
              onClick={onTogglePlay}
              className="flex size-[44px] items-center justify-center rounded-full bg-[#457490] text-[#09101a] shadow-[0px_0px_22px_0px_rgba(69,116,144,0.55)] transition-all md:hover:scale-105 active:scale-95 cursor-pointer"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              <div className="relative size-[18px] shrink-0">
                <Image
                  src={
                    isPlaying
                      ? "/figma-assets/player-pause.svg"
                      : "/figma-assets/player-play.svg"
                  }
                  alt={isPlaying ? "Pausar" : "Reproducir"}
                  width={18}
                  height={18}
                  className="size-full object-contain"
                />
              </div>
            </button>

            <button
              type="button"
              onClick={onNext}
              className="flex size-[36px] items-center justify-center rounded-full text-[#8da3b5] transition-all md:hover:bg-white/10 md:hover:text-white active:scale-95 cursor-pointer"
              aria-label="Pista siguiente"
            >
              <div className="relative size-[18px] shrink-0">
                <Image
                  src="/figma-assets/player-next.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-full object-contain"
                />
              </div>
            </button>
          </div>

          {/* Onda de progreso */}
          <div className="hidden sm:flex w-full items-center gap-[10px]">
            <span className="w-8 text-right text-[11px] font-normal text-[#8da3b5]">
              {formatTime(currentTimeSec)}
            </span>
            <div
              className="flex h-[28px] flex-1 items-center gap-[2px] cursor-pointer py-1"
              role="slider"
              tabIndex={0}
              aria-label="Progreso de la pista"
              aria-valuemin={0}
              aria-valuemax={WAVEFORM_HEIGHTS.length - 1}
              aria-valuenow={activeBarIndex}
            >
              {WAVEFORM_HEIGHTS.map((height, idx) => {
                const isPlayed = idx <= activeBarIndex;
                const isCurrent = idx === activeBarIndex;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSeek(idx)}
                    style={{ height: `${height}px` }}
                    className={`flex-1 min-w-[2px] rounded-[2px] transition-all duration-150 md:hover:opacity-100 ${
                      isPlayed
                        ? isCurrent
                          ? "bg-[#457490] shadow-[0px_0px_10px_1px_#457490]"
                          : "bg-[#457490]"
                        : "bg-[#8da3b5]/60 md:hover:bg-[#8da3b5]"
                    }`}
                  />
                );
              })}
            </div>
            <span className="w-8 text-left text-[11px] font-normal text-[#8da3b5]">
              {currentTrack.duration}
            </span>
          </div>
        </div>

        {/* Botón Favorito lateral */}
        <button
          type="button"
          onClick={onToggleSave}
          className="flex size-[36px] shrink-0 items-center justify-center rounded-full text-[#8da3b5] transition-all md:hover:bg-white/10 md:hover:scale-105 active:scale-95 cursor-pointer"
          aria-label={isSaved ? "Quitar de guardados" : "Guardar en favoritos"}
        >
          <div className="relative size-[20px] shrink-0">
            <Image
              src={
                isSaved
                  ? "/figma-assets/heart-filled.svg"
                  : "/figma-assets/player-heart.svg"
              }
              alt=""
              width={20}
              height={20}
              className="size-full object-contain"
            />
          </div>
        </button>
      </div>
    </aside>
  );
}
