// 1. Spread 연산자 (Python의 *와 유사)
// 객체, 배열의 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    c: 1,
    ...obj1,
    d: 2
};
console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}
funcA(...arr1)

// 2. Rest 매개변수
// 나머지 매개변수 -> 배열 형태로 한 번에 매개변수를 받기

function funcB(one, ...rest) {
    console.log(one);
    console.log(rest);
}
funcB(...arr1);

// rest 매개변수 뒤에는 추가로 매개변수를 선언할 수 없음
