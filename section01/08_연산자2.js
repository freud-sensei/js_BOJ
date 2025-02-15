// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 기능

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5); // 20

// 둘 다 null, undefined가 아닌 경우 첫 값
let var6 = var3 ?? var2;
console.log(var6); // 10 

let userName;
let userNickName = "strawberry";
let displayName = userName ?? userNickName;
console.log(displayName); // strawberry

console.log("-----------");

// 2. typeof 연산자
// 값의 타입을 문자열로 변환

let var7 = 1;
var7 = true;
console.log(typeof var7); // boolean

let t1 = typeof var7;
console.log(t1, typeof t1); // boolean string

// 3. 삼항 연산자 - 항을 3개 사용
// 조건식을 이용해 참, 거짓일 때 값을 다르게 반환
let var8 = 10;

// 조건식 ? 참일 때 반환 : 거짓일 때 반환
let result = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(result); // 짝수
