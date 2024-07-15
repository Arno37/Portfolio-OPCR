import React from 'react';
import { Col } from 'react-bootstrap';
import openclassroomsLogo from '../../assets/Logo_OpenClassrooms.webp';
import bouyguesTelecomLogo from '../../assets/bt.webp';
import '../../scss/custom-styles.scss';

const ExperienceCard = ({ data }) => {
  let logoUrl;
  let logoWidth = '60px'; // Largeur par défaut (ajustée pour Openclassrooms)
  let logoHeight = '60px'; // Hauteur par défaut (ajustée pour Openclassrooms)

  switch (data.company.toLowerCase()) {
    case 'openclassrooms':
      logoUrl = openclassroomsLogo;
      break;
    case 'bouygues telecom':
      logoUrl = bouyguesTelecomLogo;
      logoWidth = '70px'; // Ajuster la largeur pour Bouygues Telecom si nécessaire
      logoHeight = '60px'; // Ajuster la hauteur pour Bouygues Telecom si nécessaire
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
            width={logoWidth}
            height={logoHeight}
            style={{
              maxWidth: logoWidth,
              margin: '0 auto',
              display: 'block',
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
