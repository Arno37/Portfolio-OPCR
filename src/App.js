import React, { useState, useRef } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  getInTouch,
  experiences
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody.jsx";
import AboutMe from "./components/home/AboutMe.jsx";
import Project from "./components/home/Project.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/home/Skills.jsx";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Experience from "./components/home/Experience.jsx";

const Home = React.forwardRef(({ isMenuOpen }, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        isMenuOpen={isMenuOpen}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
        />
      )}
      {experiences.show && (
        <Experience 
        experiences={experiences}
        heading={experiences.heading}/>
       
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
    </>
  );
});

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const titleRef = useRef();

  return (
    <BrowserRouter basename="/PORTFOLIO-OPCR">
      {navBar.show && <Navbar ref={titleRef} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} isMenuOpen={isMenuOpen} />} />
      </Routes>
      <Footer>
        {getInTouch.show && (
          <GetInTouch/>
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
