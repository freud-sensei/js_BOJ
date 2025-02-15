// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = Math.floor(3 / 2); // Python의 // 연산자와 동일
let num7 = (1 + 2) * 10;
console.log(num4, num5, num6, num7);
console.log("------------");

// 3. 복합 대입 연산자
let num8 = 10;
num8 += 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 20;
console.log(num8);
console.log("-----------");

// 4. 증감 연산자
// 후위 연산
let num9 = 10;
console.log(num9++); // 10
console.log(num9); // 11
console.log(num9--); // 11
console.log(num9); // 10
console.log("-----------");

// 전위 연산
let num10 = 10;
console.log(++num10); // 11
console.log(num10); // 11
console.log(--num10); // 10
console.log(num10); // 10
console.log("-----------");

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;
console.log(or, and, not)
console.log("-----------");

// 6. 비교 연산자
let comp1 = 1 == "1"; // true (자료형이 같은지는 비교하지 않음)
let comp2 = 1 === "1"; // false
let comp3 = 1 !== 2;
console.log(comp1, comp2, comp3);

let comp4 = 2 > 1;
let comp5 = 2 < 1;
console.log(comp4, comp5);

let comp6 = 2 >= 2;
let comp7 = 2 <= 2;
console.log(comp6, comp7);
console.log("-----------");

