
// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Arnaud",
  middleName: "",
  lastName: "Rambourg",
  message: "Développeur Web",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Arno37",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/arnaud-rambourg-a2a332291/",
    },
  ],
  // Ajout des styles de taille de police pour Arnaud Rambourg et Développeur Web
  styles: {
    messageFontSize: "24px", // Taille de police pour le message
  },
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "A Propos",
  imageLink: require("../editable-stuff/self.png"),
  imageSize: 160,
  message:
    "Développeur web junior récemment formé, je possède une expertise en communication efficace et empathique. Je suis spécialisé dans la résolution de problèmes techniques et non techniques, avec une capacité éprouvée à gérer les situations critiques. Mon engagement envers l'apprentissage continu et mon enthousiasme pour contribuer efficacement à des projets font de moi un atout précieux pour votre équipe.",
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Projets",
  gitHubUsername: "Arno37",
  reposLength: 8,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/self.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/self.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "375",
    height: "375",
  },
};

// SKILLS SECTION
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

// GET IN TOUCH SECTION
const getInTouch = {};

const experiences = {
  show: true,
  heading: "Experiences",
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
