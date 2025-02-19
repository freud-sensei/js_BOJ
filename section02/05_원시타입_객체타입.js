// 원시 타입: 값 자체로써 변수에 저장되고 복사됨
// 메모리 값이 수정될 수 없음 (불변값)
// (number, string, boolean)

// 객체 타입: 참조값(주소값)을 통해 변수에 저장되고 복사됨
// 메모리 값이 수정될 수 있음 (가변값)
// (object, array, function)

let o1 = { name: "이정환" };
let o3 = { ...o1 }; // 깊은 복사를 수행해야 원본 객체가 수정되지 않음
let o2 = o1; //얕은 복사는 참조값을 복사, 원본 객체가 수정될 수 있음

// 객체 간 비교는 참조값 기준으로 이루어짐
console.log(o1 === o2); // true
console.log(o1 === o3); // false, 참조값이 다름
console.log(JSON.stringify(o1) === JSON.stringify(o3)); // true

// 배열과 함수도 사실 객체이다
