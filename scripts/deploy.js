#!/usr/bin/env node
/**
 * Startet den FTP-Deploy per GitHub Actions (workflow_dispatch).
 * Voraussetzung: GitHub CLI (gh) installiert und eingeloggt.
 *
 * Nutzung:
 *   npm run deploy           → deployt von Branch "main"
 *   npm run deploy -- develop   → deployt von Branch "develop"
 *   DEPLOY_BRANCH=develop npm run deploy  → deployt von Branch "develop"
 */

import { execSync } from 'child_process';

const branch = process.argv[2] || process.env.DEPLOY_BRANCH || 'main';
const workflowFile = 'ftp-deploy.yml';

try {
  execSync(
    `gh workflow run "${workflowFile}" --ref main -f branch=${branch}`,
    { stdio: 'inherit' }
  );
  console.log(`\n✅ Deploy gestartet für Branch: ${branch}`);
  console.log('   Status: https://github.com/DasKammerl/Asterix/actions\n');
} catch (e) {
  console.error('\n❌ Fehler: GitHub CLI (gh) nicht gefunden oder nicht eingeloggt.');
  console.error('   Install: https://cli.github.com/  →  Dann: gh auth login\n');
  process.exit(1);
}
