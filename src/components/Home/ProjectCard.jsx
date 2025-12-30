import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import LazyLoad from "react-lazyload";

const ProjectCard = ({ value }) => {
  const { name, svn_url, languages_url } = value;

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <LazyLoad height={200} once>
        <Card className="glass-card hover-lift h-100" style={{
          border: 'none',
          background: 'var(--glass-bg)',
          backdropFilter: 'var(--glass-backdrop)'
        }}>
          <Card.Body>
            <Card.Title as="h5" style={{
              color: 'var(--ai-cyan-400)',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>
              {name || <Skeleton />}
            </Card.Title>

            {svn_url ? (
              <CardButtons svn_url={svn_url} />
            ) : (
              <Skeleton count={2} />
            )}
            <hr style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
              margin: '1rem 0'
            }} />
            {languages_url ? (
              <Language languages_url={languages_url} />
            ) : (
              <Skeleton count={3} />
            )}
          </Card.Body>
        </Card>
      </LazyLoad>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => (
  <div className="d-grid gap-2 d-md-block mt-3">
    <a
      href={svn_url}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-sm smooth-transition"
      style={{
        background: 'transparent',
        border: '1px solid var(--ai-cyan-400)',
        color: 'var(--ai-cyan-400)',
        marginBottom: "0.5rem",
        marginRight: "0.5rem",
        borderRadius: '6px'
      }}
    >
      <i className="fab fa-github" /> Repo GitHub
    </a>
    <a
      href={`${svn_url}/archive/master.zip`}
      className="btn btn-sm smooth-transition"
      style={{
        background: 'transparent',
        border: '1px solid var(--ai-purple-500)',
        color: 'var(--ai-purple-500)',
        marginBottom: "0.5rem",
        borderRadius: '6px'
      }}
    >
      <i className="fab fa-github" /> Télécharger
    </a>
  </div>
);

const Language = ({ languages_url }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get(languages_url);
        setData(response.data);
      } catch (error) {
        console.error(`Error fetching languages: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (languages_url) {
      fetchLanguages();
    }
  }, [languages_url]);

  const getLanguagePercentage = (language) => {
    const total = Object.values(data).reduce((acc, curr) => acc + curr, 0);
    const percentage = (data[language] / total) * 100;
    return percentage.toFixed(1);
  };

  const getColorForLanguage = (language) => {
    switch (language.toLowerCase()) {
      case "html":
        return "#e34c26";
      case "css":
        return "#563d7c";
      case "javascript":
        return "#f0db4f";
      case "react":
        return "#61dafb";
      default:
        return "#6c757d";
    }
  };

  return (
    <div className="pb-3" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
      Langages:{" "}
      {loading
        ? "Chargement..."
        : Object.keys(data).length
          ? Object.keys(data).map((language) => (
            <span key={language} style={{ marginRight: "0.5rem" }}>
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  display: "inline-block",
                  marginRight: "0.5rem",
                  backgroundColor: getColorForLanguage(language),
                }}
              ></span>
              {language}: {getLanguagePercentage(language)} %
            </span>
          ))
          : "projet sans codes"}
    </div>
  );
};

export default ProjectCard;
