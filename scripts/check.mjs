import {readFileSync,existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
execFileSync(process.execPath,['--check','dist/app.js'],{stdio:'inherit'});
const html=readFileSync('dist/index.html','utf8');
for(const file of ['app.js','style.css']){if(!existsSync('dist/'+file)||!html.includes(file))throw new Error('Missing static asset: '+file);}
if(!html.includes('<meta name="viewport"'))throw new Error('Missing viewport configuration');
console.log('Passed: JavaScript syntax and deployable static asset references.');
