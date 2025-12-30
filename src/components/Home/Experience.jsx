import React from 'react';
import PropTypes from 'prop-types';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import { Container, Row } from "react-bootstrap";

const Experience = ({ experiences }) => {
  console.log('Experiences prop:', experiences);

  if (!experiences || !experiences.show) {
    return null;
  }

  return (
    <section id="experience" className="section" style={{ padding: '4rem 0' }}>
      <Container>
        <Jumbotron id="experience-jumbotron" style={{ background: 'transparent' }}>
          <h2 id="experience-heading" className="section-heading display-4 mb-5">
            {experiences.heading}
          </h2>
          <Row>
            {experiences.data.map((data, index) => (
              <ExperienceCard key={index} data={data} id={`experience-card-${index}`} />
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

Experience.propTypes = {
  experiences: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
};

export default Experience;
