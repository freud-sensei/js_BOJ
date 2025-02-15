// 변수와 상수
console.log("chapter 4");

// 1. 변수
let age = 27;
console.log(age);

age = 30;
console.log(age);

// let age = 40; (let은 변수 중복 선언할 수 없음)

// 2. 상수
const birth = '2000.07.22';
// birth = '123' (상수는 선언 이후 값을 변경할 수 없음)

// 3. 변수 명명 규칙(네이밍 규칙)
// 3-1. 변수명에는 $, _를 제외한 기호를 사용할 수 없다.
let $name = '송상록';

// 3-2. 숫자로 시작하는 변수명을 사용할 수 없다.
let name1;
let _2name;

// 3-3. 예약어를 변수명으로 사용할 수 없다.
// let let;
// let if;

// 4. 변수 명명 가이드
let salesCount = 100;
let refundCount = 50;
let totalSalesCount = salesCount - refundCount;
console.log(totalSalesCount)