const [A, B, C] = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

// 수로 생각했을 때
console.log(Number(A) + Number(B) - Number(C));

// 문자열로 생각했을 때
console.log(A + B);
console.log(Number(A + B));
console.log(Number(A + B) - Number(C));
console.log(A + B - C);