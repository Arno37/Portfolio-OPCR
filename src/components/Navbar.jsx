import React, { useState } from "react";
import { useScrollPosition } from "../../src/hooks/useScrollPosition.js";
import useResizeObserver from "../../src/hooks/useResizeObserver.js";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  repos,
  about,
  skills,
} from "../../src/editable-stuff/config.js";
import { NavLink } from "./home/migration.jsx";
import '../scss/custom-styles.scss';

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/#Portfolio"}
        onClick={handleScrollToTop}
      >
        Accueil {/* Votre prénom ici */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {repos.show && (
            <NavLink href={process.env.PUBLIC_URL + "/#aboutme"}>
              A Propos
            </NavLink>
          )}
          {about.show && (
            <NavLink
              className="nav-item"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projets
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
