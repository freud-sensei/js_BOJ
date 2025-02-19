// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("-------");

// 1.2 for of 반복문
for (let a of arr) {
    console.log(a);
}
console.log("-------");

// 2. 객체 순회
let person = {
    name: "송상록",
    age: 24,
    hobby: "게임"
};

// 2.1 Object.keys -> key 값만 뽑아서 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
    const value = person[key];
    console.log(key, value);
}
console.log("-------");

// 2.2 Object.values -> value 값만 뽑아서 배열로 반환
let values = Object.values(person);
console.log(values);

for (let value of values) {
    console.log(value);
}

// 2.3 for in 반복문
for (let key in person) {
    const value = person[key]
    console.log(key, value);
}