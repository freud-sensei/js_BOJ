const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);

// 최솟값, 최댓값
// spread 연산자 써야 한다
console.log(Math.min(...nums), Math.max(...nums));