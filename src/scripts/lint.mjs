/* eslint-disable no-console */
import { argv, exit } from 'node:process';
import chalk from 'chalk';
import { ESLint } from 'eslint';

import { listChangedFiles } from './listChangedFiles.mjs';

const changedFiles = [...listChangedFiles()];

const allChangedFiles =
  changedFiles &&
  changedFiles.length &&
  changedFiles.filter(
    (path) =>
      path.endsWith('.js') ||
      path.endsWith('.сjs') ||
      path.endsWith('.mjs') ||
      path.endsWith('.jsx') ||
      path.endsWith('.ts') ||
      path.endsWith('.tsx'),
  );

if (!allChangedFiles) {
  console.log('No file changes found to lint.');
  exit();
}

const clientFiles = allChangedFiles;

console.log('Detected files changed: ', clientFiles);

const myArgs = argv.slice(2);
const fixArgument = myArgs.includes('--fix');

async function main() {
  const eslint = new ESLint({
    fix: fixArgument,
  });

  if (fixArgument) {
    console.log('eslint: fix is initiated');
  }

  const results = await eslint.lintFiles(clientFiles);

  const hasErrors = results && results.some((result) => result.errorCount > 0);
  const hasWarnings =
    results && results.some((result) => result.warningCount > 0);

  if (fixArgument) {
    await ESLint.outputFixes(results);
  }

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  console.log(resultText);

  if (hasErrors) {
    console.log(chalk.cyan('please fix all errors'));
  }

  if (hasWarnings) {
    console.log(chalk.cyan('please fix all warnings'));
  }

  if (hasWarnings || hasErrors) {
    exit(1);
  }
}

try {
  main();
} catch (error) {
  console.error(error);
  exit(1);
}
