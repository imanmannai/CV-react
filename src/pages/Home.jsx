import { Link } from "react-router-dom";
import profileImg from "../assets/profile.png";
import eggsImg from "../assets/eggs.jpg";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import {
  FiUser,
  FiMail,
  FiBriefcase
} from "react-icons/fi";

import { PiGraduationCapLight } from "react-icons/pi";

export default function Home() {

  const [showEgg, setShowEgg] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    let typing = "";

    const handleKeyDown = (e) => {

      typing += e.key.toLowerCase();

      if (typing.includes("iman")) {

        setShowModal(true);

        typing = "";
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, []);

  return (
    <>

      <Navbar />

      <div className="wrapper">

        <div className="hero-title">

          <h1
            id="surprise"
            onClick={() => setShowEgg(!showEgg)}
          >
            IMAN MANNAI
          </h1>

          <div className="hero-divider">

            <span></span>

            <p>♥</p>

            <span></span>

          </div>

        </div>

        {showEgg && (

          <img
            src={eggsImg}
            alt="easter egg"
            id="easteregg"
          />

        )}

        <div className="profile-container">

          <img
            src={profileImg}
            alt="Iman Mannai"
            className="profile-img"
          />

        </div>

        <nav className="nav-container">

          <Link to="/about" className="nav-card">

            <div className="nav-icon">
              <FiUser />
            </div>

            <p>OM MIG</p>

            <div className="card-line"></div>

          </Link>

          <Link to="/cv" className="nav-card">

            <div className="nav-icon">
              <PiGraduationCapLight />
            </div>

            <p>CV / ERFARENHET</p>

            <div className="card-line"></div>

          </Link>

          <Link to="/portfolio" className="nav-card">

            <div className="nav-icon">
              <FiBriefcase />
            </div>

            <p>PORTFOLIO</p>

            <div className="card-line"></div>

          </Link>

          <Link to="/contact" className="nav-card">

            <div className="nav-icon">
              <FiMail />
            </div>

            <p>KONTAKT</p>

            <div className="card-line"></div>

          </Link>

        </nav>

        {showModal && (

          <div className="modal">

            <div className="modal-content">

              <span
                className="close"
                onClick={() => setShowModal(false)}
              >
                X
              </span>

              <h3>WHOPTYDOOO!</h3>

              <p>OPPSIEE</p>

            </div>

          </div>

        )}

      </div>

    </>
  );
}