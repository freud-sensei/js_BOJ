const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const result = input[i];
    let answer = 0; // 최종 점수
    let current = 1; // 현재 문제를 맞출 때 얻을 수 있는 점수

    // 각 문제의 O, X 여부 순회
    for (let r of result) {
        switch (r) {
            case "O": {
                answer += current; // 점수 증가
                current++; // 다음문제 점수 1점 증가
                break;
            }
            case "X": {
                current = 1; // 점수 1점으로 리셋
                break;
            }
        }
    }

    console.log(answer);
}