const fs = require('fs');
const path = require('path');
const terser = require('terser');

const sourceDirs = ['src/components', 'src/editable-stuff']; // Répertoires source à parcourir
const outputDir = 'dist'; // Répertoire de sortie pour les fichiers minimisés

// Fonction pour minimiser un fichier
async function minimizeFile(filePath) {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    const result = await terser.minify(data, {
      compress: true,
      mangle: true,
    });

    // Créer le chemin de sortie pour le fichier minimisé
    const relativePath = path.relative(path.join(...sourceDirs), filePath);
    const outputFile = path.join(outputDir, relativePath);

    // Assurez-vous que le répertoire de sortie existe
    await fs.promises.mkdir(path.dirname(outputFile), { recursive: true });

    // Écrire le fichier minimisé
    await fs.promises.writeFile(outputFile, result.code);

    console.log(`Fichier ${filePath} minimisé avec succès!`);
  } catch (err) {
    console.error(`Erreur lors de la minimisation du fichier ${filePath}:`, err);
  }
}

// Fonction pour parcourir récursivement les répertoires source
async function traverseDirectories(dir) {
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.promises.stat(filePath);

    if (stat.isDirectory()) {
      await traverseDirectories(filePath);
    } else if (path.extname(file) === '.js' || path.extname(file) === '.jsx') {
      await minimizeFile(filePath);
    }
  }
}

// Entrée principale du script : appeler traverseDirectories pour chaque répertoire source
async function main() {
  try {
    for (const sourceDir of sourceDirs) {
      await traverseDirectories(sourceDir);
    }
    console.log('Minification terminée avec succès!');
  } catch (err) {
    console.error('Erreur lors de la minification :', err);
  }
}

// Lancer le script principal
main();