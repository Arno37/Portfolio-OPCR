import React, { useState, useEffect } from "react";
import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, imageHeight, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [showPic, setShowPic] = useState(Boolean(link));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
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
    <Jumbotron id="aboutme" className="m-0">
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
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"} align-self-center`}>
          <h2 className="display-4 mb-3 text-center" style={{ marginRight: "100px" }}>{heading}</h2> {/* Ajout de marginRight */}
          <p className="lead mb-3 text-center" style={{ marginRight: "80px" }}>{message}</p> {/* Ajout de marginRight */}
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
