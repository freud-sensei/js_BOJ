// 거꾸로 뒤집었을때 동일한지 파악하기 위해선, 숫자가 아닌 문자열로 놔두는 게 속편함.
const input = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt")
  .toString()
  .trim()
  .split("\n");

for (let numString of input) {
  if (numString !== "0") {
    // 'abc' -> ['a', 'b', 'c'] -> ['c', 'b', 'a'] -> 'cba'
    const reversedString = numString.split("").reverse().join("");
    console.log(numString === reversedString ? "yes" : "no");
  }
}
