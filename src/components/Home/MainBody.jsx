import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import { mainBody } from "../../editable-stuff/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from '@fortawesome/free-brands-svg-icons';
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
              <FontAwesomeIcon icon={faPython} size="3x" color="#FFD43B" />
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
