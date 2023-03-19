let restart = document.getElementById("restart");
let allBoxes = document.getElementById("all-boxes");
let winMassage = document.getElementById("wining-massage");
let gameBox = document.querySelectorAll(".game-box");

let selectedSymbol = "X";

let personOne = [];
let personTwo = [];

for (let i = 0; i < gameBox.length; i++) {
  gameBox[i].addEventListener("click", () => {
    if (selectedSymbol === "X") {
      selectedSymbol = "0";
    } else {
      selectedSymbol = "X";
    }
    gameBox[i].innerHTML = selectedSymbol;
    checkWin();
    gameBox[i].classList.add("pointer-events-none");
  });
}

function checkWin() {
  let wining = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [7, 4, 1],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wining.forEach((items) => {
    let zero = items.every((item) => gameBox[item].innerHTML == "0");
    if (zero) {
      winMassage.innerHTML = "zero Win";
      console.log(zero);
      allBoxes.classList.add("pointer-events-none");
    }

    let cross = items.every((item) => gameBox[item].innerHTML == "X");
    if (cross) {
      winMassage.innerHTML = "cross Win";
      allBoxes.classList.add("pointer-events-none");
    }
  });
}

// Restart Button
restart.addEventListener("click", () => {
  location.reload();
});
