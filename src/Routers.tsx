import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Merch from "./pages/merch";
import Music from "./pages/music";
import Tour from "./pages/tour";
import { Home } from "./pages/home";
import NotFound from "./pages/NotFound";
export function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
