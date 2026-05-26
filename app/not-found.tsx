import NavBar from "./components/NavBar";

export default function NotFound() {
  return (
    <>
      <header className="relative h-[90vh] w-full bg-[url('/wishbonedelux.jpg')] bg-cover bg-center">
        <NavBar />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-[50px] text-brand-dark">Upsssss! Page Not Found</h1>
        </div>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
