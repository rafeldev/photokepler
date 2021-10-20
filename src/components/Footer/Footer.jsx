/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import footerLogo from "../../assets/image/logoFooter.svg";

const FooterStyles = styled.footer`
  width: 100%;
  background-color: var(--secun-color);
  border-top: 1px solid rgba(119, 136, 180, 0.15);
  .footer__container {
    padding-top: 50px;

    padding-bottom: 40px;
    display: flex;
    gap: 3rem;
  }
  .footer__nav,
  .footer__contact {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    ul {
      line-height: 2rem;
      a {
        color: var(--font-color);
      }
      a:hover {
        color: var(--font-color-2);
        transition: 0.2s ease-out;
      }
    }
  }
  .footer__nav-title {
    color: var(--font-color-2);
    font-weight: var(--medium-font);
  }

  .footer__contact a {
    color: var(--font-color);
    display: flex;
    align-items: center;
    gap: 0.3rem;
    svg {
      font-size: 1.2rem;
    }
    :hover {
      color: var(--font-color-2);
      transition: 0.2s ease-out;
    }
  }
  @media screen and (max-width: 960px) {
    .footer__container {
      justify-content: center;
    }
  }
  @media screen and (max-width: 700px) {
    .footer__container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`;

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
    </FooterStyles>
  );
}
