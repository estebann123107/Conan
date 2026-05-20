import "../App.css";
import ButtonLink from "../components/Button";
import NavBar from "../components/NavBar";

export function Tour() {
  const linkButton = [
    "https://open.spotify.com/intl-es/album/01FqYKXIKnGNh2dqdB4fjD?si=03mSPJcxRiWJvIJ1hx377A",
    "https://www.conangray.com/pages/tour",
  ];
  const contenido = "Buy Tickets";
  return (
    <>
      <div className="App">
        <header>
          <NavBar />
          <div className="HeaderContent">
            <h1>Wishbone World Tour</h1>
            <ButtonLink linkButton={linkButton[1]} contenido={contenido} />
          </div>
        </header>

        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
