const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const max_num = Math.max(...nums);

// 각 수가 소수인지(true) 아닌지(false) 저장하는 배열.
// 인덱스는 0부터, 주어진 수 중 최대값까지. 
const isPrime = new Array(max_num + 1).fill(true);
isPrime[0] = false; // 0은 소수가 아님
isPrime[1] = false; // 1은 소수가 아님

// 에라토스테네스의 체 알고리즘 사용
for (let i = 2; i <= Math.sqrt(max_num) + 1; i++) {
    // 남은 수 중 아직 제거되지 않은 가장 작은 수 i를 찾는다.
    if (isPrime[i]) {
        // 남은 수 중에서, i 자기 자신을 제외한 i의 배수를 모두 제거한다.
        let j = 2;
        while (i * j <= max_num) {
            isPrime[i * j] = false;
            j++;
        }
    }
}

// 주어진 수들 중 소수의 개수 확인
let result = 0;
for (let num of nums) {
    if (isPrime[num]) {
        result++;
    }
}

console.log(result);