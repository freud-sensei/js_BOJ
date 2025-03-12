const input = require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim().split("\n");

const T = Number(input[0]);
const answer = [];

for (let i = 1; i <= T; i++) {
    const [A, B] = input[i].split(" ").map(Number);
    // const를 사용할 수 있는 이유
    // 변수 자체가 아닌, array의 값의 변경만 진행하기 때문에

    answer.push((A + B).toString());
}

console.log(answer.join("\n"));
