const [S, i] = require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim().split("\n");

console.log(S[Number(i) - 1]);