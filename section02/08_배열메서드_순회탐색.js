// 배열 순회, 탐색 메서드

// 1. forEach
// 모든 요소를 순회하며, 각 요소에 특정 동작을 수행
let arr1 = [1, 2, 3];
arr1.forEach((item, idx, arr) => {
    console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
})
console.log(doubledArr);
console.log();

// 2. includes
// 배열에 특정 요소가 있는지 확인
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
console.log(isInclude);
console.log();

// 3. indexOf
// 특정 요소의 index(위치)를 찾아서 반환
let arr3 = [1, 2, 2, 3];
let index = arr3.indexOf(2);
console.log(index);
console.log(arr3.indexOf(5)); // 존재하지 않을 시 -1
console.log();

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 요소의 index(위치)를 찾아서 반환
let arr4 = [1, 2, 3];
const foundIndex = arr4.findIndex(
    (item) => item % 2 === 0
);
console.log(foundIndex);

// 객체 타입으로 구성된 배열의 index를 찾을 땐, indexOf(얕은 비교로 동작) 사용 불가. findIndex 써야함
let objectArr = [
    { name: "이정환" },
    { name: "홍길동" }
];
console.log(objectArr.findIndex((i, index, arr) => i.name === "이정환"));
console.log();

// 5. find
// 모든 요소를 순회하면서, 콜백함수를 만족하는 요소를 찾아서 반환
console.log(objectArr.find((item, index, arr) => item.name === "이정환"));