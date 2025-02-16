// 1. 상수 객체
// 상수에 저장해 놓은 객체
const animal = {
    type: "강아지",
    name: "상록",
    color: "yellow"
};
// animal = {0, 1} -> 오류

// 상수 객체여도, 객체 내 property를 조작하는 것은 얼마든지 가능
animal.age = 3; // 추가
animal.name = "녹두"; // 수정
delete animal.color; // 삭제
console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티
const person = {
    name: "치코리타",
    sayHi() {
        console.log(`안녕, 나는 치코리타야!`)
    }
}

person.sayHi();
person["sayHi"];