const N = Number(require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim());

let answer = 0; // 정답을 못 찾은 경우, default 값은 0

// N의 생성자가 N 이상일 순 없으니, 그 전 값까지만 일일이 체크하기
// N은 최대 1,000,000이지만, 어차피 O(N) 이므로 문제 없음
for (let i = 1; i < N; i++) {
    let total = i;

    // 각 자리수 합을 구하기
    const string_i = String(i);
    for (let digit of string_i) {
        total += Number(digit);
    }

    // 정답을 찾은 경우 반복문 중단
    if (total === N) {
        answer = i;
        break;
    }
}

// 정답을 못 찾은 경우 0을 출력
console.log(answer);