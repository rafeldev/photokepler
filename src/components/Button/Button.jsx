/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ButtonStyle } from "./ButtonStyles";

export function Button({ btnLink = "test", children, outline = false }) {
  return (
    <ButtonStyle outline={outline}>
      <a href={btnLink} target="_blank" className="button">
        {children}
      </a>
    </ButtonStyle>
  );
}
