import styled from "styled-components";
import "./Formulario.css";

export const FormularioStyles = styled.section`
  background-color: var(--secun-color);

  .fomulario-container {
    display: flex;
    height: 100vh;
  }
  .formulario__info-text {
    max-width: 35rem;
    .formulario__title {
      margin-bottom: 1.5rem;
      font-size: var(--h1-font-size);
    }
    p {
      margin-bottom: 2rem;
    }
    li {
      list-style: initial;
      margin-left: 1.5rem;
    }
  }
  .formulario__info-text-right {
    display: none;
  }
  .formulario__form {
    background-color: var(--tercer-color);
    width: 50%;
    padding: 15rem 0;
    display: flex;

    flex-direction: column;
    align-items: center;
    label {
      font-weight: 500;
    }
    .formulario__form-grup {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      width: 70%;
    }
    input {
      max-width: 35rem;
      font-size: 1rem;
      padding: 0.8rem;
      color: var(--grey);
      background: var(--input-color-2);
      outline: none;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
      border: 1px solid var(--main-color);
      ::placeholder {
        color: var(--font-color-1);
      }
    }
    .formulario__selects {
      width: 50%;
      display: flex;
      margin-bottom: 2rem;
    }
    select {
      /* width: 100%; */
      margin-right: 1.5rem;
      font-size: 1rem;
      padding: 0.5rem;
      color: var(--font-color-1);
      background: var(--input-color-2);
      outline: none;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
      border: 1px solid var(--main-color);
      option {
        background: var(--main-color);
        color: var(--white);
      }
    }
    button[type="submit"] {
      background-color: var(--main-color);
      color: var(--white);
      font-size: 1rem;
      max-width: 7rem;
      outline: none;
      border: none;
      padding: 0.7rem 1rem;
      border-radius: 7px;
      cursor: pointer;
      transition: 0.3s;
      border: 2px solid var(--main-color);
      :hover {
        transform: translateY(-0.35rem);
        border: 2px solid var(--main-color);
        background-color: var(--hover-color);
        color: var(--white);
      }
    }
  }
  @media only screen and (max-width: 893px) {
    .formulario__info-text-right {
      display: initial;
      width: 85%;
      .formulario__title {
        font-size: var(--h2-font-size);
      }
      p {
        font-size: 13px;
      }
    }
    .formulario__title {
      margin-bottom: 1.5rem;
      font-size: var(--h1-font-size);
    }
    p {
      margin-bottom: 2rem;
    }
    li {
      list-style: initial;
      margin-left: 1.5rem;
    }
    .fomulario-container {
      justify-content: center;
    }
    .formulario__form {
      width: 100%;
      padding: 10rem 0;
      .formulario__form-grup {
        width: 85%;
      }
    }
  }
`;
