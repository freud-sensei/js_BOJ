const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const t_size = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);

// 셔츠 - 최소 몇 묶음?: (사이즈 인원 수) / (묶음 수)의 올림 값
// 사이즈별로 순회한 뒤 값 다 더하기
let result = 0;
for (let i = 0; i < 6; i++) {
    result += Math.ceil(t_size[i] / T);
}
console.log(result);

// 펜 - 최대 몇 묶음?: (인원 수) / (묶음 수)의 몫
// 그 외 한 자루씩 주문하는 펜: (인원 수) / (묶음 수)의 나머지
console.log(Math.floor(N / P), N % P);