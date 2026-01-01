import React from 'react';
import { Col } from 'react-bootstrap';
import openclassroomsLogo from '../../assets/Logo_OpenClassrooms.webp';
import bouyguesTelecomLogo from '../../assets/logo-bouygues-telecom.png';
import simplonlogo from '../../assets/simplon.png';
import enedisLogo from '../../assets/enedis.png';
import '../../scss/custom-styles.scss';

const ExperienceCard = ({ data }) => {
  let logoUrl;

  switch (data.company.toLowerCase()) {
    case 'simplon':
      logoUrl = simplonlogo;
      break;
    case 'openclassrooms':
      logoUrl = openclassroomsLogo;
      break;
    case 'bouygues telecom':
      logoUrl = bouyguesTelecomLogo;
      break;
    case 'enedis':
      logoUrl = enedisLogo;
      break;
    default:
      logoUrl = null;
      break;
  }

  const isBouygues = data.company.toLowerCase() === 'bouygues telecom';

  return (
    <Col lg="6" className="mb-4">
      <div className="glass-card hover-lift h-100" style={{
        padding: '2rem',
        textAlign: 'center'
      }}>
        {logoUrl && (
          <div style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            overflow: 'hidden',
            borderRadius: '20px',
            background: isBouygues ? '#ffffff' : 'rgba(255, 255, 255, 0.1)'
          }}>
            <img
              src={logoUrl}
              alt={data.company}
              width="100%"
              height="100%"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                transform: isBouygues ? 'scale(1.8)' : 'none'
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
    </Col >
  );
};

export default ExperienceCard;
