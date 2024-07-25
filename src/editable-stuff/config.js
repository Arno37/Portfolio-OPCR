// Constantes réutilisées

const socialLinks = [
  {
    image: "fa-github",
    url: "https://github.com/Arno37",
  },
  {
    image: "fa-linkedin",
    url: "https://www.linkedin.com/in/arnaud-rambourg-a2a332291/",
  },
];

const imageLink = require("../assets/image.webp");

// Sections du site
const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f",
  firstName: "Arnaud",
  middleName: "",
  lastName: "Rambourg",
  message: "Développeur Full-Stack junior",
  icons: socialLinks,
  styles: {
    messageFontSize: "24px",
  },
};

const about = {
  show: true,
  heading: "A Propos",
  imageLink: imageLink,
  imageSize: 160,
  message:
    "Faisant preuve d'audace et de détermination, j'ai relevé le défi d'une transition de carrière ambitieuse vers le secteur du développement web. Animé par une passion pour l'apprentissage continu et une curiosité sans faille, j'ai investi dans une formation intensive chez Openclassrooms pour maîtriser les compétences nécessaires dans ce domaine. Cette aventure éducative m'a ouvert les portes à des projets captivants et m'a permis d'affiner mon expertise technique. Mon portfolio, que je vous invite à découvrir, témoigne de ma rigueur et de mon aptitude à créer des solutions web innovantes."
};

const repos = {
  show: true,
  heading: "Projets",
  gitHubUsername: "Arno37",
  reposLength: 8,
  specificRepos: [],
};

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", value: 35 },
    { name: "JavaScript", value: 20 },
    { name: "React", value: 22 },
    { name: "Node.js", value: 35 },
    { name: "MongoDB", value: 30 },
  ],
  softSkills: [
    { name: "Positif", value: 80 },
    { name: "Résilient", value: 82 },
    { name: "Curieux", value: 75 },
    { name: "Autonome", value: 85 },
    { name: "Persévérant", value: 84 },
  ],
};

const getInTouch = {};

const experiences = {
  show: true,
  heading: "Expériences",
  data: [
    {
      role: "Certification de Développeur Web",
      company: "OpenClassrooms",
      date: "Décembre 2023 – Juillet 2024",
    },
    {
      role: "Conseiller Clientèle Expert",
      company: "Bouygues Telecom",
      date: "2006 – 2022",
    },
  ],
};

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
