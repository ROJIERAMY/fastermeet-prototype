import {readFileSync,writeFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
execFileSync(process.execPath,['scripts/check.mjs'],{stdio:'inherit'});
const html=readFileSync('dist/index.html','utf8').replace('<link rel="stylesheet" href="style.css">','<style>'+readFileSync('dist/style.css','utf8')+'</style>').replace('<script src="app.js"></script>','<script>'+readFileSync('dist/app.js','utf8')+'</script>');
writeFileSync('index.html',html);
console.log('Built standalone index.html; dist/ is ready for static hosting.');
