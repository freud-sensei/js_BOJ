// N번째 줄엔 별 N개
const N = Number(require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim());

// 반복문을 통해 별 출력
// String.prototype.repeat(i)는 파이썬의 "(문자열)" * i 와 동일한 기능
for (let i = 1; i <= N; i++) {
    console.log(" ".repeat(N - i) + "*".repeat(i));
}