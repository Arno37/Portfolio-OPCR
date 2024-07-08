import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Arnaud Rambourg - Tous droits réservés</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
