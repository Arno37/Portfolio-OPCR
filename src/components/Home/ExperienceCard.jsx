import React from 'react';
import { Col } from 'react-bootstrap';
import openclassroomsLogo from '../../assets/Logo_OpenClassrooms.webp';
import bouyguesTelecomLogo from '../../assets/bt.webp';
import simplonlogo from '../../assets/simplon.png';
import enedisLogo from '../../assets/enedis.png';
import '../../scss/custom-styles.scss';

const ExperienceCard = ({ data }) => {
  let logoUrl;
  let logoWidth = '70px';
  let logoHeight = '70px';

  switch (data.company.toLowerCase()) {
    case 'simplon':
      logoUrl = simplonlogo;
      break;
    case 'openclassrooms':
      logoUrl = openclassroomsLogo;
      logoWidth = '75px';
      logoHeight = '75px';
      break;
    case 'bouygues telecom':
      logoUrl = bouyguesTelecomLogo;
      break;
    case 'enedis':
      logoUrl = enedisLogo;
      logoWidth = '100px';
      logoHeight = '100px';
      break;
    default:
      logoUrl = null;
      break;
  }

  return (
    <Col lg="6" className="mb-4">
      <div className="glass-card hover-lift h-100" style={{
        padding: '2rem',
        textAlign: 'center'
      }}>
        {logoUrl && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: '2px solid var(--ai-cyan-400)',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)'
          }}>
            <img
              src={logoUrl}
              alt={data.company}
              width={logoWidth}
              height={logoHeight}
              style={{
                maxWidth: logoWidth,
                objectFit: 'cover',
                ...(data.company.toLowerCase() === 'enedis' && {
                  borderRadius: '50%'
                })
              }}
            />
          </div>
        )}
        <h5 style={{
          color: 'var(--ai-cyan-400)',
          fontWeight: 600,
          marginBottom: '0.5rem'
        }}>
          {data.role}
        </h5>
        <p style={{
          fontSize: '1.1rem',
          fontWeight: 500,
          marginBottom: '0.5rem',
          color: 'rgba(255, 255, 255, 0.9)'
        }}>
          {data.company}
        </p>
        <p style={{
          fontSize: '0.95rem',
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: 0
        }}>
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;
