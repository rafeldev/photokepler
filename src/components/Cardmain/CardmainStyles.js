import styled from "styled-components";

export const CardmainStyles = styled.section`
  display: flex;
  flex-direction: column;
  width: 387px;
  height: 520px;
  padding: 1.5rem;
  background: var(--card-gradient-color);
  border-radius: 5px;
  .cardmain-img {
    width: 100%;
    height: 45%;
    background-color: white;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
