import "./App.css";
import Albums from "./components/Albums";
import ListNav from "./components/ListNav";

function App() {
  const listNav = ["Home", "Music", "Tour", "Merch"];
  const id = ["1", "2", "3", "4", "5"];
  const link = ["#", "#", "#", "#", "#"];
  const imagen = [
    "/Images/SunsetSeason.png",
    "/Images/KidKrow.png",
    "/Images/Superache.png",
    "https://i.pinimg.com/736x/0a/b4/f7/0ab4f71b8d47bcb3a47e32c00d20458e.jpg",
    "/Images/Wishbone.png",
  ];
  const nombre = [
    "Sunset Season",
    "Kid Krow",
    "Superache",
    "Found Heaven",
    "Wishbone",
  ];
  return (
    <>
      <div className="App">
        <header>
          <nav>
            <img
              src="/Images/Logo.png"
              alt="Conan Gray Signature"
              className="logo"
            />
            <ListNav data={listNav} />
          </nav>
          <div className="HeaderContent">
            <h1>Wishbone (Deluxe)</h1>
            <h2>out now</h2>
            <button id="delux">Listen Now</button>
          </div>
        </header>

        <main>
          <section className="AlbumsSection">
            <h2>Albums</h2>
            <div id="AlbumsContainer" className="AlbumsContainer">
              <Albums
                id={id[0]}
                link={link[0]}
                imagen={imagen[0]}
                nombre={nombre[0]}
              />
              <Albums
                id={id[1]}
                link={link[1]}
                imagen={imagen[1]}
                nombre={nombre[1]}
              />
              <Albums
                id={id[2]}
                link={link[2]}
                imagen={imagen[2]}
                nombre={nombre[2]}
              />
              <Albums
                id={id[3]}
                link={link[3]}
                imagen={imagen[3]}
                nombre={nombre[3]}
              />
              <Albums
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
