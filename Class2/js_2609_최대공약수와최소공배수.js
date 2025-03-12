const [A, B] = require("fs")
  .readFileSync(process.platform === "linux" ? 0 : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 최대공약수
function gcd(A, B) {
  if (B === 0) {
    return A;
  }
  const R = A % B;
  return gcd(B, R);
}

// 최소공배수
function lcm(A, B, _gcd) {
  return _gcd * (A / _gcd) * (B / _gcd);
}

const gcdValue = gcd(A, B);
console.log(gcdValue);
const lcmValue = lcm(A, B, gcdValue);
console.log(lcmValue);
