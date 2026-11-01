"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import NavBar from "./NavBar";
import ButtonLink from "./Button";
import AlbumsTarjeta, { AlbumData } from "./AlbumsTarjeta";
import SingleCard from "./SingleCard";
import TrackRow, { Track } from "./TrackRow";
import Reproductor from "./Reproductor";

const INITIAL_ALBUMS: AlbumData[] = [
  {
    id: "1",
    Ruta: "SunsetSeason",
    nombre: "Sunset Season",
    yearMeta: "2019 · EP",
    gradient: "from-[#1f4260] to-[#0e1d30]",
    shineAsset: "/figma-assets/shine-sunset.svg",
    imagenReal: "/SunsetSeason.png",
    tracks: [
      { id: 1, title: "Idle Town", duration: "3:58" },
      { id: 2, title: "Generation Why", duration: "3:40" },
      { id: 3, title: "Crush Culture", duration: "3:24" },
      { id: 4, title: "Greek God", duration: "3:56" },
      { id: 5, title: "Lookalike", duration: "3:41" },
    ],
  },
  {
    id: "2",
    Ruta: "KidKrow",
    nombre: "Kid Krow",
    yearMeta: "2020 · Álbum",
    gradient: "from-[#162032] to-[#2b3b52]",
    shineAsset: "/figma-assets/shine-kidkrow.svg",
    imagenReal: "/KidKrow.png",
    tracks: [
      { id: 1, title: "Comfort Crowd", duration: "2:54" },
      { id: 2, title: "Wish You Were Sober", duration: "2:48" },
      { id: 3, title: "Maniac", duration: "3:05" },
      { id: 4, title: "Checkmate", duration: "2:28" },
      { id: 5, title: "Heather", duration: "3:18" },
    ],
  },
  {
    id: "3",
    Ruta: "Superache",
    nombre: "Superache",
    yearMeta: "2022 · Álbum",
    gradient: "from-[#223a4f] to-[#0b1522]",
    shineAsset: "/figma-assets/shine-superache.svg",
    imagenReal: "/Superache.png",
    tracks: [
      { id: 1, title: "Movies", duration: "3:34" },
      { id: 2, title: "People Watching", duration: "2:38" },
      { id: 3, title: "Disaster", duration: "2:33" },
      { id: 4, title: "Best Friend", duration: "2:28" },
      { id: 5, title: "Memories", duration: "4:08" },
    ],
  },
  {
    id: "4",
    Ruta: "FoundHeaven",
    nombre: "Found Heaven",
    yearMeta: "2024 · Álbum",
    gradient: "from-[#2c5470] to-[#10243a]",
    shineAsset: "/figma-assets/shine-foundheaven.svg",
    imagenReal: "/FoundHeaven.png",
    tracks: [
      { id: 1, title: "Found Heaven", duration: "2:57" },
      { id: 2, title: "Never Ending Song", duration: "2:35" },
      { id: 3, title: "Fainted Love", duration: "2:50" },
      { id: 4, title: "Lonely Dancers", duration: "2:29" },
      { id: 5, title: "Alley Rose", duration: "3:28" },
    ],
  },
  {
    id: "5",
    Ruta: "Wishbone",
    nombre: "Wishbone",
    yearMeta: "2025 · Álbum",
    gradient: "from-[#1a3a52] to-[#09101a]",
    shineAsset: "/figma-assets/shine-wishbone.svg",
    imagenReal: "/Wishbone.png",
    tracks: [
      { id: 1, title: "Pista de ejemplo 1", duration: "3:15" },
      { id: 2, title: "Pista de ejemplo 2", duration: "3:34" },
      { id: 3, title: "Pista de ejemplo 3", duration: "3:02" },
      { id: 4, title: "Pista de ejemplo 4", duration: "4:01" },
      { id: 5, title: "Pista de ejemplo 5", duration: "3:23" },
      { id: 6, title: "Pista de ejemplo 6", duration: "3:48" },
      { id: 7, title: "Pista de ejemplo 7", duration: "2:56" },
      { id: 8, title: "Pista de ejemplo 8", duration: "4:12" },
    ],
  },
];

export default function Home() {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumData>(INITIAL_ALBUMS[4]); // Wishbone selected by default as in Figma
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Playing by default as shown in Figma mockup
  // Figma mockup has Track 2 favorited by default (heart-filled.svg)
  const [savedTrackIds, setSavedTrackIds] = useState<Set<number>>(new Set([2]));
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  const tracks = useMemo(() => {
    return (
      selectedAlbum.tracks || [
        { id: 1, title: "Pista de ejemplo 1", duration: "3:15" },
        { id: 2, title: "Pista de ejemplo 2", duration: "3:34" },
        { id: 3, title: "Pista de ejemplo 3", duration: "3:02" },
        { id: 4, title: "Pista de ejemplo 4", duration: "4:01" },
        { id: 5, title: "Pista de ejemplo 5", duration: "3:23" },
        { id: 6, title: "Pista de ejemplo 6", duration: "3:48" },
        { id: 7, title: "Pista de ejemplo 7", duration: "2:56" },
        { id: 8, title: "Pista de ejemplo 8", duration: "4:12" },
      ]
    );
  }, [selectedAlbum]);

  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  const handleToggleSave = (trackId: number) => {
    setSavedTrackIds((prev) => {
      const next = new Set(prev);
      if (next.has(trackId)) {
        next.delete(trackId);
      } else {
        next.add(trackId);
      }
      return next;
    });
  };

  const handlePlayTrack = (track: Track) => {
    const idx = tracks.findIndex((t) => t.id === track.id);
    if (idx !== -1) {
      setCurrentTrackIndex(idx);
      setIsPlaying(true);
    }
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
    setIsPlaying(true);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
    setIsPlaying(true);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const cardWidth = 228; // 208px + 20px gap
    const newIndex =
      direction === "left"
        ? Math.max(0, carouselIndex - 1)
        : Math.min(INITIAL_ALBUMS.length - 1, carouselIndex + 1);

    setCarouselIndex(newIndex);
    carouselRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#09101a] text-[#f0f4f8] overflow-x-hidden selection:bg-[#d4af37]/30 selection:text-white">
      {/* Navbar con contador interactivo de Guardados */}
      <NavBar savedCount={savedTrackIds.size} />

      {/* Hero Section */}
      <section className="relative h-[560px] w-full overflow-hidden">
        {/* Cielo Degradado */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a2e] via-[#17304a] via-[48%] to-[#22405a]" />

        {/* Resplandor decorativo de la luna */}
        <div className="absolute -top-[130px] right-[50px] md:right-[160px] lg:left-[770px] size-[620px] pointer-events-none opacity-90">
          <Image
            src="/figma-assets/hero-resplandor.svg"
            alt=""
            width={620}
            height={620}
            className="size-full object-contain"
            priority
          />
        </div>

        {/* Luna dorada */}
        <div className="absolute top-[120px] right-[80px] md:right-[200px] lg:left-[1030px] size-[120px] pointer-events-none drop-shadow-[0_0_35px_rgba(212,175,55,0.7)]">
          <Image
            src="/figma-assets/hero-luna.svg"
            alt=""
            width={120}
            height={120}
            className="size-full object-contain"
            priority
          />
        </div>

        {/* Olas sutiles */}
        <div className="absolute top-[160px] left-0 right-0 h-[400px] pointer-events-none">
          <Image
            src="/figma-assets/hero-olas.svg"
            alt=""
            fill
            className="size-full object-cover object-bottom"
          />
        </div>

        {/* Degradado a abismo (#09101a) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-[38%] to-[#09101a] pointer-events-none" />

        {/* Texto del Hero */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 sm:px-10 lg:px-[160px]">
          <div className="flex max-w-[760px] flex-col items-start gap-[14px]">
            <p className="text-[12px] font-semibold tracking-[2.64px] uppercase text-[#d4af37]">
              NUEVO LANZAMIENTO
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[104px] font-bold leading-[0.95] text-[#f0f4f8] tracking-tight">
              Wishbone Deluxe
            </h1>
            <p className="font-serif text-2xl sm:text-[28px] italic font-normal text-[#f0f4f8] opacity-90">
              out now!!
            </p>
            <div className="pt-2">
              <ButtonLink
                linkButton="https://open.spotify.com/intl-es/album/01FqYKXIKnGNh2dqdB4fjD?si=03mSPJcxRiWJvIJ1hx377A"
                contenido="Listen Now"
                icon="/figma-assets/hero-play.svg"
                onClick={() => {
                  handlePlayTrack(tracks[0]);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="mx-auto flex max-w-[1440px] flex-col gap-[56px] px-6 sm:px-10 lg:px-[160px] pt-[56px] pb-[160px]">
        {/* Sección Albums */}
        <section aria-labelledby="albums-heading" className="flex flex-col gap-[24px]">
          <div className="flex items-center justify-between">
            <h2
              id="albums-heading"
              className="font-serif text-3xl sm:text-[40px] font-medium text-[#f0f4f8]"
            >
              Albums
            </h2>
            <div className="flex items-center gap-[10px]">
              <span className="text-[13px] font-normal text-[#8da3b5]">
                {carouselIndex + 1} / {INITIAL_ALBUMS.length}
              </span>
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                disabled={carouselIndex === 0}
                className={`flex size-[40px] items-center justify-center rounded-full border border-[#8da3b5]/40 bg-[#162032] transition-all ${
                  carouselIndex === 0
                    ? "opacity-35 cursor-not-allowed"
                    : "hover:bg-white/10 active:scale-95 cursor-pointer"
                }`}
                aria-label="Álbum anterior"
              >
                <div className="relative size-[18px]">
                  <Image
                    src="/figma-assets/arrow-left.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-full object-contain"
                  />
                </div>
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                disabled={carouselIndex >= INITIAL_ALBUMS.length - 1}
                className={`flex size-[40px] items-center justify-center rounded-full border border-[#8da3b5]/40 bg-[#162032] transition-all ${
                  carouselIndex >= INITIAL_ALBUMS.length - 1
                    ? "opacity-35 cursor-not-allowed"
                    : "hover:bg-white/10 active:scale-95 cursor-pointer"
                }`}
                aria-label="Álbum siguiente"
              >
                <div className="relative size-[18px]">
                  <Image
                    src="/figma-assets/arrow-right.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-full object-contain"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Carrusel de Álbumes */}
          <div
            ref={carouselRef}
            className="flex items-start gap-[20px] overflow-x-auto scrollbar-hide pb-2"
          >
            {INITIAL_ALBUMS.map((album) => (
              <AlbumsTarjeta
                key={album.id}
                album={album}
                isSelected={selectedAlbum.id === album.id}
                onSelect={(alb) => {
                  setSelectedAlbum(alb);
                  setCurrentTrackIndex(0);
                }}
              />
            ))}
          </div>
        </section>

        {/* Sección Singles */}
        <section aria-labelledby="singles-heading" className="flex flex-col gap-[24px]">
          <div className="flex items-center justify-between">
            <h2
              id="singles-heading"
              className="font-serif text-3xl sm:text-[40px] font-medium text-[#f0f4f8]"
            >
              Singles
            </h2>
          </div>
          <div>
            <SingleCard
              title="Wishbone"
              type="Single"
              coverTitle="Wishbone"
              shineAsset="/figma-assets/shine-single.svg"
              onClick={() => {
                // Seleccionar Wishbone y reproducir primera pista
                setSelectedAlbum(INITIAL_ALBUMS[4]);
                handlePlayTrack(INITIAL_ALBUMS[4].tracks![0]);
              }}
            />
          </div>
        </section>

        {/* Sección Tracklist */}
        <section
          id="tracklist"
          aria-labelledby="tracklist-heading"
          className="flex flex-col gap-[14px]"
        >
          {/* Encabezado Tracklist */}
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-transparent pb-2">
            <h2
              id="tracklist-heading"
              className="font-serif text-3xl sm:text-[40px] font-medium text-[#f0f4f8]"
            >
              {selectedAlbum.nombre === "Wishbone"
                ? "Wishbone Deluxe"
                : selectedAlbum.nombre}
            </h2>
            <span className="text-[13px] font-normal text-[#8da3b5]">
              {tracks.length} pistas · 28 min
            </span>
          </div>

          {/* Espacio Figma */}
          <div className="h-2" />

          {/* Cabecera Tabla */}
          <div className="flex items-center gap-[12px] border-b border-[#8da3b5]/20 px-[14px] pt-[10px] pb-[12px] text-[12px] font-normal tracking-[1.44px] uppercase text-[#8da3b5]">
            <span className="w-[44px] text-center">#</span>
            <span className="flex-1">TÍTULO</span>
            <span className="w-[90px] text-right">DURACIÓN</span>
            <span className="w-[36px]" />
          </div>

          {/* Filas de pistas */}
          <div className="flex flex-col gap-1" role="table">
            {tracks.map((track) => {
              const isActive = track.id === currentTrack.id;
              const isSaved = savedTrackIds.has(track.id);
              return (
                <TrackRow
                  key={track.id}
                  track={track}
                  isActive={isActive}
                  isSaved={isSaved}
                  onPlay={handlePlayTrack}
                  onToggleSave={handleToggleSave}
                />
              );
            })}
          </div>

          {/* Nota descriptiva Figma */}
          <p className="pt-2 text-[12px] font-normal text-[#8da3b5]">
            Las pistas son datos de ejemplo. Conecta tu lista real (por ejemplo desde Supabase) para reemplazarlas.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#8da3b5]/20 pt-[24px] text-[13px] font-normal text-[#8da3b5]">
          <p>Conan Gray</p>
          <p className="flex gap-2">
            <span>Home</span>
            <span>·</span>
            <span>Music</span>
            <span>·</span>
            <span>Tour</span>
            <span>·</span>
            <span>Merch</span>
          </p>
        </footer>
      </main>

      {/* Reproductor Flotante Inferior */}
      <Reproductor
        currentTrack={currentTrack}
        albumName={
          selectedAlbum.nombre === "Wishbone"
            ? "Wishbone Deluxe"
            : selectedAlbum.nombre
        }
        isPlaying={isPlaying}
        isSaved={savedTrackIds.has(currentTrack.id)}
        onTogglePlay={() => setIsPlaying((p) => !p)}
        onPrev={handlePrevTrack}
        onNext={handleNextTrack}
        onToggleSave={() => handleToggleSave(currentTrack.id)}
      />
    </div>
  );
}
