import React, { useState, useEffect } from "react";
import { Jumbotron } from "./migration";
import '../../scss/custom-styles.scss';

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
    <Jumbotron id="aboutme" className={`m-0 ${isMenuOpen ? "shifted" : ""}`} style={{ background: 'transparent' }}>
      <div className="container">
        <h2 className="section-heading display-4 mb-5">{heading}</h2>
        <div className="row align-items-center">
          <div className="col-lg-5 d-none d-lg-block text-center mb-4 mb-lg-0">
            {showPic && (
              <div className="glass-card hover-lift" style={{
                padding: '1rem',
                display: 'inline-block'
              }}>
                <img
                  className="rounded-circle"
                  src={profilePicUrl}
                  alt="profilepicture"
                  width={imgSize}
                  height={imageHeight}
                  loading="lazy"
                  style={{
                    border: '3px solid var(--ai-cyan-400)',
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)'
                  }}
                />
              </div>
            )}
          </div>
          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <div className="glass-card fade-in-up" style={{ padding: '2.5rem' }}>
              <p className="lead" style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                {message}
              </p>
              {resume && (
                <div className="text-center mt-4">
                  <a
                    className="btn btn-lg smooth-transition"
                    href={resume}
                    target="_blank"
                    rel="noreferrer noopener"
                    role="button"
                    aria-label="Resume/CV"
                    style={{
                      background: isHovered ? 'var(--ai-gradient-primary)' : 'transparent',
                      color: '#ffffff',
                      border: '2px solid var(--ai-cyan-400)',
                      padding: '12px 32px',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      fontWeight: 600,
                      boxShadow: isHovered ? '0 0 20px rgba(6, 182, 212, 0.5)' : 'none'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    A Propos
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
