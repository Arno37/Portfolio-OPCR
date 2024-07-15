import React, { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useScrollPosition } from "../../src/hooks/useScrollPosition.js";
import useResizeObserver from "../../src/hooks/useResizeObserver.js";
import { repos, about, skills } from "../../src/editable-stuff/config.js";
import { NavLink } from "./home/migration.jsx";

const Navigation = React.memo(({ isMenuOpen, setIsMenuOpen }) => {
  const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }, [setIsMenuOpen]);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useScrollPosition(
    ({ currPos }) => {
      setIsTop(currPos.y > -5); // Ajuster le seuil au besoin
    },
    [navBottom]
  );

  useEffect(() => {
    if (!navbarDimensions) return;

    const isTopAfterScroll = navBottom - window.scrollY >= navbarMenuRef.current.offsetTop;
    setIsTop(isTopAfterScroll);
  }, [navBottom, navbarDimensions]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top ${isTop ? "navbar-transparent" : "navbar-semi-transparent"}`}
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/#Portfolio"}
        onClick={handleScrollToTop}
      >
        Accueil
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" onClick={toggleMenu} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {about.show && (
            <NavLink className="nav-item nav-link-wrapper" href={process.env.PUBLIC_URL + "/#aboutme"}>
              A Propos
            </NavLink>
          )}

          {repos.show && (
            <NavLink className="nav-item nav-link-wrapper" href={process.env.PUBLIC_URL + "/#projects"}>
              Projets
            </NavLink>
          )}
          
          {skills.show && (
            <NavLink className="nav-item nav-link-wrapper" href={process.env.PUBLIC_URL + "/#skills"}>
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
