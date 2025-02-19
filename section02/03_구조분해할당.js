// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
    name: "송상록",
    hobby: "배도민톤",
    age: 24
};

// 순서가 아니라, key값 기준임.
let { name,
    age: myAge,
    hobby,
    extra = "hello"
} = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조분해 할당을 이용해 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra = 40 }) => {
    console.log(name, age, hobby, extra);
};
func(person);
