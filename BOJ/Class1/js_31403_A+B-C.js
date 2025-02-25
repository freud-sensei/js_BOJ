const [A, B, C] = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n").map(Number);

// 수로 생각했을 때: 그냥 계산한다
console.log(A + B - C);

// 문자열로 생각했을 때: String으로 바꿔서 A + B 해주고 Number로 다시 바꿔서 C를 뺀다
console.log(Number(String(A) + String(B)) - C);