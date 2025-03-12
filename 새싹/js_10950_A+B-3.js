const input = require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim().split("\n");

const T = Number(input[0]);
for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    console.log(A + B);
}

