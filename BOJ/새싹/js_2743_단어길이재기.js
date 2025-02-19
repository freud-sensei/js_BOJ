const input = require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim();

console.log(input.length);