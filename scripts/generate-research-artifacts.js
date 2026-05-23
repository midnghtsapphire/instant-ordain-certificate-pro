import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const artifactsDir = path.join(root, 'artifacts', 'research');
const dataDir = path.join(root, 'data', 'research');

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const goToMarket = fs.readFileSync(path.join(root, 'GO_TO_MARKET.md'), 'utf8');
const deploymentGuide = fs.readFileSync(path.join(root, 'DEPLOYMENT_GUIDE.md'), 'utf8');

const getSection = (markdown, heading) => {
  const sectionMarker = `## ${heading}\n`;
  const sectionStart = markdown.indexOf(sectionMarker);

  if (sectionStart === -1) {
    return [];
  }

  const rest = markdown.slice(sectionStart + sectionMarker.length);
  const nextHeadingIndex = rest.search(/\n## /);
  const sectionContent = (nextHeadingIndex === -1 ? rest : rest.slice(0, nextHeadingIndex))
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  return sectionContent;
};

const cleanBullet = (line) => line.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '').trim();

const parseSourceLine = (line) => {
  const cleaned = cleanBullet(line);
  const separatorIndex = cleaned.lastIndexOf(': http');

  if (separatorIndex === -1) {
    return {
      summary: cleaned,
      url: null,
    };
  }

  return {
    summary: cleaned.slice(0, separatorIndex).trim(),
    url: cleaned.slice(separatorIndex + 2).trim(),
  };
};

const readmeAnalysis = getSection(readme, 'Project analysis').map(cleanBullet);
const websiteTraceability = getSection(
  readme,
  'Website in Test / deployment traceability',
).map(cleanBullet);
const marketSignals = getSection(goToMarket, 'Market signals').map(parseSourceLine);
const goToMarketAnalysis = getSection(goToMarket, 'Project analysis').map(cleanBullet);
const revenueFraming = getSection(goToMarket, 'Revenue framing').map(cleanBullet);
const launchMoves = getSection(goToMarket, 'Immediate launch moves').map(cleanBullet);
const deploymentTraceability = getSection(
  deploymentGuide,
  'Website in Test traceability',
).map(cleanBullet);

fs.mkdirSync(artifactsDir, { recursive: true });
fs.mkdirSync(dataDir, { recursive: true });

const generatedAt = new Date().toISOString();

const marketSignalsArtifact = {
  generatedAt,
  product: 'Instant Ordain Certificate Pro',
  sourceDocument: 'GO_TO_MARKET.md',
  sources: marketSignals,
};

const revenueModelArtifact = {
  generatedAt,
  product: 'Instant Ordain Certificate Pro',
  sourceDocument: 'GO_TO_MARKET.md',
  projectAnalysis: goToMarketAnalysis,
  revenueFraming,
  launchMoves,
};

const s2mReport = {
  generatedAt,
  product: 'Instant Ordain Certificate Pro',
  automation: {
    command: 'npm run research:artifacts',
    emittedArtifacts: [
      'artifacts/research/revvel-s2m-report.json',
      'artifacts/research/revvel-s2m-report.md',
      'data/research/market-signals.json',
      'data/research/revenue-model.json',
    ],
  },
  documentationSources: ['README.md', 'GO_TO_MARKET.md', 'DEPLOYMENT_GUIDE.md'],
  readmeAnalysis,
  websiteTraceability,
  deploymentTraceability,
  counts: {
    marketSignals: marketSignals.length,
    revenuePoints: revenueFraming.length,
    launchMoves: launchMoves.length,
  },
};

const s2mMarkdown = `# Revvel S2M Research Report

- generated at: ${generatedAt}
- product: Instant Ordain Certificate Pro
- automation command: \`npm run research:artifacts\`

## Project analysis
${readmeAnalysis.map((item) => `- ${item}`).join('\n')}

## Website in Test traceability
${websiteTraceability.map((item) => `- ${item}`).join('\n')}

## Deployment traceability
${deploymentTraceability.map((item) => `- ${item}`).join('\n')}

## Market signals
${marketSignals
  .map((item) => `- ${item.summary}${item.url ? ` (${item.url})` : ''}`)
  .join('\n')}

## Revenue framing
${revenueFraming.map((item) => `- ${item}`).join('\n')}

## Immediate launch moves
${launchMoves.map((item) => `- ${item}`).join('\n')}
`;

fs.writeFileSync(
  path.join(dataDir, 'market-signals.json'),
  `${JSON.stringify(marketSignalsArtifact, null, 2)}\n`,
);
fs.writeFileSync(
  path.join(dataDir, 'revenue-model.json'),
  `${JSON.stringify(revenueModelArtifact, null, 2)}\n`,
);
fs.writeFileSync(
  path.join(artifactsDir, 'revvel-s2m-report.json'),
  `${JSON.stringify(s2mReport, null, 2)}\n`,
);
fs.writeFileSync(path.join(artifactsDir, 'revvel-s2m-report.md'), `${s2mMarkdown}\n`);

console.log('Generated revvel S2M research artifacts.');
