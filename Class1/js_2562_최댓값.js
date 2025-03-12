const nums = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

console.log(Math.max(...nums));
console.log(Math.min(...nums)); c