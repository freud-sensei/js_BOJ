const [N, M] = require('fs').readFileSync(process.platform === 'linux' ? 0 : './input.txt').toString().trim().split(" ").map(Number);

console.log(Math.abs(N - M))