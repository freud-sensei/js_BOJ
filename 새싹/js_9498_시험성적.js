const score = Number(require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim());

let answer;
if (score >= 90) {
    answer = "A";
} else if (score >= 80) {
    answer = "B";
} else if (score >= 70) {
    answer = "C";
} else if (score >= 60) {
    answer = "D";
} else {
    answer = "F";
}

console.log(answer);