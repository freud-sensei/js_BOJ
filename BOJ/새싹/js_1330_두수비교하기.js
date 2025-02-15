const [A, B] = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

if (A > B) {
    console.log(">");
} else if (A < B) {
    console.log("<");
} else {
    console.log("==");
}