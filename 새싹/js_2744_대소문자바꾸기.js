const input = require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim();

const result = []

for (let i = 0; i < input.length; i++) {
    str = input[i];
    if (str === str.toUpperCase()) {
        result.push(str.toLowerCase());
    } else {
        result.push(str.toUpperCase());
    }
}

console.log(result.join(""));