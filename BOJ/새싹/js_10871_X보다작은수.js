const input = require('fs').readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

const results = nums.filter((item) => item < X);
console.log(results.join(" "));
