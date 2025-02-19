// 단락 평가 (short circuit evaluation)
// &&, || 등 논리연산자에서 첫 값만으로 확정되는 경우

function returnFalse() {
    console.log("false 함수");
    return undefined; // falsy
}

function returnTrue() {
    console.log("true 함수");
    return 10; // truthy
}

console.log(returnFalse() && returnTrue());
// returnFalse만 호출 -> 이쪽만 false여도 연산 결과는 false 확정
console.log(returnTrue() && returnFalse());
// 양쪽 다 호출해야 함

console.log(returnTrue() || returnFalse());
// returnTrue만 호출 -> 이쪽만 true여도 연산 결과는 true 확정
console.log(returnFalse() || returnTrue());
// 양쪽 다 호출해야 함

// 논리 연산자에 Truthy / Falsy 한 값이 사용된 경우, 연산 결과가 값 자체가 되어 버림

console.log("------------")

// 단락 평가의 활용 사례
function printName(person) {
    const name = person && person.name
    // person이 undefined인 경우, person.name까지 안 가고 바로 undefined
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });

// truthy || truthy인 경우 첫째 값
// truthy && truthy인 경우 둘째 값
// 이건 Python에서도 마찬가지임.