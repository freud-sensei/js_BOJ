const year = Number(require('fs')
    .readFileSync(process.platform === 'linux' ? 0 : './input.txt', 'utf-8')
    .toString()
    .trim())


if (year % 400 === 0) {
    console.log(1);
} else if (year % 100 == 0) {
    console.log(0);
} else if (year % 4 == 0) {
    console.log(1);
} else {
    console.log(0);
}