import React, { useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="social-icons mb-3">
              <a
                href="https://github.com/Arno37"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
              <a
                href="https://www.linkedin.com/in/arnaud-rambourg-a2a332291/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light mx-2"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
            </div>
            <p className="mb-0">
              &copy; {currentYear} Arnaud Rambourg - Tous droits réservés
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
});

export default Footer;
