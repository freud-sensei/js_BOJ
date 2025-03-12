const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().split("\n").map(line => line.trim());

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const [R, S] = input[i].split(" ");
    const answer = [];
    for (let letter of S) {
        // 각 문자열을 R번 반복 후 배열에 저장
        answer.push(letter.repeat(Number(R)));
    }
    // 배열을 문자열로 join
    console.log(answer.join(""));
}