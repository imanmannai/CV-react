import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import CV from "./pages/CV";
import Contact from "./pages/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="site-footer">
      <p>
        © 2026 Iman Mannai.
        Alla rättigheter förbehållna.
        | Integritetspolicy | Villkor
      </p>
      </footer>
    </HashRouter>
  );
}

export default App;