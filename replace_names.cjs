const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let newContent = content.replace(/Richard Catering/g, "Naman Catering")
                          .replace(/Richard/g, "Naman")
                          .replace(/richardcatering\.com/g, "namancatering.com");
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log("Updated", filePath);
  }
}

function walk(dir) {
  if (dir.includes('node_modules') || dir.includes('.next') || dir.includes('.git')) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.match(/\.(tsx|ts|js|md|json)$/)) {
      replaceInFile(fullPath);
    }
  }
}

walk('.');
