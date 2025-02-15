// 함수 선언

function greeting() {
    console.log("안녕하세요");
}

console.log("호출 전");
greeting();
console.log("호출 후");

console.log("---------");

console.log(getArea(10, 20));
// 인수 10, 20은 매개변수 width, height에 저장됨
console.log(getArea(30, 20));

// 함수 (호이스팅 - 하단에 작성해도 됨)
function getArea(width, height) {
    // 함수 내부에 다른 함수를 만들 수 있음
    // 중첩 함수
    function another() {
        console.log("another");
    }
    another();

    let area = width * height;
    return area; // 반환값
}
