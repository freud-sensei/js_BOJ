const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
    const sides = input[i].split(" ").map(Number);

    // 작은 길이 -> 큰 길이 순으로 변을 정렬.
    sides.sort((a, b) => a - b);

    // 피타고라스 공식 만족하는지 확인.
    if (sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2) {
        console.log("right");
    } else {
        console.log("wrong");
    };
}