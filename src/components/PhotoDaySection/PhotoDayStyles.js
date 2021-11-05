import styled from "styled-components";
export const PhotoDayStyles = styled.section`
  padding: 3rem 0;
  background-color: var(--tercer-color);
  .photoDay-container {
  }
  .photoDay-title {
    margin-bottom: 20px;
    font-size: var(--h1-font-size);
  }
  .photoDay-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      margin-bottom: 10px;
    }
  }
  .photoDay__img {
    width: 600px;

    height: 500px;

    margin-bottom: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .photoDay__info {
    max-width: 600px;

    h3 {
      font-size: var(--h2-font-size);
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 1260px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .photoDay-box {
      flex-direction: column;
      width: 100%;
    }
    .photoDay__img {
      width: 100%;
      height: 400px;
      img {
        object-fit: cover;
      }
    }
  }
`;
