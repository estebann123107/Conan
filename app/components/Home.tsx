import AlbumsTarjeta from "./AlbumsTarjeta";
import ButtonLink from "./Button";
import NavBar from "./NavBar";

export default function Home() {
  const albums = [
    {
      id: "1",
      Ruta: "SunsetSeason",
      imagen: "/SunsetSeason.png",
      nombre: "Sunset Season",
    },
    { id: "2", Ruta: "KidKrow", imagen: "/KidKrow.png", nombre: "Kid Krow" },
    {
      id: "3",
      Ruta: "Superache",
      imagen: "/Superache.png",
      nombre: "Superache",
    },
    {
      id: "4",
      Ruta: "FoundHeaven",
      imagen: "/FoundHeaven.png",
      nombre: "Found Heaven",
    },
    { id: "5", Ruta: "Wishbone", imagen: "/Wishbone.png", nombre: "Wishbone" },
  ];

  const linkButton = [
    "https://open.spotify.com/intl-es/album/01FqYKXIKnGNh2dqdB4fjD?si=03mSPJcxRiWJvIJ1hx377A",
  ];
  const contenido = "Listen Now";
  return (
    <>
      <header className="relative h-[90vh] w-full bg-[url('/wishbonedelux.jpg')] bg-cover bg-center">
        <NavBar />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-[50px] text-brand-dark">Wishbone Deluxe</h1>
          <h2 className="text-[30px] text-brand">out now!!</h2>
          <ButtonLink linkButton={linkButton[0]} contenido={contenido} />
        </div>
      </header>

      <main>
        <section className="my-[60px] mx-2.5 text-center text-white">
          <h2 className="text-[30px] text-white">Albums</h2>
          <div
            id="AlbumsContainer"
            className="mx-5 my-5 flex flex-col items-center gap-10 md:flex-row md:flex-row md:justify-center"
          >
            {albums.map((album) => (
              <AlbumsTarjeta
                key={album.id}
                id={album.id}
                Ruta={album.Ruta}
                imagen={album.imagen}
                nombre={album.nombre}
              />
            ))}
          </div>
        </section>
        <section className="my-[60px] mx-2.5 text-center text-white">
          <h2 className="text-[30px] text-white">Singles</h2>
          <div id="SinglesContainer" className="mx-5 my-5 flex flex-row gap-5">
            <div
              id="Single"
              className="h-[200px] w-full rounded-[10px] flex flex-col items-center justify-center"
            >
              <img src="/Wishbone.png" alt="Wishbone" className="w-[200px]" />
              <h3>Wishbone</h3>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
