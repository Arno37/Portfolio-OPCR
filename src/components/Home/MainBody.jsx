import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import { mainBody } from "../../editable-stuff/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDatabase, faBrain } from '@fortawesome/free-solid-svg-icons';

import { faJsSquare, faNodeJs, faDocker } from "@fortawesome/free-brands-svg-icons";

const MainBody = memo(
  React.forwardRef(({ gradient, isMenuOpen }, ref) => {
    const { firstName, lastName, message, styles } = mainBody;

    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "200% 200%",
        }}
        className={`title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 ${isMenuOpen ? "shifted" : ""
          }`}
      >
        <div id="stars"></div>
        <Container className="text-center">
          <div className="glass-card fade-in-up" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '3rem 2rem',
            marginBottom: '2rem'
          }}>
            <h1 ref={ref} className="display-3" style={{
              fontSize: styles.nameFontSize,
              fontWeight: 800,
              marginBottom: '1rem'
            }}>
              {firstName} {lastName}
            </h1>
            <Typist>
              <div className="lead typist" style={{
                fontSize: styles.messageFontSize,
                color: 'var(--ai-cyan-400)',
                fontWeight: 500
              }}>
                {message}
              </div>
            </Typist>
          </div>

          <div className="technology-icons fade-in-up" style={{
            marginTop: "30px",
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '30px'
          }}>
            <div className="tech-icon glass-card" style={{
              padding: '1.5rem',
              minWidth: '120px'
            }}>
              <FontAwesomeIcon icon={faNodeJs} size="3x" color="#339933" />
              <div style={{ marginTop: '10px', fontSize: '1em', fontWeight: 500 }}>Node.js</div>
            </div>
            <div className="tech-icon glass-card" style={{
              padding: '1.5rem',
              minWidth: '120px'
            }}>
              <FontAwesomeIcon icon={faDocker} size="3x" color="#2496ED" />
              <div style={{ marginTop: '10px', fontSize: '1em', fontWeight: 500 }}>Docker</div>
            </div>
            <div className="tech-icon glass-card" style={{
              padding: '1.5rem',
              minWidth: '120px'
            }}>
              <FontAwesomeIcon icon={faJsSquare} size="3x" color="#F7DF1E" />
              <div style={{ marginTop: '10px', fontSize: '1em', fontWeight: 500 }}>JavaScript</div>
            </div>
            <div className="tech-icon glass-card" style={{
              padding: '1.5rem',
              minWidth: '120px'
            }}>
              <svg viewBox="0 0 128 128" width="48" height="48">
                <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                  <stop offset="0" stopColor="#5A9FD4" />
                  <stop offset="1" stopColor="#306998" />
                </linearGradient>
                <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
                  <stop offset="0" stopColor="#FFD43B" />
                  <stop offset="1" stopColor="#FFE873" />
                </linearGradient>
                <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
                <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" />
              </svg>
              <div style={{ marginTop: '10px', fontSize: '1em', fontWeight: 500 }}>Python</div>
            </div>
            <div className="tech-icon glass-card" style={{
              padding: '1.5rem',
              minWidth: '120px'
            }}>
              <FontAwesomeIcon icon={faBrain} size="3x" color="#FF6B6B" />
              <div style={{ marginTop: '10px', fontSize: '1em', fontWeight: 500 }}>Machine Learning</div>
            </div>
            <div className="tech-icon glass-card" style={{
              padding: '1.5rem',
              minWidth: '120px'
            }}>
              <FontAwesomeIcon icon={faDatabase} size="3x" color="#00618A" />
              <div style={{ marginTop: '10px', fontSize: '1em', fontWeight: 500 }}>SQL</div>
            </div>
          </div>
        </Container>
      </Jumbotron>
    );
  })
);

export default MainBody;
