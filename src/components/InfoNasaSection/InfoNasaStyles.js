import styled from "styled-components";
export const InfoNasaStyles = styled.section`
  padding: 7rem 0;
  background-color: var(--secun-color);
  .infoNasa-container {
    /* padding: 2rem 3rem; */
  }

  .infoNasa-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    h4 {
      margin-bottom: 10px;
    }
  }
  .infoNasa__img {
    min-width: 40%;
    height: 272px;
    /* margin-right: 50px; */
    border-radius: 8px;
    overflow: hidden;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    /* iframe {
      max-width: 500px;
    } */
  }
  .infoNasa__info {
    max-width: 600px;
    margin-bottom: 30px;

    h3 {
      font-size: var(--h1-font-size);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 2rem;
    }
  }
  .btn-infoNasa {
    display: flex;

    path {
      margin-top: 10px;
      align-self: center;
      height: 100%;
    }
  }

  @media screen and (max-width: 1260px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .infoNasa-box {
      flex-direction: column-reverse;
      width: 100%;
    }
    /* .infoNasa__info {
      width: 100%;
    } */
    .infoNasa__img {
      height: auto;

      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;
