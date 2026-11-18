#!/usr/bin/env node

import fs from 'fs';
import minimist from 'minimist';
import Smtc from '../src/smtc.js';

const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const argv = minimist(process.argv.slice(2));
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
  console.error("Usage: smtc [-h] <file> [-s <0|1|2... (1:default)>] [-t <t|m|c|d (t:default)>]");
  console.error("");
  process.exit(1);
}

const s = new Smtc();
const swi = argv['s'] && parseInt(argv['s']) >= 0 ? argv['s'] : 0;
await s.setContents(fs.readFileSync(argv['_'][0],'utf8'))
  .initialize();
const nSwitchCoverage = s.nSwitchCoverage(swi);
switch(argv['t']){
  case "d":
    await s.printDiagram();
    break;
  case "m":
    s.printNSwitchMatrix(nSwitchCoverage);
    break;
  case "c":
    s.printNSwitch(nSwitchCoverage);
    break;
  default:
    s.printTransitions();
    break;
}
