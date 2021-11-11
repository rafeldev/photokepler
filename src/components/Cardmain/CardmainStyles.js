import styled from "styled-components";

export const CardmainStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .cardmain-container {
    display: flex;
    flex-direction: column;
    width: 387px;
    height: 520px;
    padding: 1.5rem;
    background: var(--card-gradient-color);
    border-radius: 5px;
    margin-bottom: 2rem;
    overflow: hidden;
    .cardmain__info {
      display: flex;
      flex-direction: column;
    }
    .cardmain__name {
      font-weight: 500;
      font-size: 20px;
    }
    em {
      width: 35%;
      font-size: 14px;
      background-color: rgba(144, 105, 222, 0.22);
      padding: 0.1rem 1rem;
      border-radius: 5px;
    }
    strong {
      font-size: 14px;
      margin-top: 0.7rem;
    }
    p {
      font-size: 14px;
      line-height: 23px;
      margin-bottom: 0.2rem;
    }

    .cardmain__description {
      font-size: 13px;
      line-height: 20px;
      color: #cedbee;
    }
  }

  .cardmain-img {
    width: 100%;
    height: 55%;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
