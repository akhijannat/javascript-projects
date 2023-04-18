let cells = document.querySelectorAll(".cell");
let endgame = document.querySelector(".endgame");
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

board();
function board() {
  for (let i = 0; i < cells.length; i++) {
    selectPlayer = aiPlayer;
    cells[i].addEventListener("click", () => {
      if (selectPlayer === aiPlayer) {
        selectPlayer = humanPlayer;
      } else {
        selectPlayer = aiPlayer;
      }

      cells[i].innerHTML = selectPlayer;
      cells[i].style.pointerEvents = "none";

      matching(selectPlayer);
    });
  }
}

function matching(player) {
  winingCombination.forEach((items) => {
    let checkedPlayer = items.every((item) => cells[item].innerHTML == player);

    if (checkedPlayer) {
      endgame.style.display = "block";
      endgame.innerHTML = player == aiPlayer ? "I'm Lose 😬" : "I'm Win 😎";

      // If win or lose all cells are block
      cells.forEach((i) => {
        i.style.pointerEvents = "none";
      });
    }

    let squareArry = Array.from(cells);

    let checkEmpty = squareArry.every(
      (squareItem) => squareItem.innerHTML != ""
    );
    if (checkEmpty && !checkedPlayer) {
      endgame.style.display = "block";
      endgame.innerHTML = "Game Tie 🤭";
    }
  });
}

function startGame() {
  location.reload();
}
