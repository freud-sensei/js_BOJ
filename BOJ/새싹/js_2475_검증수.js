const nums = require('fs').readFileSync(process.platform == "linux" ? 0 : './input.txt').toString().trim().split(" ").map(Number);

function check(nums) {
    let result = 0
    for (let i = 0; i < 5; i++) {
        result += nums[i] ** 2;
    }
    return result % 10;
}

console.log(check(nums));