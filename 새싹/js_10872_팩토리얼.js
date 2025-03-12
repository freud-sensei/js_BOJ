const N = Number(require('fs').readFileSync(process.platform == "linux" ? 0 : './input.txt').toString().trim());
let result = 1;

for (let i = 1; i <= N; i++) {
    result *= i;
}

console.log(result);