const input = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim();

// split하면 array가 각 단어로 구성되므로, array의 길이를 계산하면 정답.
// 단 JS는 빈 칸을 split해도 [""]로 return한다는 점에 유의할 것.
if (input === "") {
    console.log(0);
} else {
    console.log(input.split(" ").length);
}