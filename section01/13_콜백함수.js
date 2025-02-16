// 1. 콜백 함수: 자신이 아닌 다른 함수에, 인수로써 전달된 함수
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub() {
    console.log("i am sub");
}

main(sub); // "i am sub"; 여기서 sub는 콜백 함수
main(() => {
    console.log("i am sub");
});
console.log("----------------")

// 2. 콜백 함수의 활용
function repeat(count, callback) {
    for (let i = 1; i <= count; i++) {
        callback(i);
    }
}


repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
});