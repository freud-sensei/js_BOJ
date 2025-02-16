// 1. 형 변환

// 문자열 -> 숫자
let str1 = "15"
console.log(Number(str1) + 10);
let str2 = "15개"
console.log(parseInt(str2));
console.log("-------------")

// 숫자 -> 문자열
let num = 15
console.log(String(num) + "살입니다");

// 2. 연산자

// 나눗셈 몫 및 나머지 연산
let div1 = Math.floor(13 / 2);
let div2 = 13 % 2;
console.log(div1, div2);
console.log("------------")

// null 병합 연산자
console.log(null ?? 13);
console.log(15 ?? null);
console.log("-------------")

// 삼항 연산자
let check = 15;
let answer = check >= 10 ? "yes" : "no";
console.log(answer);
console.log("-------------")

// 3. 조건문

// switch 조건문
let animal = "doggie";
let animal_ans;

switch (animal) {
    case "dog": {
        animal_ans = "멍멍";
        break;
    }
    case "cat": {
        animal_ans = "야옹";
        break;
    }
    case "hamster": {
        animal_ans = "햄햄";
        break;
    }
    default: {
        animal_ans = "몰라요";
        break;
    }
}

console.log(animal_ans);

// 4. 함수 표현식

// 함수 표현식
let add1 = function (a, b) {
    return a + b;
};
console.log(add1(1, 10));

// 화살표 함수
let add2 = (a, b) => a + b;
console.log(add2(3, 6));

// 5. 콜백 함수

// 6. 스코프

// 함수 내 함수, 반복문/조건문 내 함수의 스코프는?

// 7. 객체

// 메서드