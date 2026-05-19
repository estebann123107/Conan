import "./App.css";
import AlbumsTarjeta from "./components/AlbumsTarjeta";
import ButtonLink from "./components/Button";
import NavBar from "./components/NavBar";
import { Routers } from "./Routers";

function App() {
  const id = ["1", "2", "3", "4", "5"];
  const link = [
    "SunsetSeason",
    "KidKrow",
    "Superache",
    "FoundHeaven",
    "Wishbone",
  ];
  const imagen = [
    "/SunsetSeason.png",
    "/KidKrow.png",
    "/Superache.png",
    "/FoundHeaven.png",
    "/Wishbone.png",
  ];
  const nombre = [
    "Sunset Season",
    "Kid Krow",
    "Superache",
    "Found Heaven",
    "Wishbone",
  ];
  const linkButton = [
    "https://open.spotify.com/intl-es/album/01FqYKXIKnGNh2dqdB4fjD?si=03mSPJcxRiWJvIJ1hx377A",
  ];

  return (
    <>
      <Routers />
      <div className="App">
        <header>
          <NavBar />
          <div className="HeaderContent">
            <h1>Wishbone (Deluxe)</h1>
            <h2>out now</h2>
            <ButtonLink linkButton={linkButton[0]} />
          </div>
        </header>

        <main>
          <section className="AlbumsSection">
            <h2>Albums</h2>
            <div id="AlbumsContainer" className="AlbumsContainer">
              <AlbumsTarjeta
                id={id[0]}
                link={link[0]}
                imagen={imagen[0]}
                nombre={nombre[0]}
              />
              <AlbumsTarjeta
                id={id[1]}
                link={link[1]}
                imagen={imagen[1]}
                nombre={nombre[1]}
              />
              <AlbumsTarjeta
                id={id[2]}
                link={link[2]}
                imagen={imagen[2]}
                nombre={nombre[2]}
              />
              <AlbumsTarjeta
                id={id[3]}
                link={link[3]}
                imagen={imagen[3]}
                nombre={nombre[3]}
              />
              <AlbumsTarjeta
                id={id[4]}
                link={link[4]}
                imagen={imagen[4]}
                nombre={nombre[4]}
              />
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
