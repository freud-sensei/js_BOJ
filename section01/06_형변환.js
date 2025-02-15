// 1. 묵시적 형 변환
// JS 엔진이 자동으로 형 변환
let num = 10;
let str = '20';
const result = num + str;
console.log(result, typeof result);
// num이 덧셈 과정에서 number에서 string으로 형 변환

// 2. 명시적 형 변환
// 내장 함수를 이용해서 직접 형 변환을 명시

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2); // 숫자만 포함되지 않은 문자열
console.log(strToNum2); // NaN

// 숫자 -> 문자열
let num1 = 10;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");


