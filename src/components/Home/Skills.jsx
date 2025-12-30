import React from "react";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [isScrolled]
  );

  return (
    <Jumbotron ref={skillsTabRef} fluid style={{ background: 'transparent' }} className="m-0" id="skills">
      <Container className="p-5">
        <h2 className="section-heading display-4 pb-5">{heading}</h2>
        <h3 style={{
          color: 'var(--ai-cyan-400)',
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Compétences Relationnelles
        </h3>
        <Row className="pt-3 px-1">
          <SkillsTabMemo skills={softSkills} isScrolled={isScrolled} />
        </Row>
      </Container>
    </Jumbotron>
  );
});

const SkillsTabMemo = React.memo(SkillsTab);

export default Skills;
