const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://arno37.github.io/Portfolio-OPCR/";

ghpages.publish(
  pathname,
  {
    branch: "main",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
)