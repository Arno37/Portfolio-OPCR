import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import { Container, Row } from "react-bootstrap";

const Experience = ({ experiences }) => {
  console.log('Experiences prop:', experiences); // Ajout pour vérifier les données

  if (!experiences.show) {
    return null;
  }

  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <Row>
            {experiences.data.map((data, index) => (
              <ExperienceCard key={index} data={data} />
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
