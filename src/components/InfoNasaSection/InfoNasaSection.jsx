import { InfoNasaStyles } from "./InfoNasaStyles";
// import imgHublle from "../../assets/image/telescopio-hubble.png";
import videonasa from "../../assets/video/video-nasa-skycomeet.mp4";
import { Button } from "../Button/Button";
import { ImArrowRight2 } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function InfoNasaSection() {
  // Animacion Aos settting:
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <InfoNasaStyles>
      <div className="bd-container infoNasa-container" data-aos="fade-up">
        <div className="infoNasa-box">
          <article className="infoNasa__info">
            <h3>Acerca de las imagenes espaciales </h3>

            <p>
              Viajar al espacio, fue uno de los grandes pasos de la humanidad
              como civilización, que con fortuna consiguió hace unas decadas.
              Una vez conseguimos ese logro, lo que seguía era dejar un rastro
              que corrobore tal asaña en la historia. ha pasado mucho tiempo
              desde que se tomó la primera foto en el espacio, a día de hoy
              contamos con Herramientas que facilitan esto, cómo el telescopio
              Hubble.
            </p>
            <Button
              btnLink="https://www.nasa.gov/"
              className="btn-infoNasa"
              outline
            >
              Visitar la web de la nasa <ImArrowRight2 className="arrow-nasa" />
            </Button>

            {/* <h6>Copyright: {photoData.copyright}</h6> */}
          </article>
          <div className="infoNasa__img">
            {/* <img src={imgHublle} alt="Telescopio Hubble" /> */}

            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0m0Keomc3DM?autoplay=1&playlist=0m0Keomc3DM&loop=1&autopause=0&mute=1"
              title="YouTube video player"
              // playlist="peSfCy7HFrM&loop=1;rel=0&autoplay=1&controls=0&showinfo=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
            <video
              // className="hero__img"
              width="100%"
              height="100%"
              muted="true"
              autoplay="true"
              loop="true"
              controls="true"
            >
              <source src={videonasa} type="video/mp4" alt="video nasa" />
            </video>
          </div>
        </div>
      </div>
    </InfoNasaStyles>
  );
}
