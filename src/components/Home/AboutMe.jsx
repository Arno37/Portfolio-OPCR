import React, { useState, useEffect } from "react";
import { Jumbotron } from "./migration";
import '../../scss/custom-styles.scss'; // Assurez-vous d'importer vos styles personnalisés

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, imageHeight, resume, isMenuOpen }) => {
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [showPic, setShowPic] = useState(Boolean(link));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleRequest = async () => {
      try {
        // Ajoutez ici votre logique de requête si nécessaire
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <Jumbotron id="aboutme" className={`m-0 ${isMenuOpen ? "shifted" : ""}`}>
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {showPic && (
            <img
              className="border border-secondary mb-3"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize}
              height={imageHeight}
              style={{ marginLeft: "70px" }} // Ajout de marginLeft pour déplacer la photo vers la droite
              loading="lazy" // Lazy loading de l'image
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"} align-self-center`}>
          <h2 className="display-4 mb-3 text-center">{heading}</h2>
          <p className="lead mb-3 text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
                style={{
                  backgroundColor: isHovered ? "#000000" : "transparent",
                  color: isHovered ? "#ffffff" : "#000000",
                  border: "1px solid #000000",
                  padding: "10px 20px",
                  textDecoration: "none",
                  transition: "background-color 0.3s, color 0.3s",
                  marginRight: "40px" // Ajout de marginRight pour le bouton
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                A Propos
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
