const fs = require('fs');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const username = "Arno37";
const API = "https://api.github.com";
const specificRepos = ["Portfolio-OPCR"]; // Ajoutez ici d'autres repos spécifiques si nécessaire

async function fetchProjects() {
    console.log('Fetching GitHub projects...');
    const token = process.env.REACT_APP_GITHUB_TOKEN;

    const config = token
        ? { headers: { Authorization: `token ${token}` } }
        : {};

    try {
        // 1. Fetch User Info
        console.log(`Fetching user info for ${username}...`);
        const userResponse = await axios.get(`${API}/users/${username}`, config);
        const totalRepos = userResponse.data.public_repos;
        const userData = userResponse.data;

        // 2. Fetch All Repos
        console.log(`Fetching repositories...`);
        const reposResponse = await axios.get(`${API}/users/${username}/repos?sort=updated&direction=desc`, config);
        let repoList = reposResponse.data;

        // 3. Fetch Specific Repos details if needed (to ensure we have latest data)
        // Note: The list above already contains them, but this mimics the original logic if specific processing was needed
        // For now we just use the list from the user's repos

        // Filter/Process if needed based on original Config
        // const length = 4; // Default length from config
        // repoList = repoList.slice(0, length); 
        // We save ALL repos, the component will slice them if needed, or we slice here.
        // Let's save the top 6 recently updated to be safe
        repoList = repoList.slice(0, 6);

        const dataToSave = {
            userData: userData,
            repos: repoList,
            totalRepos: totalRepos,
            lastUpdated: new Date().toISOString()
        };

        const outputPath = path.join(__dirname, '../src/components/Home/projects-data.json');

        fs.writeFileSync(outputPath, JSON.stringify(dataToSave, null, 2));
        console.log(`✅ Projects data saved to ${outputPath}`);

    } catch (error) {
        console.error('❌ Error fetching projects:', error.message);
        if (error.response) {
            console.error('Response status:', error.response.status);
        }
        process.exit(1);
    }
}

fetchProjects();
