import React from "react";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";

const BadgeList = ({ items, colorA, colorB, borderColor }) =>
  items.map((skill, index) => (
    <span
      key={index}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.5rem 1.2rem',
        borderRadius: '50px',
        background: `linear-gradient(135deg, ${colorA}, ${colorB})`,
        border: `1px solid ${borderColor}`,
        color: 'rgba(255,255,255,0.92)',
        fontWeight: 600,
        fontSize: '0.92rem',
        letterSpacing: '0.02em',
        backdropFilter: 'blur(4px)',
        transition: 'all 0.2s ease',
        cursor: 'default',
        margin: '0.35rem',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 4px 16px ${borderColor}`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {skill.name}
    </span>
  ));

const Skills = React.forwardRef(({ heading, softSkills, hardSkills }, ref) => (
  <Jumbotron fluid style={{ background: 'transparent' }} className="m-0" id="skills">
    <Container className="p-5">
      <h2 className="section-heading display-4 pb-5">{heading}</h2>

      {/* Compétences Techniques */}
      {hardSkills && hardSkills.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{
            color: 'var(--ai-cyan-400)',
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Compétences Techniques
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BadgeList
              items={hardSkills}
              colorA="rgba(99,102,241,0.15)"
              colorB="rgba(6,182,212,0.15)"
              borderColor="rgba(99,102,241,0.4)"
            />
          </div>
        </div>
      )}

      {/* Capacités Transverses */}
      {softSkills && softSkills.length > 0 && (
        <div>
          <h3 style={{
            color: 'var(--ai-cyan-400)',
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Capacités Transverses
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <BadgeList
              items={softSkills}
              colorA="rgba(16,185,129,0.12)"
              colorB="rgba(6,182,212,0.12)"
              borderColor="rgba(16,185,129,0.4)"
            />
          </div>
        </div>
      )}
    </Container>
  </Jumbotron>
));

export default Skills;
