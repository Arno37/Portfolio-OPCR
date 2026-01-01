import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import projectsData from "./projects-data.json";

const Project = ({ heading, username, length, specfic }) => {
  const [projectsArray, setProjectsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalRepos, setTotalRepos] = useState(0);

  useEffect(() => {
    try {
      setLoading(true);
      // Utiliser les données statiques
      const repoList = projectsData.repos.slice(0, length);
      setTotalRepos(projectsData.totalRepos);
      setProjectsArray(repoList);
      setLoading(false);
    } catch (err) {
      console.error("Erreur lors du chargement des projets:", err);
      setError("Erreur lors du chargement des projets.");
      setLoading(false);
    }
  }, [length]);

  return (
    <Jumbotron fluid id="projects" style={{ background: 'transparent', padding: '4rem 0' }} className="m-0">
      <Container>
        <h2 className="section-heading display-4 pb-5">
          {heading}
        </h2>

        {error && (
          <div className="glass-card" style={{
            padding: '2rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <p style={{
              color: 'var(--ai-cyan-400)',
              fontSize: '1.1rem',
              marginBottom: 0
            }}>
              ⚠️ {error}
            </p>
          </div>
        )}

        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : null}
        </Row>

        {projectsArray.length > 0 && totalRepos > projectsArray.length && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg glass-card smooth-transition"
              style={{
                background: 'var(--ai-gradient-primary)',
                color: '#ffffff',
                border: 'none',
                padding: '12px 32px',
                borderRadius: '8px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Voir tous mes projets sur GitHub →
            </a>
          </div>
        )}
      </Container>
    </Jumbotron>
  );
};

export default Project;
