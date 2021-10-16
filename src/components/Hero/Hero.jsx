import styled from "styled-components";
import { Button } from "../Button/Button";
import "./Hero.css";

const HeroStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Hero() {
  return (
    <HeroStyles className="hero-main">
      <div className="hero__info">
        <h1>Tu cumpleaños es algo espacial</h1>
        <Button>Comenzar</Button>
      </div>
    </HeroStyles>
  );
}
