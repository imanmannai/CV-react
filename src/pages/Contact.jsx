import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header title="KONTAKT" />

      <div className="wrapper">

        <div className="contact-card">

          <h2>Låt oss komma i kontakt</h2>

          <p className="contact-text">
            Söker du en fullstackutvecklare för praktik, samarbete eller framtida
            anställning? Jag ser alltid fram emot nya möjligheter och intressanta
            projekt.
          </p>

          <div className="contact-buttons">

            <a
              href="mailto:iman.mannai@chasacademy.se"
              className="contact-btn"
            >
              📧 Skicka e-post
            </a>

            <a
              href="https://www.linkedin.com/in/iman-mannai"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              💼 LinkedIn
            </a>

          </div>

        </div>

      </div>
    </>
  );
}