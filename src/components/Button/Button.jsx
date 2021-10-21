import React from "react";
import { ButtonStyle } from "./ButtonStyles";

export function Button({ btnLink = "test", children, outline = false }) {
  return (
    <ButtonStyle outline={outline}>
      <a href={btnLink} className="button">
        {children}
      </a>
    </ButtonStyle>
  );
}
