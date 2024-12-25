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
  message: "Développeur Web | Développeur Data IA",
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
    "Après une carrière très enrichissante de 16 ans chez Bouygues Telecom, j’ai réorienté mon avenir professionnel dans le Développement Web ainsi que la Data en lien avec l'IA. " +
    "Après une formation en développement web, j’ai obtenu une certification RNCP de niveau 5 de #Développeur #Intégrateur #Web, qui m’a permis d’acquérir des compétences techniques pour réaliser des projets #front-end et #back-end. 📚👨🏻‍🎓"+
    "J’ai décidé de poursuivre une autre formation de niveau 6 avec #Simplon et le #Greta Centre-Val-de-Loire en alternance pour devenir #Développeur #Data #IA 🤖"+ 
    "Cette formation me forme aux métiers de la #data et de l’#intelligence #artificielle, en m’enseignant des compétences telles que le traitement de données, le #machinelearning et le développement d’outils basés sur l’#IA, tout en consolidant mes bases en #développement."
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
      role: "En formation de Développeur Data IA en alternance - niveau 6",
      company: "Simplon",
      date: "Novembre 2024 – Septembre 2026",
    },
    {
      role: "Certificat RNCP de Développeur Intégrateur Web - niveau 5",
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
