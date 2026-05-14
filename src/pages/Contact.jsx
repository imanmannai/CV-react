import Header from "../components/Header";

export default function Contact() {
  return (
    <>
      <Header title="KONTAKT" />

      <div className="wrapper">

        <div className="contact-card">

          <h4>Hör gärna av dig!</h4>

          <p>
            Du når mig enklast på följande sätt:
          </p>

          <div className="contact-info">

            <p>
              <strong>Mejl:</strong>
              <br />
              iman.mannai@chasacademy.se
            </p>

            <p>
              <strong>Telefon:</strong>
              <br />
              0763276455
            </p>

            <p>
              <strong>LinkedIn:</strong>
              <br />

              <a
                href="https://www.linkedin.com/in/iman-mannai-aa5632382"
                target="_blank"
                rel="noreferrer"
              >
                iman-mannai
              </a>

            </p>

          </div>

        </div>

      </div>
    </>
  );
}