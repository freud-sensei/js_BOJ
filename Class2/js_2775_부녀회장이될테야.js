const input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input[0];
const memo = {};

// k층 n호의 사람 수를 memo 객체에 저장해 두고, 그 값을 반환함
// 왜? 이미 계산해 둔 값을 다시 계산하지 않아도 됨
function numPeople(k, n) {
  const key = `${k}층 ${n}호`;
  if (!(key in memo)) {
    if (k == 0) {
      // 0층의 경우 n명의 사람이 산다
      memo[key] = n;
    } else {
      // 1층 이상인 경우 k-1층의 1호부터 n호까지 사람들의 합으로 계산한다
      let count = 0;
      for (let i = 1; i <= n; i++) {
        count += numPeople(k - 1, i);
      }
      memo[key] = count;
    }
  }
  return memo[key];
}

for (let i = 0; i < T; i++) {
  const k = input[2 * i + 1];
  const n = input[2 * i + 2];
  console.log(numPeople(k, n));
}
