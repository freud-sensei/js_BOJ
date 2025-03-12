const input = require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim().split("\n");

const N = input.length;
for (let i = 0; i < N - 1; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    console.log(A + B);
}

