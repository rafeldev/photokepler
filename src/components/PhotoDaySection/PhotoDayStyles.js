import styled from "styled-components";
export const PhotoDayStyles = styled.section`
  padding: 7rem 0;
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
    background: var(--card-gradient-color);
    padding: 2rem;
    border-radius: 8px;
    h4 {
      margin-bottom: 10px;
    }
  }
  .photoDay__img {
    width: 500px;

    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
  .photoDay__info {
    max-width: 600px;
    height: 400px;
    h3 {
      font-size: var(--h2-font-size);
      margin-bottom: 20px;
    }
    p {
      font-size: 0.9rem;
      margin-bottom: 10px;
      color: var(--font-color-2);
    }
  }
  @media screen and (max-width: 1260px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .photoDay-box {
      flex-direction: column-reverse;
      width: 100%;
    }
    .photoDay__info {
      height: auto;
    }
    .photoDay__img {
      width: 100%;
      height: 400px;
      margin-bottom: 1rem;
      img {
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 472px) {
    .photoDay-title {
      font-size: var(--h2-font-size);
    }
    .photoDay-box {
      padding: 1rem;
    }
  }
`;
