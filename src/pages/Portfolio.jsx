import { useEffect, useState } from "react";
import Header from "../components/Header";
import githubLogo from "../assets/githubLogo.png";

export default function Portfolio() {

  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1200);

  }, []);

  const projects = [

    {
      id: 1,

      title: "Project 1",

      shortDescription:
        "I detta projekt utvecklade jag ett enkelt Hangman-spel som en av mina första applikationer inom programmering.",

      fullDescription:
        "Spelet går ut på att spelaren gissar bokstäver för att hitta ett slumpmässigt valt ord, med ett begränsat antal försök. Projektet fokuserade på grundläggande programmeringslogik, såsom villkor, loopar och hantering av användarinmatning.",

      github:
        "https://github.com/imanmannai/App-med-AI_st-d.git"
    },

    {
      id: 2,

      title: "Project 2",

      shortDescription:
        "I detta projekt inom backendutveckling och API arbetade jag med att utveckla och analysera en backend-lösning kopplad till ett REST-baserat API.",

      fullDescription:
        "Fokus låg på hur backend hanterar data och hur API:et möjliggör kommunikation mellan frontend och backend.",

      github:
        "https://github.com/imanmannai/Backendutveckling-API.git"
    },

    {
      id: 3,

      title: "Project 3",

      shortDescription:
        "I detta projekt arbetade jag med att designa och implementera en relationsdatabas för en fiktiv gymnasieskola.",

      fullDescription:
        "Jag skapade en ER-modell som låg till grund för databasen där information om elever, lärare, klasser och kurser strukturerades och kopplades samman i SQL Server Management Studio.",

      github:
        "https://github.com/imanmannai/GymnasieskolaDb.git"
    },

    {
      id: 4,

      title: "Project 4",

      shortDescription:
        "I detta projekt arbetade jag med att implementera och hantera generiska typer i C#.",

      fullDescription:
        "Projektet fokuserade på grundläggande datastrukturer och metoder som Push, Pop, Peek och FindAll för att förstå hur data kan lagras och filtreras.",

      github:
        "https://github.com/imanmannai/OOP_Generic_Collections.git"
    }

  ];

  return (
    <>
      <Header title="PORTFOLIO" />

      <div className="wrapper">

        {loading ? (

          <p>Laddar projekt...</p>

        ) : (

          <div className="portfolio-container">

            {projects.map((project) => (

              <div
                className="portfolio-card"
                key={project.id}
              >

                <h3>{project.title}</h3>

                <p>
                  {project.shortDescription}
                </p>

                <br />

                <button
                  onClick={() => setSelectedProject(project)}
                >
                  Mer information
                </button>

                <br />
                <br />

                <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="github-repo-link"
              >

                <img
                  src={githubLogo}
                  alt="GitHub logo"
                  className="github-link"
                />

              <span>
                {project.github
                  .split("/")
                  .pop()
                  .replace(".git", "")} Repository
              </span>

              </a>

              </div>

            ))}

          </div>

        )}

        {selectedProject && (

          <div className="modal">

            <div className="modal-content">

              <span
                className="close"
                onClick={() => setSelectedProject(null)}
              >
                X
              </span>

              <h2>
                {selectedProject.title}
              </h2>

              <br />

              <p>
                {selectedProject.fullDescription}
              </p>

            </div>

          </div>

        )}

      </div>
    </>
  );
}