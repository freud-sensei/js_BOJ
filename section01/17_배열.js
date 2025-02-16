// 여러 개의 값을 순차적으로 담기

// 1. 배열 생성
let arrA = new Array();
let arrB = [];
let arrC = [1, 2, 3, true, "hello", null, undefined, () => { }, {}, []]; // 뭐든 저장할 수 있지
console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0]; // 1
let item2 = arrC[1]; // 2
console.log(item1, item2);
arrC[0] = "hello";
console.log(arrC);