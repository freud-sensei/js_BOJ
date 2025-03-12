const now = new Date();
let year = String(now.getFullYear());
let month = String(now.getMonth() + 1);
let date = String(now.getDate());

year = year.padStart(4, "0");
month = month.padStart(2, "0");
date = date.padStart(2, "0");

const answer = `${year}-${month}-${date}`;
console.log(answer);
