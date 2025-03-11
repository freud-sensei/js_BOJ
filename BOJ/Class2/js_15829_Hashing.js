const input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const L = Number(input[0]);
const letters = input[1];

// Number 타입은 최대 2^53 - 1까지 안정적으로 표현할 수 있다고 함.
// 우리는 31^50까지 가는 큰 수를 다루어야 하므로, BigInt를 사용해야 함.
let answer = BigInt(0);

// 고유 번호 * (31의 i제곱)
for (let i = 0; i < L; i++) {
  // 해당 알파벳의 아스키코드 번호 - 'a'에 해당하는 아스키코드 번호 (97) + 1
  // a는 97 - 97 + 1 = 1, b는 98 - 97 + 1 = 2, ....

  // BigInt는 BigInt끼리만 연산이 가능
  const code = letters[i].charCodeAt() - "a".charCodeAt() + 1;
  answer += BigInt(code) * BigInt(31) ** BigInt(i);
}

// BigInt는 숫자 리터럴 끝에 n을 붙여 표현
// 없애주기 위해선 다시 Number로 바꿔주면 됨
console.log(Number(answer % BigInt(1234567891)));
