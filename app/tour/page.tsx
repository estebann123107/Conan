import NavBar from "../components/NavBar";
import ButtonLink from "../components/Button";

export default function Tour() {
  const linkButton = [
    "https://open.spotify.com/intl-es/album/01FqYKXIKnGNh2dqdB4fjD?si=03mSPJcxRiWJvIJ1hx377A",
    "https://www.conangray.com/pages/tour",
  ];
  const contenido = "Buy Tickets";
  return (
    <>
      <header className="relative h-[90vh] w-full bg-[url('/wishbonedelux.jpg')] bg-cover bg-center">
        <NavBar />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-[50px] text-brand-dark">Wishbone World Tour</h1>
          <ButtonLink linkButton={linkButton[1]} contenido={contenido} />
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
