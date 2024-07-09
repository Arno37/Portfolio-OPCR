import React from 'react';
import { Col } from 'react-bootstrap';
import openclassroomsLogo from '../../editable-stuff/Logo_OpenClassrooms.webp';
import bouyguesTelecomLogo from '../../editable-stuff/bt.webp';
import '../../scss/custom-styles.scss';

const ExperienceCard = ({ data }) => {
  let logoUrl;
  let logoWidth = '50px'; // Largeur par défaut (à ajuster si nécessaire)
  let logoHeight = 'auto'; // Hauteur automatique pour maintenir l'aspect ratio

  switch (data.company.toLowerCase()) {
    case 'openclassrooms':
      logoUrl = openclassroomsLogo;
      // Définir les dimensions réelles ou approximatives du logo Openclassrooms
      logoWidth = '60px'; // Exemple de largeur
      logoHeight = '60px'; // Exemple de hauteur
      break;
    case 'bouygues telecom':
      logoUrl = bouyguesTelecomLogo;
      // Définir les dimensions réelles ou approximatives du logo Bouygues Telecom
      logoWidth = '70px'; // Exemple de largeur
      logoHeight = '60px'; // Exemple de hauteur
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
            width={logoWidth} // Ajouter la largeur
            height={logoHeight} // Ajouter la hauteur
            style={{
              maxWidth: logoWidth, // Adapter la largeur maximale si nécessaire
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
