import Header from "../components/Header";
import cvData from "../data/cv.json";

export default function CV() {
  return (
    <>
      <Header title="CV / ERFARENHET" />

      <div className="wrapper">

        <div className="portfolio-container">

          <div className="cv-section">

            <h4>Utbildning</h4>

            <ul>

              {cvData.education.map((edu, index) => (

                <li key={index}>

                  <strong>{edu.title}</strong>

                  <br />

                  {edu.description}

                </li>

              ))}

            </ul>

          </div>

          <div className="cv-section">

            <h3>Arbetslivserfarenhet</h3>

            {cvData.experience.map((job, index) => (

              <div key={index}>

                <h4>{job.title}</h4>

                <ul>

                  {job.skills.map((skill, skillIndex) => (

                    <li key={skillIndex}>
                      {skill}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

          <div className="cv-section">

            <h4>Certifikat</h4>

            <ul>

              {cvData.certificates.map((cert, index) => (

                <li key={index}>

                  <strong>{cert.title}</strong>

                  <br />

                  {cert.description}

                </li>

              ))}

            </ul>

          </div>

          <div className="cv-section">

            <h4>Om mig</h4>

            <p>
              Jag gillar att ha en bra balans mellan
              studier och fritid.

              När jag inte programmerar brukar jag
              umgås med vänner och familj, kolla serier
              eller bygga små projekt på egen hand.

              Jag tycker också om att lära mig nya saker
              inom tech och fortsätta utvecklas inom
              fullstackutveckling.
            </p>

          </div>

        </div>

      </div>
    </>
  );
}