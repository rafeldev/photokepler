import React, { useState } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { NavbarStyles } from "./NavbarStyles";
import { CgMenu, CgClose } from "react-icons/cg";
import logoNav from "../../assets/image/LOGO.svg";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  return (
    <NavbarStyles>
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
        </ul>
      </div>
    </NavbarStyles>
  );
}
