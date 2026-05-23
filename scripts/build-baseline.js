import { execSync } from 'node:child_process';
import fs from 'node:fs';

const commands = [];

if (!fs.existsSync('node_modules')) {
  commands.push('npm install --ignore-scripts');
}

commands.push('npm run research:artifacts', 'npm run build', 'python -m compileall server');

for (const command of commands) {
  console.log(`Running: ${command}`);
  execSync(command, { stdio: 'inherit' });
}

console.log('Build baseline validation passed.');
