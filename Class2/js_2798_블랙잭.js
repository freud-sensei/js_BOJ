const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
        for (let k = j + 1; k < N; k++) {
            let result = cards[i] + cards[j] + cards[k];

            if (result <= M && result > answer) {
                answer = result;
            }
        }
    }
}

console.log(answer);