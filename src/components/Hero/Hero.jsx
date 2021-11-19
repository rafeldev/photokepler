import { HeroStyles } from "./HeroStyles";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Hero.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Hero() {
  // Animacion Aos settting:
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <HeroStyles className="hero-main">
      <div className="hero__info" data-aos="fade-up">
        <h1 className="hero__title">Tu cumpleaños es algo espacial</h1>
        <p className="hero__description">
          Puedes ver que foto exhibió la NASA APOD el día de tu cumpleaños en un
          bonito formato
        </p>
        <Link to="/formulario" className="hero__button">
          <Button>Comenzar</Button>
        </Link>
      </div>
    </HeroStyles>
  );
}
