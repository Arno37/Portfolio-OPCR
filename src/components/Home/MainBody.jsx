import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { mainBody } from "../../editable-stuff/config";

const MainBody = React.forwardRef(
  ({ gradient, icons }, ref) => {
    const { firstName, lastName, message, styles } = mainBody;

    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
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
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            A Propos
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
