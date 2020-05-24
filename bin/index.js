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
  console.error("Usage: smtc [-h] <file> [-o <z|zm|o|om|d|t:default>]");
  console.error("");
  process.exit(1);
}

const fs = require('fs');
const Smtc = require('../src/smtc');
const s = new Smtc();
const oneStepCoverage = s.setContents(require('fs').readFileSync(argv['_'][0],'utf8'))
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
