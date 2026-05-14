import profileImg from "../assets/profile.png";
import Navbar from "./Navbar";

export default function Header({ title }) {

  return (
    <>

      <Navbar />

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

      <div className="page-title">

        <h2>{title}</h2>

      </div>

    </>
  );
}