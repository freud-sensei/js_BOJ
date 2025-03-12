const input = require('fs').readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    str = input[i].trim();
    console.log(str.at(0) + str.at(-1));
}