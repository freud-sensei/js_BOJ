const N = Number(require('fs').readFileSync(process.platform === "linux" ? 0 : './input.txt').toString().trim());

for (let i = 1; i <= 9; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
}