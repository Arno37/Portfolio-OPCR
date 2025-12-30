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
  gradientColors: "#0F172A, #1E293B, #6B46C1, #06B6D4, #3B82F6",
  firstName: "Arnaud",
  middleName: "",
  lastName: "Rambourg",
  message: "Développeur Web | Développeur Data IA",
  icons: socialLinks,
  styles: {
    messageFontSize: "24px",
  },
};

const about = {
  show: true,
  heading: "À Propos",
  imageLink: imageLink,
  imageSize: 160,
  message:
    "Fort de 16 ans d'expérience en relation client chez Bouygues Telecom, j'ai développé une écoute active et une compréhension approfondie des besoins utilisateurs - des compétences essentielles que j'applique aujourd'hui au développement 🎯\n\n" +
    "Après un virage à 180° vers la tech, je suis certifié développeur web (niveau 5) et me forme actuellement en alternance au développement Data & IA (niveau 6) avec Simplon et le Greta Centre-Val-de-Loire 🚀\n\n" +
    "Ma mission ? Allier mon expertise relationnelle à mes compétences techniques pour créer des solutions intelligentes, centrées sur l'utilisateur et qui ont du sens 🤖💡"
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
    { name: "HTML/CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "MongoDB" },
  ],
  softSkills: [
    { name: "Positif", value: 80 },
    { name: "Résilient", value: 82 },
    { name: "Curieux", value: 75 },
    { name: "Autonome", value: 85 },
    { name: "Persévérant", value: 90 },
    { name: "Rigoureux", value: 84 },
  ],
};



const getInTouch = {};

const experiences = {
  show: true,
  heading: "Expériences",
  data: [
    {
      role: 'Alternant développeur en IA',
      company: 'Enedis',
      date: 'Août 2025 – Septembre 2026',
    },
    {
      role: 'Formation de développeur data et IA - niveau 6',
      company: 'Simplon',
      date: 'Novembre 2024 – Septembre 2026',
    },
    {
      role: 'Certificat RNCP de Développeur Intégrateur Web - niveau 5',
      company: 'OpenClassrooms',
      date: 'Décembre 2023 – Juillet 2024',
    },
    {
      role: 'Conseiller Clientèle Expert',
      company: 'Bouygues Telecom',
      date: '2008 – 2022',
    },
  ]
};

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
