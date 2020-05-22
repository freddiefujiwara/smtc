#!/usr/bin/env node

const pkg = require('../package')
const argv = require('minimist')(process.argv.slice(2));
if (argv['_'].length < 1 || typeof argv['h'] !== 'undefined'){
  console.error("================================================================================");
  console.error(pkg.description);
  console.error("");
  console.error(`Author     : ${pkg.author.name} <${pkg.author.email}> ${pkg.author.url}`);
  console.error(`Homepage   : ${pkg.homepage}`);
  console.error(`LICENSE    : ${pkg.license}`);
  console.error(`Report bugs: ${pkg.bugs.url}`);
  console.error("================================================================================");
  console.error("");
  console.error("Usage: smtc [-h] <file>");
  console.error("");
  process.exit(1);
}

const fs = require('fs');
let filter = undefined;
if (typeof argv['f'] === 'string'){
  filter = eval(fs.readFileSync(argv['f'], 'utf8'));
}
const smtc = require('../src/smtc');
const s = new smtc();
const oneStepCoverage = s.readFile(argv['_'][0])
  .initialize()
  .oneStepCoverage();
switch(argv['o']){
  case "z":
    s.printZeroStep();
    break;
  case "zm":
    s.printZeroStepMatrix();
    break;
  case "o":
    s.printOneStep(oneStepCoverage);
    break;
  case "om":
    s.printOneStepMatrix(oneStepCoverage);
    break;
  case "d":
    s.printDiagram();
    break;
  default:
    s.printTransitions();
    break;
}
