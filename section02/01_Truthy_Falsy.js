// Truthy / Falsy: 참, 거짓을 의미하지 않는 값도 조건문 내에서 참, 거짓으로 평가하는 특징

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // big integer, 이런게 있음

if (!f1) {
    console.log("falsy");
}

// 2. Truthy한 값
// 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => { };

if (t5) {
    console.log("truthy");
}

// 3. 활용 사례
function printName(person) {
    // null이든 undefined이든 check
    if (person) {
        console.log(person.name);
    } else {
        console.log("person의 값이 없음");
    }
}

let person;
printName(person);


