import styled from "styled-components";
import { Button } from "../Button/Button";
import "./Hero.css";

const HeroStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  .hero__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .hero__title {
    font-size: var(--biggest-font-size);
    text-align: center;
  }
  .hero__description {
    font-size: 1.2rem;
    margin: 10px 0;
    width: 60%;
    text-align: center;
  }
  @media only screen and (max-width: 511px) {
    .hero__title {
      font-size: var(--h1-font-size);
    }
    .hero__description {
      font-size: 1rem;
    }
  }
`;

export function Hero() {
  return (
    <HeroStyles className="hero-main">
      <div className="hero__info">
        <h1 className="hero__title">Tu cumpleaños es algo espacial</h1>
        <p className="hero__description">
          Puedes ver que foto se tomó al espacio el día de tu cumpleaños en un
          bonito formato
        </p>
        <Button>Comenzar</Button>
      </div>
    </HeroStyles>
  );
}
