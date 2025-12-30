import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalRepos, setTotalRepos] = useState(0);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    setLoading(true);
    setError(null);

    // Configuration pour l'authentification GitHub
    const config = process.env.REACT_APP_GITHUB_TOKEN
      ? { headers: { Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}` } }
      : {};

    try {
      const response = await axios.get(allReposAPI, config);
      repoList = [...response.data.slice(0, length)];

      // Récupérer le nombre total de repos
      const userResponse = await axios.get(`${API}/users/${username}`, config);
      setTotalRepos(userResponse.data.public_repos);

      for (let repoName of specfic) {
        try {
          const response = await axios.get(`${specficReposAPI}/${repoName}`, config);
          repoList.push(response.data);
        } catch (error) {
          console.error(`Error fetching specific repo '${repoName}': ${error.message}`);
        }
      }

      setProjectsArray(repoList);
    } catch (error) {
      console.error(`Error fetching all repos: ${error.message}`);
      if (error.response && error.response.status === 403) {
        setError("Limite de l'API GitHub atteinte. Les projets seront disponibles dans environ une heure.");
      } else {
        setError("Erreur lors du chargement des projets GitHub.");
      }
    } finally {
      setLoading(false);
    }
  }, [allReposAPI, length, specfic, specficReposAPI, username]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" style={{ background: 'transparent', padding: '4rem 0' }} className="m-0">
      <Container>
        <h2 className="section-heading display-4 pb-5">
          {totalRepos > 0 && <span style={{ color: 'var(--ai-cyan-400)' }}>{totalRepos} </span>}
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
            : loading && dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
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
