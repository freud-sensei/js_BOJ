const [H, M] = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split(" ").map(Number);

// 원래 시간을 45분 앞서는 시간으로 바꾸기
// 조건문 사용
if (M >= 45) {
    console.log(H, M - 45);
} else if (H === 0) {
    console.log(23, M + 15);
} else {
    console.log(H - 1, M + 15);
}