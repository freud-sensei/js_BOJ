// 스코프
// 전역 스코프: 해당 변수는 전체 영역에서 접근 가능
// 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);

    // 함수 내 함수 역시 지역 스코프
    // 단, 반복 및 조건문 내 함수는 지역 스코프 아님 
    function funcB() { }

}

funcA();
// console.log(b); b is not defined

if (true) {
    let c = 1; // 지역 스코프
}

for (let i = 0; i < 10; i++) {
    let d = 1; // 지역 스코프
}