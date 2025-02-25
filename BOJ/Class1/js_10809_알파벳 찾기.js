const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim();

const result = [];

// 각 알파벳을 순회하며
// input 몇번째 인덱스에 알파벳이 있었는지 확인
// 그리고 result 배열에 추가
for (let i = 1; i <= 26; i++) {
    a = String.fromCharCode(97 + i);
    result.push(input.indexOf(a));
}

// 배열을 문자열로 join
console.log(result.join(" "));