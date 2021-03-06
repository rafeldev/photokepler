import styled from "styled-components";
// Con referencia al props.outline: Realice una function que valida si el
// componente recibe esta props se le dara estilos outline al boton, y se
// reliaza con un condicional ternario:

export const ButtonStyle = styled.div`
  /* margin-top: 2rem; */
  .button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--main-color)"};
    padding: 0.4em 1.3em;
    border-radius: 7px;
    border: ${(props) =>
      props.outline ? "2px solid var(--white)" : "2px solid var(--main-color)"};
    color: ${(props) => (props.outline ? "var(--white)" : "var(--white)")};
    transition: 0.5s;
    cursor: pointer;
    :hover {
      transform: translateY(-0.35rem);
      background-color: ${(props) =>
        props.outline ? "var(--hover-color-3)" : "var(--hover-color)"};
      color: ${(props) => (props.outline ? "var(--white)" : "var(--white)")};
      border: ${(props) =>
        props.outline
          ? "2px solid var(--white)"
          : " 2px solid var(--hover-color)"};
    }
  }
  /* @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  } */
`;
