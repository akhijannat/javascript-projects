let heading = document.querySelector(".heading");
let info = document.querySelector(".info");
let tileContainer = document.querySelector(".tile-container");
let startButton = document.getElementById("start");

let sequence = [];
let humanSequence = [];
let level = 0;

// Reset game function
function resetGame(text) {
  alert(text);
  sequence = [];
  humanSequence = [];
  level = 0;
  startButton.classList.remove("hidden");
  heading.textContent = "Simon Game";
  info.classList.add("hidden");
  tileContainer.classList.add("un-clickable");
}

// Human Turn click the human player
function humanTurn(level) {
  tileContainer.classList.remove("un-clickable");
  info.textContent = `Your turn: ${level} Tap${level > 1 ? "s" : ""}`;
}

// Activate tile function
function activateTile(color) {
  let tile = document.querySelector(`[data-tile='${color}']`);
  let sound = document.querySelector(`[data-sound='${color}']`);

  tile.classList.add("activated");
  sound.play();

  setTimeout(() => {
    tile.classList.remove("activated");
  }, 300);
}

// Play round function
function playRound(nextSequence) {
  nextSequence.forEach((color, index) => {
    setTimeout(() => {
      activateTile(color);
    }, (index + 1) * 600);
  });
}

// Next step function
function nextStep() {
  let tiles = ["orange", "red", "green", "blue"];
  let random = tiles[Math.floor(Math.random() * tiles.length)];

  return random;
}

// Next Round function
function nextRound() {
  level += 1;

  tileContainer.classList.add("un-clickable");

  info.textContent = "Wait for the computer";

  heading.textContent = `Level ${level} of 20`;

  let nextSequence = [...sequence];
  nextSequence.push(nextStep());
  playRound(nextSequence);

  sequence = [...nextSequence];
  setTimeout(() => {
    humanTurn(level);
  }, level * 600 + 1000);
}

// Handle click function
function handleClick(tile) {
  let index = humanSequence.push(tile) - 1;
  let sound = document.querySelector(`[data-sound='${tile}']`);
  sound.play();

  let remainingTaps = sequence.length - humanSequence.length;

  if (humanSequence[index] !== sequence[index]) {
    resetGame("Oops! Game over, you pressed the wrong tile");
    return;
  }

  if (humanSequence.length === sequence.length) {
    if (humanSequence.length === 20) {
      resetGame("Congrats! You completed all the levels");

      return;
    }

    humanSequence = [];
    info.textContent = "Success! Keep going!";
    setTimeout(() => {
      nextRound();
    }, 1000);
    return;
  }

  info.textContent = `Your turn: ${remainingTaps} Tap${
    remainingTaps > 1 ? "s" : ""
  }`;
}

// Click start button to start the game
function startGame() {
  startButton.classList.add("hidden");
  info.classList.remove("hidden");
  info.textContent = "Wait for the computer";
  nextRound();
}

startButton.addEventListener("click", startGame);

tileContainer.addEventListener("click", (event) => {
  let { tile } = event.target.dataset;

  if (tile) handleClick(tile);
});
