/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FooterStyles } from "./FooterStyles";
import { Link } from "react-router-dom";
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
              <Link to="/"> Inicio</Link>
            </li>
            <li>
              <Link to="/acercade">Acerca de</Link>
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
