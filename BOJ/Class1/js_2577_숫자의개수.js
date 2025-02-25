const [A, B, C] = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n").map(Number);

const result = String(A * B * C);
const count = new Array(10).fill(0);

for (let r of result) {
    count[r] += 1;
};

for (let i = 0; i <= 9; i++) {
    console.log(count[i]);
}