const [A, B] = require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim().split(" ").map(Number);

function calc(A, B) {
    return (A + B) * (A - B);
}

console.log(calc(A, B));