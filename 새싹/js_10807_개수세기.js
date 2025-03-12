const input = require('fs').readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const v = Number(input[2]);
const result = nums.filter((i) => i === v);

console.log(result.length);