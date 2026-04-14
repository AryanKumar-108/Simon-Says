let gameSeq = [];
let userSeq = [];
let colors = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.getElementById("level");

// Start game
document.addEventListener("keydown", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});

// Level up
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = "Level " + level;

  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = colors[randomIdx];
  gameSeq.push(randomColor);

  let btn = document.getElementById(randomColor);
  flash(btn);
}

// Button flash
function flash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 300);
}

// Button click
let allBtns = document.querySelectorAll(".btn");

allBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    let color = this.id;
    userSeq.push(color);

    flash(this);
    checkAnswer(userSeq.length - 1);
  });
});

// Check answer
function checkAnswer(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = "Game Over! Press any key to restart";
    reset();
  }
}

// Reset game
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
