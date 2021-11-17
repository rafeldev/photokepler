import styled from "styled-components";
export const HeroStyles = styled.section`
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
    margin: 20px 0;
    width: 60%;
    text-align: center;
  }
  .hero__button {
    margin-top: 1rem;
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
