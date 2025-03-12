// N: 숫자의 개수
// nums: 공백 없이 숫자 N개가 공백 없이 주어진다
const [N, nums] = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

let answer = 0;

// for문으로 nums의 각 숫자를 순회하여 정답에 더해준다.
for (let n of nums) {
    answer += Number(n);
}

console.log(answer);
