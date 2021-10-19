import React, { useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";
import logoNav from "../../assets/image/LOGO.svg";

const NavMenuStyles = styled.nav`
  position: fixed;
  z-index: var(--z-fixed);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: transparent;
  transition: 1s;
  :hover {
    background-color: var(--tercer-color);
    -webkit-box-shadow: 6px 3px 16px -6px #000000;
    box-shadow: 6px 3px 16px -6px #000000;
  }

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
  }
  .nav__logo {
    display: flex;
    align-items: center;
    width: 18%;
    img {
      width: 100%;
    }
  }
  .nav__menu {
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    /* margin-right: 1.5rem; */
  }
  .nav__item {
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 1.5rem;
  }
  .nav__link {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.3rem 1.2rem;
    color: var(--font-color-2);
    border: solid 1px transparent;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    border-radius: 6px;
    transition: 0.5s all ease;
    &:hover {
      color: var(--white);

      border: solid 1px var(--white);
      border-radius: 6px;
      /* transition: all 0.2s ease-out; */
    }
  }
  .nav__icon-menu {
    display: none;
  }
  @media screen and (max-width: 960px) {
    background-color: var(--tercer-color);
    -webkit-box-shadow: 6px 3px 16px -6px #000000;
    box-shadow: 6px 3px 16px -6px #000000;
    height: 60px;
    .nav__menu {
      background-color: var(--tercer-color);
      position: absolute;
      top: 60px;

      right: -110%;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      transition: 0.5s all ease;
    }
    .nav__logo {
      width: 150px;
    }
    .nav__menu.open__menu {
      width: 50%;
      right: 0;
      margin: 0;
    }
    .nav__item {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .nav__link {
      width: 100%;
      background-color: var(--main-color);
      border-radius: 0;
      padding: 0.5rem 1.2rem;
      margin-top: 30px;
    }
    .nav__icon-menu {
      display: flex;

      align-items: center;
      cursor: pointer;

      color: var(--white);
    }
  }
`;

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <NavMenuStyles>
      <div className="wrapper bd-container">
        <div data-aos="fade" className="nav__logo">
          <img src={logoNav} alt="" />
        </div>

        <div
          className="nav__icon-menu iconSize"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <CgClose /> : <CgMenu />}
        </div>

        <ul className={!showMobileMenu ? "nav__menu " : "nav__menu open__menu"}>
          {/* <div
            className="nav__icon-menu iconSize"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <CgClose />
          </div> */}
          <li className="nav__item">
            <a
              href="#inicio"
              className="nav__link"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Acerca de
            </a>
          </li>
          <li className="nav__item">
            <a
              href="#proyect"
              className="nav__link"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Imagen del día
            </a>
          </li>
          {/* <li className="nav__item">
            <a
              href="#donacion"
              className="nav__link"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              Donaciones
            </a>
          </li> */}
        </ul>
      </div>
    </NavMenuStyles>
  );
}
