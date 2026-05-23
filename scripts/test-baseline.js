import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

const requiredFiles = [
  'README.md',
  'CHANGELOG.md',
  'DEPLOYMENT_GUIDE.md',
  'GO_TO_MARKET.md',
  'BRAND_GUIDELINES.md',
  'SECURITY.md',
  '.env.example',
  'package.json',
  'validate.py',
  path.join('scripts', 'test-baseline.js'),
  path.join('scripts', 'build-baseline.js'),
];

const failures = [];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) {
    failures.push(`Missing required file: ${file}`);
  }
}

const packageJson = JSON.parse(
  fs.readFileSync(path.join(root, 'package.json'), 'utf8'),
);

const requiredScripts = ['test', 'build', 'build:baseline', 'validate:repo'];
for (const script of requiredScripts) {
  if (!packageJson.scripts?.[script]) {
    failures.push(`Missing package.json script: ${script}`);
  }
}

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
for (const section of ['## Project analysis', '## Website in Test / deployment traceability']) {
  if (!readme.includes(section)) {
    failures.push(`README.md missing section: ${section}`);
  }
}

const envExample = fs.readFileSync(path.join(root, '.env.example'), 'utf8');
for (const key of ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY']) {
  if (!envExample.includes(`${key}=`)) {
    failures.push(`.env.example missing key: ${key}`);
  }
}

if (failures.length > 0) {
  console.error('Revvel baseline validation failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Revvel baseline validation passed.');
