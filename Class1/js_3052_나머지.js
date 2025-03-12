const nums = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n").map(Number);

// Set 객체 사용: 중복된 값을 허용하지 않음
const remainder = new Set();

// Set에 값 추가
for (let n of nums) {
    remainder.add(n % 42);
}

// Set의 길이 확인
console.log(remainder.size);