const [x, y] = require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim()
    .split("\n");


if (x > 0 & y > 0) {
    console.log(1);
} else if (x < 0 & y > 0) {
    console.log(2);
} else if (x < 0 & y < 0) {
    console.log(3);
} else {
    console.log(4);
}