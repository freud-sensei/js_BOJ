// 1. Date 객체를 생성하는 법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("2000-07-22");
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 UTC부터 몇 ms가 지났는지를 의미
let ts1 = date1.getTime(); // 타임스탬프 return
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);

// 3. 시간 요소들을 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 0부터 시작
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(10); // 0부터 시작
date1.setDate(13);
date1.setHours(21);
date1.setMinutes(25);
date1.setSeconds(0);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());