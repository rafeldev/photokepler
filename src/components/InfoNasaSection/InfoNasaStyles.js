import styled from "styled-components";
export const InfoNasaStyles = styled.section`
  padding: 3rem 0;
  background-color: var(--secun-color);
  .infoNasa-container {
    /* padding: 2rem 3rem; */
  }

  .infoNasa-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    h4 {
      margin-bottom: 10px;
    }
  }
  .infoNasa__img {
    width: 330px;
    height: 272px;
    margin-right: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .infoNasa__info {
    width: 600px;
    margin-bottom: 30px;

    h3 {
      font-size: var(--h1-font-size);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
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
`;
