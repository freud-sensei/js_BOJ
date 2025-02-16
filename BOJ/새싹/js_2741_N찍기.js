const N = Number(require("fs").readFileSync(process.platform == "linux" ? 0 : './input.txt').toString().trim())

for (let i = 1; i <= N; i++) {
    console.log(i);
}