const input = new Set(require('fs').readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n").map(Number));

const answer = [];

for (let i = 1; i <= 30; i++) {
    if (!input.has(i)) {
        answer.push(i);
    }
}

console.log(Math.min(...answer));
console.log(Math.max(...answer));