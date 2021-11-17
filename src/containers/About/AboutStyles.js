import styled from "styled-components";

export const AboutStyles = styled.div`
  .about__relleno {
    height: 2.5rem;
    background-color: #0b0e3a;
  }
  .about__main-info {
    max-width: 800px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      width: 60%;
      line-height: 30px;
      margin-bottom: 1.5rem;
    }
  }
  .about__info-title {
    font-size: var(--biggest-font-size);
  }
  .about__infoNasa {
    padding: 10rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--secun-color);
  }

  .about__cardNasa {
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--tercer-color);
    border-radius: 8px;
  }
  .about__cardNasa-info {
    max-width: 500px;
    margin-right: 15rem;
    h3 {
      font-size: var(--h1-font-size);
      margin-bottom: 1rem;
    }
    p {
      line-height: 30px;
    }
  }
  .about__cardNasa-img {
    max-width: 500px;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .about__frase {
    /* height: 400px; */
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .about__frase-box {
    font-size: var(--h2-font-size);
    text-align: center;
    p {
      line-height: 3rem;
    }
  }
  .about__creators {
    background-color: var(--secun-color);
    /* height: 500px; */
    padding: 13rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 1260px) {
    .about__cardNasa {
      flex-direction: column-reverse;
    }
    .about__cardNasa-info {
      margin-right: 0;
      text-align: center;
    }
    .about__cardNasa-img {
      margin-bottom: 2rem;
    }
  }
  @media only screen and (max-width: 511px) {
    .about__info-title {
      font-size: var(--h1-font-size);
    }
    .about__cardNasa-info {
      h3 {
        font-size: var(--h2-font-size);
      }
    }
    .about__frase-box {
      p {
        font-size: 1.2rem;
      }
      em {
        font-size: 1.2rem;
      }
    }
  }
`;
