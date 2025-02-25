const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
    const [H, W, N] = input[i].split(" ").map(Number);

    // 층: (손님 번호) / (층 수)의 나머지
    // 나머지가 0이면 H층
    const floor = N % H || H;

    // 호: (손님 번호) / (층 수)를 올림
    const room = Math.ceil(N / H);

    console.log(floor * 100 + room);
}