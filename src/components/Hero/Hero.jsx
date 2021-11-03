import { HeroStyles } from "./HeroStyles";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Hero.css";

export function Hero() {
  return (
    <HeroStyles className="hero-main">
      <div className="hero__info">
        <h1 className="hero__title">Tu cumpleaños es algo espacial</h1>
        <p className="hero__description">
          Puedes ver que foto se tomó al espacio el día de tu cumpleaños en un
          bonito formato
        </p>
        <Link to="/formulario">
          <Button>Comenzar</Button>
        </Link>
      </div>
    </HeroStyles>
  );
}
