let cells = document.querySelectorAll(".cell");
let playAgain = document.getElementById("play-again");
let massage = document.getElementById("massage");

let humanPlayer = "0";
let aiPlayer = "X";
let winingCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < cells.length; i++) {
  selectedPlayer = aiPlayer;
  cells[i].addEventListener("click", () => {
    if (selectedPlayer === aiPlayer) {
      selectedPlayer = humanPlayer;
    } else {
      selectedPlayer = aiPlayer;
    }

    cells[i].innerHTML = selectedPlayer;
    cells[i].style.pointerEvents = "none";
    wining(selectedPlayer);

    let nodeListToArray = Array.from(cells);
    let checkEmpty = nodeListToArray.every((i) => i.innerHTML !== "");

    if (checkEmpty) {
      massage.classList.remove("hidden");
      massage.innerHTML = "Game Tie";
    }
  });
}

function wining(player) {
  winingCombination.forEach((items) => {
    let checkedPlayer = items.every((item) => cells[item].innerHTML == player);

    if (checkedPlayer) {
      if (player === humanPlayer) {
        massage.classList.remove("hidden");
        massage.innerHTML = "I'm Win";
      } else if (player === aiPlayer) {
        massage.classList.remove("hidden");
        massage.innerHTML = "I'm Lose";
      }

      cells.forEach((e) => {
        e.style.pointerEvents = "none";
      });
    }
  });
}

playAgain.addEventListener("click", () => {
  location.reload();
});
