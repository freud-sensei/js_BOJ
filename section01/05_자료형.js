// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
console.log(1 * "hello"); // NaN

// 2. String Type
let myName = "송상록";
let myLocation = "봉천동";
let introduce = myName + " " + myLocation;
console.log(introduce)

// 템플릿 리터럴 문법 (중요)
let introduceText = `${myName}은(는) ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type (정해지지 않았다)
let name;
console.log(name);