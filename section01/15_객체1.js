// 객체(object): 여러 가지 값을 동시에 저장할 수 있음.

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "상록",
    nickname: "freud sensei",
    age: 24,
    hobby: "video games",
    extra: true,
    extra2: () => "hello",
    10: 20,
    "like cat": true,
};
// 띄어쓰기 포함 string을 객체 key로 할 땐 따옴표 필요
console.log(person);

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 / 괄호 표기법)
let name = person.name;
console.log(name); // 존재하지 않는 프로퍼티일 시 undefined

let age = person["age"];
console.log(age);

let property = "hobby"
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가
person.job = "student";
person["favorite food"] = "피짜";
console.log(person);

// 3.3 프로퍼티를 수정
person.job = "baeksook";
person['favorite food'] = '만두';
console.log(person);

// 3.4 프로퍼티를 삭제
delete person.job;
delete person["favorite food"];
console.log(person);

// 3.5 프로퍼티의 존재 유무 확인 (in 연산자)
let result1 = "hobby" in person;
let result2 = "gender" in person;
console.log(result1, result2);