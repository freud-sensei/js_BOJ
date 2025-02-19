// 배열 요소 조작 메서드

// push - 맨 뒤에 요소를 추가하고, 배열의 길이 반환
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
const newLength = arr1.push(5, 6, 7);
console.log(arr1);
console.log(newLength); // 변경된 배열의 길이
console.log();

// pop - 맨 뒤의 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const pItem = arr2.pop();
console.log(pItem);
console.log(arr2);
console.log();

// shift - 맨 앞의 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const sItem = arr3.shift();
console.log(sItem);
console.log(arr3);
console.log();

// unshift - 맨 앞에 요소를 추가하고, 배열의 길이 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(arr4);
console.log(newLength2);
console.log();
// shift, unshift는 push, pop보단 느리게 동작

// slice - 배열의 특정 범위를 잘라내 반환
let arr5 = [1, 2, 3, 4, 5];
const sliced1 = arr5.slice(2, 5);
const sliced2 = arr5.slice(3);
const sliced3 = arr5.slice(-1);
console.log(sliced1);
console.log(sliced2);
console.log(sliced3);

// concat - 두 배열을 이어 붙여서 새로운 배열 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatArr = arr6.concat(arr7);
console.log(concatArr);
