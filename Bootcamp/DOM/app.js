const p1 = {
  points: 0,
  button: document.querySelector("#p1Button"),
  score: document.querySelector("#p1Score"),
};

const p2 = {
  points: 0,
  button: document.querySelector("#p2Button"),
  score: document.querySelector("#p2Score"),
};

const vSelect = document.querySelector("#vScore");

let vScore = 5;
let gameOver = false;

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});
p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

vSelect.addEventListener("change", function () {
  vScore = parseInt(this.value);
  resetGame();
});

reset.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  gameOver = false;
  for (let p of [p1, p2]) {
    p.points = 0;
    p.score.innerText = 0;
    p.score.classList.remove("has-text-success", "has-text-danger");
    p.score.disabled = false;
  }
}

function updateScore(player, opponent) {
  if (!gameOver) {
    player.points++;
    player.score.innerText = player.points; // 그냥 Number여도 되는 것 같음
    if (player.points >= vScore) {
      gameOver = true;
      player.score.classList.add("has-text-success");
      opponent.score.classList.add("has-text-danger");
      player.score.disabled = true;
      opponent.score.disabled = true;
    }
  }
}
