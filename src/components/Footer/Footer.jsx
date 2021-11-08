/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FooterStyles } from "./FooterStyles";
import footerLogo from "../../assets/image/logoFooter.svg";

export function Footer() {
  return (
    <FooterStyles>
      <div className="footer__container bd-container">
        <div className="footer__logo">
          <img src={footerLogo} alt="Logo fuente de poder " />
        </div>
        <div className="footer__nav">
          <p className="footer__nav-title">Funciones</p>
          <ul>
            <li>
              <a href="#"> Inicio</a>
            </li>
            <li>
              <a href="#">Acerca de</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copy">
        <p>&#169; 2021 shycomeet. Todos los derechos reservados</p>
      </div>
    </FooterStyles>
  );
}
