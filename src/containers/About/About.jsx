import { AboutStyles } from "./AboutStyles";
import "./About.css";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import imgNasaApis from "../../assets/image/logoNasaApis.png";
import { CardCreators } from "../../components/CardCreators/CardCreators";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function About() {
  // Animacion Aos settting:
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <AboutStyles>
      <div className="about__relleno"> </div>
      <section className="about__main">
        <div className="about__main-info" data-aos="fade">
          <h2 className="about__info-title">
            Imagenes geniales que puedes compartir con amigos
          </h2>
          <p>
            El espacio es enorme, tan grande como nuestro amor por la astronomia
            y la exploración espacial ¿Que mejor día para verlo que en tu
            cumpleaños?
          </p>
          <Link to="/formulario">
            <Button>Descubrir foto</Button>
          </Link>
        </div>
      </section>
      <section className="about__infoNasa">
        <div className="about__cardNasa" data-aos="fade-up">
          <div className="about__cardNasa-info">
            <h3>¿Como fue posible esta web?</h3>
            <p>
              Estas imagenes son obtenidas mediante una API que brinda la NASA
              para que sea usada por desarrolladores, la cual permite obtener
              fotografias de las misiones espaciales realizadas con el paso del
              tiempo.
              <br />
              <br />
              Logrando así tener todas esas imagenes al alcance de un click,
              creemos que el espacio es una basta fuente de conocimiento, de ahí
              nuestro interes hacia el.
            </p>
          </div>
          <picture className="about__cardNasa-img">
            <img src={imgNasaApis} alt="Nasa-Apis" />
          </picture>
        </div>
      </section>
      <section className="about__frase">
        <div className="about__frase-box">
          <p>"En algún sitio algo increíble espera ser descubierto"</p>
          <em>Carl Sagan</em>
        </div>
      </section>
      <section className="about__creators">
        <div className="about__creators-box" data-aos="fade">
          <CardCreators />
        </div>
      </section>
    </AboutStyles>
  );
}
