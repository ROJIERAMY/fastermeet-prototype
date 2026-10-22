import {readFileSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {Script} from 'node:vm';
execFileSync(process.execPath,['scripts/check.mjs'],{stdio:'inherit'});
const template=readFileSync('dist/index.html','utf8');
const css=readFileSync('dist/style.css','utf8');
const js=readFileSync('dist/app.js','utf8');
const stylesheet='<link rel="stylesheet" href="style.css">';
const script='<script src="app.js"></script>';
if(!template.includes(stylesheet)||!template.includes(script))throw new Error('Missing build placeholders');
// Replacement strings interpret $ tokens, which corrupts JavaScript containing $$.
const html=template.replace(stylesheet,()=>`<style>${css}</style>`).replace(script,()=>`<script>${js}</script>`);
const embedded=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
if(embedded!==js)throw new Error('Embedded JavaScript changed during build');
new Script(embedded,{filename:'index.html'});
writeFileSync('index.html',html);
console.log('Built standalone index.html; dist/ is ready for static hosting.');
