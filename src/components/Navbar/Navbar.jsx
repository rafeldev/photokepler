import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { NavbarStyles } from "./NavbarStyles";
import { CgMenu, CgClose } from "react-icons/cg";
import logoNav from "../../assets/image/LOGO.svg";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);

  /*===== CHANGE COLOR NAVBAR =====*/
  const changeBackground = () => {
    console.log(window.scrollY);

    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <NavbarStyles>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="wrapper bd-container">
          <div data-aos="fade" className="nav__logo">
            <Link to="/">
              <img src={logoNav} alt="" />
            </Link>
          </div>

          <div
            className="nav__icon-menu iconSize"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <CgClose /> : <CgMenu />}
          </div>

          <ul
            className={!showMobileMenu ? "nav__menu " : "nav__menu open__menu"}
          >
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                Inicio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/acercade"
                className="nav__link"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                Acerca de
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/#photoDay"
                className="nav__link"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                Imagen del día
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarStyles>
  );
}
