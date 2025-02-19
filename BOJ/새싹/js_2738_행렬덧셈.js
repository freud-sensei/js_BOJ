const input = require('fs').readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const answer = [];

for (let i = 1; i <= N; i++) {
    const result = [];
    const a_row = input[i].split(" ").map(Number);
    const b_row = input[i + N].split(" ").map(Number);

    for (let j = 0; j < M; j++) {
        result.push(a_row[j] + b_row[j]);
    }
    answer.push(result);

}

answer.forEach(row => console.log(row.join(" ")));