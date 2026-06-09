import { Link } from "react-router-dom";
import profileImg from "../assets/profile.png";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

import {
  FiUser,
  FiMail,
  FiBriefcase
} from "react-icons/fi";

import { PiGraduationCapLight } from "react-icons/pi";

export default function Home() {

  return (
    <>

      <Navbar />

      <div className="wrapper">

        <div className="hero-title">

          <h1>
            IMAN MANNAI
          </h1>

          <div className="hero-divider">

            <span></span>

            <p>♥</p>

            <span></span>

          </div>

        </div>

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

      </div>

    </>
  );
}