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

const imageLink = require("../editable-stuff/self.webp");

// Sections du site
const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
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
    "Développeur web junior récemment formé, je possède une expertise en communication efficace et empathique. Je suis spécialisé dans la résolution de problèmes techniques et non techniques, avec une capacité éprouvée à gérer les situations critiques. Mon engagement envers l'apprentissage continu et mon enthousiasme pour contribuer efficacement à des projets font de moi un atout précieux pour votre équipe.",
};

const repos = {
  show: true,
  heading: "Projets",
  gitHubUsername: "Arno37",
  reposLength: 8,
  specificRepos: [],
};

const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare.",
  images: [
    {
      img: imageLink,
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: imageLink,
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "375",
    height: "375",
  },
};

const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", logo: "html-css-logo.png", value: 35 },
    { name: "JavaScript", logo: "javascript-logo.png", value: 20 },
    { name: "React", logo: "react-logo.png", value: 22 },
    { name: "Node.js", logo: "nodejs-logo.png", value: 35 },
    { name: "MongoDB", logo: "mongodb-logo.png", value: 30 },
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

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
