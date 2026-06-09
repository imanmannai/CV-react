import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="top-navbar">

      <Link to="/" className="navbar-logo">
        IMAN MANNAI
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (

        <div className="dropdown-menu">

          <Link to="/">Hem</Link>

          <Link to="/about">
            Om mig
          </Link>

          <Link to="/portfolio">
            Portfolio
          </Link>

          <Link to="/cv">
            CV / Erfarenhet
          </Link>

          <Link to="/contact">
            Kontakt
          </Link>

        </div>
      )}

    </div>
  );
}