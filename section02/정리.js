// 1. 단락 평가
// truthy, falsy한 값을 단락 평가에 사용하기
console.log(5 || 0); // 앞의 값, 5
console.log(5 && 0); // 뒤의 값, 0
console.log(0 || 5); // 뒤의 값, 5
console.log(0 && 5); // 앞의 값, 0
console.log("----")

// 2. 구조분해 할당
// 객체 및 배열
let person = {
    name: "송상록",
    hobby: "programming",
    age: 24
};

let { name, hobby: activity, age, color = "yellow" } = person;
console.log(name, activity, age, color);
console.log("----")

const func = ({ name, age: year, hobby, extra = 100 }) => {
    console.log(name, year, hobby, extra);
};
func(person);
console.log("-----");

// 3. Spread(인수에 적용), Rest(매개변수에 적용) 연산자
function funcA(p1, p2, p3) {
    console.log(p1 + p2 + p3);
}

let arrayA = [1, 3, 5];
funcA(...arrayA);

function funcB(...array) {
    console.log(array);
}
funcB(1, 3, 5);
console.log("-----");

// 4. 객체 순회
for (let key of Object.keys(person)) {
    console.log(key);
}

for (let value of Object.values(person)) {
    console.log(value);
}

for (let key in person) {
    console.log(key, person[key]);
}

console.log("-----");

// 5. 배열 메서드
// push, pop, shift, unshift, slice, concat
// forEach, includes, indexOf, findIndex, find
// filter, map, sort,
let arr1 = [1, 2, 3];
console.log(arr1.push(5));
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);
console.log(arr1.unshift(13));
console.log(arr1);
console.log(arr1.slice(0, -1));
console.log(arr1.concat([2, 3]));

arr1.forEach((item, idx, arr) => {
    console.log(idx, item * 2);
})

console.log(arr1.includes(13));
console.log(arr1.indexOf(13));
console.log(arr1.findIndex((item, idx, arr) => item === 3))
console.log(arr1.find((item, idx, arr) => item > 10));
console.log(arr1.filter((item, index, arr) => item > 2));
console.log(arr1.map((item, idx, arr) => item * 2));
arr1.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
});
console.log(arr1);
console.log(arr1.toSorted((a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}));
console.log(["안녕", "나는", "천재야"].join(" "));