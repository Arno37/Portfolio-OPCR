import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import { mainBody } from "../../editable-stuff/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare, faReact, faHtml5, faCss3Alt, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { SiMongodb } from "react-icons/si";

const MainBody = memo(
  React.forwardRef(({ gradient, isMenuOpen }, ref) => {
    const { firstName, lastName, message, styles } = mainBody;

    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className={`title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 ${
          isMenuOpen ? "shifted" : ""
        }`}
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 ref={ref} className="display-3" style={{ fontSize: styles.nameFontSize }}>
            {firstName} {lastName}
          </h1>
          <Typist>
            <div className="lead typist" style={{ fontSize: styles.messageFontSize }}>
              {message}
            </div>
          </Typist>

          <div className="developer-web">
            <div className="spacer"></div>
            <div style={{ height: "20px" }}></div> {/* Espace supplémentaire */}
          </div>

          <div className="icon-container" style={{ marginTop: "30px", display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ margin: '0 15px', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faNodeJs} size="3x" color="#339933" />
              <div style={{ marginTop: '10px', fontSize: '1em' }}>Node.js</div>
            </div>
            <div style={{ margin: '0 15px', textAlign: 'center' }}>
              <SiMongodb size="3em" color="#47A248" />
              <div style={{ marginTop: '10px', fontSize: '1em' }}>MongoDB</div>
            </div>
            <div style={{ margin: '0 15px', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faHtml5} size="3x" color="#E34F26" />
              <div style={{ marginTop: '10px', fontSize: '1em' }}>HTML5</div>
            </div>
            <div style={{ margin: '0 15px', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" />
              <div style={{ marginTop: '10px', fontSize: '1em' }}>CSS3</div>
            </div>
            <div style={{ margin: '0 15px', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" />
              <div style={{ marginTop: '10px', fontSize: '1em' }}>React</div>
            </div>
            <div style={{ margin: '0 15px', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faJsSquare} size="3x" color="#F7DF1E" />
              <div style={{ marginTop: '10px', fontSize: '1em' }}>JavaScript</div>
            </div>
          </div>
        </Container>
      </Jumbotron>
    );
  })
);

export default MainBody;
