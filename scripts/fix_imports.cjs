const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace ../../libraries with @/libraries
  content = content.replace(/from\s+['"](?:\.\.\/)+libraries\/(.*?)['"]/g, "from '@/libraries/$1'");
  // Replace ../../lib with @/lib
  content = content.replace(/from\s+['"](?:\.\.\/)+lib\/(.*?)['"]/g, "from '@/lib/$1'");
  // Replace ../../components with @/components
  content = content.replace(/from\s+['"](?:\.\.\/)+components\/(.*?)['"]/g, "from '@/components/$1'");

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed imports in', file);
  }
});
