import React, { memo } from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";
import { mainBody } from "../../editable-stuff/config";


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
          <h1 ref={ref} className="display-4" style={{ fontSize: styles.nameFontSize }}>
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
        </Container>
      </Jumbotron>
    );
  })
);

export default MainBody;
