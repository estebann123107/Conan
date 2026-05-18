import ListNav from "./ListNav";
function NavBar() {
  const listNav = ["Home", "Music", "Tour", "Merch"];
  return (
    <nav>
      <img src="/Logo.png" alt="Conan Gray Signature" className="logo" />
      <ListNav data={listNav} />
    </nav>
  );
}
export default NavBar;
