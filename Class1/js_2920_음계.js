const notes = require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim();

// JS에서 객체 간 비교는, 메모리 상의 주소를 기준으로 비교됨. 배열도 객체의 일종.
// notes === [1, 2, 3, 4, 5, 6, 7, 8]로 비교 시, 두 배열의 메모리 주소는 다름.
// 즉 배열에 담긴 값이 동일하더라도 false가 뜸.
// 따라서 메모리주소 기반으로 비교하는 배열이 아니라, 값 기준으로 비교하는 문자열을 사용.

switch (notes) {
    case "1 2 3 4 5 6 7 8": {
        console.log("ascending");
        break;
    }

    case "8 7 6 5 4 3 2 1": {
        console.log("descending");
        break;
    }

    default: {
        console.log("mixed");
        break;
    }
} 
