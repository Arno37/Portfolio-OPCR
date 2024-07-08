import React from 'react';
import { Col } from 'react-bootstrap';
import openclassroomsLogo from '../../editable-stuff/Logo_OpenClassrooms.jpg';
import bouyguesTelecomLogo from '../../editable-stuff/bt.jpg';
import '../../scss/custom-styles.scss';

const ExperienceCard = ({ data }) => {
  let logoUrl;

  switch (data.company.toLowerCase()) {
    case 'openclassrooms':
      logoUrl = openclassroomsLogo;
      break;
    case 'bouygues telecom':
      logoUrl = bouyguesTelecomLogo;
      break;
    default:
      logoUrl = null;
      break;
  }

  return (
    <Col lg="6">
      <div className="pb-5 text-center">
        {logoUrl && (
          <img
            className="bg-white mb-3"
            src={logoUrl}
            alt={data.company}
            style={{
              maxWidth: '50px',
              margin: '0 auto', // Centrer horizontalement
              display: 'block', // Assurer le centrage avec auto margin
            }}
          />
        )}
        <p className="lead">
          {data.role} <br />
          {data.company} <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
