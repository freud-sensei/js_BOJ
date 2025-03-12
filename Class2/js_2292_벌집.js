const N = Number(require("fs").readFileSync(process.platform === "linux" ? 0 : "./input.txt").toString().trim());

// 1번 방: 1개
// 2번-7번 방: 2개 (1 + 6 * 1 = 7)
// 8번-19번 방: 3개 (7 + 6 * 2 = 19)
// 20번-37번 방: 4개 (19 + 6 * 3 = 37)
// ....

// rooms: 이동한 방의 수 
// max_number: rooms만큼 방을 이동했을 때, 갈 수 있는 최대 방 번호
let rooms = 1;
let max_number = 1;

// rooms를 1씩 증가시킴
while (true) {
    // (N)번째 방까지 도착하는데 (rooms)개 방을 지남이 확인될 때
    if (N <= max_number) {
        console.log(rooms);
        break;
    }
    max_number += 6 * rooms;
    rooms++;
}