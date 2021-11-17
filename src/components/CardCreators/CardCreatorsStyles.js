import styled from "styled-components";

export const CardCreatorsStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  .cardcreator {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 287px;
    height: 384px;
    padding: 0.7rem 1rem;
    background: var(--card-gradient-color);
    border-radius: 8px;
    strong {
      margin-bottom: 0.7rem;
    }
    p {
      margin-bottom: 1rem;
      color: #cda6ff;
    }
  }

  .cardcreator__img {
    width: 100%;
    height: 60%;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
`;
