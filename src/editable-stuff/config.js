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
  message: "Développeur Web",
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
    "Je me suis lancé un défi audacieux en effectuant une reconversion professionnelle dans le développement web. Animé par une soif d'apprentissage et une curiosité aigüe, j'ai décidé d'explorer cet univers fascinant. J'ai donc entrepris une formation intensive de développeur web auprès de l'organisme Openclassrooms. Au cours de cette aventure, j'ai grandement apprécié prendre part à des projets captivants et mettre en pratique mes compétences en créant une série de projets innovants, tous réunis dans mon portfolio."
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
