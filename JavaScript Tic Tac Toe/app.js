let restart = document.getElementById("restart");
let gameBox = document.getElementsByClassName("game-box");

let selectedSymbol = "X";

let personOne = [];
let personTwo = [];

for (let i = 0; i < gameBox.length; i++) {
  gameBox[i].addEventListener("click", () => {
    if (selectedSymbol === "X") {
      selectedSymbol = "0";
      personOne.push(gameBox[i].dataset.number);
    } else {
      selectedSymbol = "X";
      personTwo.push(gameBox[i].dataset.number);
    }

    gameBox[i].innerHTML = selectedSymbol;
  });
}

let wining = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// checkWin();
// function checkWin() {
//   for (let i = 0; i < wining.length; i++) {
//     console.log(wining[i]);
//   }
// }

// Restart Button
restart.addEventListener("click", () => {
  location.reload();
});