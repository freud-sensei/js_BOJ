// 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소만 필터링

let arr1 = [
    { name: "송상록", hobby: "크로스핏" },
    { name: "김민국", hobby: "크로스핏" },
    { name: "최혁", hobby: "재무관리" }
];

const crossPeople = arr1.filter((item, idx, arr) => item.hobby === "크로스핏");

console.log(crossPeople);

// 2. map
// 배열의 모든 요소를 순회하며, 각각 콜백함수를 실행하고
// 그 반환값을 모아 (**새로운 배열로 반환**)
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => item * 2);
console.log(mapResult1);

let names = arr1.map((i) => i.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

let arr4 = [10, 3, 5];
arr4.sort();
console.log(arr4); // [10, 3, 5] - '사전 순'
arr4.sort((a, b) => {
    if (a > b) {
        // b가 a 앞에 와라
        return 1;
    } else if (b > a) {
        // a가 b 앞에 와라
        return -1;
    } else {
        // 자리를 바꾸지 마라
        return 0;
    }
});
console.log(arr4);

arr4.sort((a, b) => {
    if (a > b) {
        // a가 b 앞에 와라
        return -1;
    } else if (b > a) {
        // b가 a 앞에 와라
        return 1;
    } else {
        // 자리를 바꾸지 마라
        return 0;
    }
});

console.log(arr4);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
console.log(arr5); // 그대로
console.log(sorted); // 반환

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "i'm", "상록"];
const joined = arr6.join(" "); // (기본은 ,)
console.log(joined);