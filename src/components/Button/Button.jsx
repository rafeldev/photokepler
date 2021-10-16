import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "var(--secun-color)" : "var(--main-color)"};
    padding: 0.5em 1.3em;
    border-radius: 12px;

    border: ${(props) =>
      props.outline
        ? "2px solid var(--main-color)"
        : "2px solid var(--main-color)"};
    color: ${(props) => (props.outline ? "var(--main-color)" : "var(--white)")};
    transition: 1s;
    :hover {
      background-color: ${(props) =>
        props.outline ? "var(--white)" : "var(--input-color)"};
      color: ${(props) => (props.outline ? "var(--white)" : "var(--white)")};
      border: ${(props) =>
        props.outline
          ? "2px solid var(--main-color)"
          : " 2px solid var(--white)"};
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export function Button({ btnLink = "test", children, outline = false }) {
  return (
    <ButtonStyle outline={outline}>
      <a href={btnLink} className="button">
        {children}
      </a>
    </ButtonStyle>
  );
}