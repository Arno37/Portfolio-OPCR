import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
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
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Compétences Relationnelles"
          >
            <Row className="pt-3 px-1">
              <SkillsTabMemo skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

const SkillsTabMemo = React.memo(SkillsTab);

export default Skills;