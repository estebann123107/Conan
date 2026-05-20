import "../App.css";
import AlbumsTarjeta from "../components/AlbumsTarjeta";
import ButtonLink from "../components/Button";
import NavBar from "../components/NavBar";

export function Home() {
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
      <div className="App">
        <header>
          <NavBar />
          <div className="HeaderContent">
            <h1>Wishbone Deluxe</h1>
            <h2>out now!!</h2>
            <ButtonLink linkButton={linkButton[0]} contenido={contenido} />
          </div>
        </header>

        <main>
          <section className="AlbumsSection">
            <h2>Albums</h2>
            <div id="AlbumsContainer" className="AlbumsContainer">
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
        </main>
        <footer></footer>
      </div>
    </>
  );
}
