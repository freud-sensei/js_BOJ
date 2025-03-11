const input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const scores = input[1].split(" ").map(Number);

// Math.max()는 배열을 받지 못한다. Spread 연산자 사용해서 여러 연산자로 나누자.
const maxScore = Math.max(...scores);
let answer = 0;

for (let score of scores) {
  // 점수를 고쳐서 더한다.
  answer += (score / maxScore) * 100;
}

// 평균을 계산한다.
console.log(answer / N);
