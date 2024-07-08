import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const ProjectCard = ({ value }) => {
  const { name, svn_url, languages_url } = value;

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="shadow-sm h-100">
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          
          {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
          <hr />
          {languages_url ? (
            <Language languages_url={languages_url} />
          ) : (
            <Skeleton count={3} />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ svn_url }) => (
  <div className="d-grid gap-2 d-md-block mt-3">
   <a
  href={svn_url}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline-secondary"
  style={{ marginBottom: "0.5rem" }} /* Style inline pour ajouter un espacement en bas */
>
  <i className="fab fa-github" /> Repo GitHub
</a>
    <a
      href={`${svn_url}/archive/master.zip`}
      className="btn btn-outline-secondary mb-2" /* Ajout de la classe 'mb-2' pour l'espacement */
    >
      <i className="fab fa-github" /> Téléchargement du projet
    </a>
  </div>
);

const Language = ({ languages_url }) => {
  const [data, setData] = useState({});

  const fetchLanguages = useCallback(async () => {
    try {
      const response = await axios.get(languages_url);
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [languages_url]);

  useEffect(() => {
    fetchLanguages();
  }, [fetchLanguages]);

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
    <div className="pb-3">
      Langages:{" "}
      {Object.keys(data).length ? (
        Object.keys(data).map((language) => (
          <span key={language} style={{ marginRight: '0.5rem' }}>
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                display: 'inline-block',
                marginRight: '0.5rem',
                backgroundColor: getColorForLanguage(language),
              }}
            ></span>
            {language}: {getLanguagePercentage(language)} %
          </span>
        ))
      ) : (
        "projet sans codes"
      )}
    </div>
  );
};

export default ProjectCard;
