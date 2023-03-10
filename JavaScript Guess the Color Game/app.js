let headerBgColor = document.getElementById("header-bg");
let boxes = document.getElementById("boxes");
let easyBtn = document.getElementById("easy-btn");
let hardBtn = document.getElementById("hard-btn");
let newColorBtn = document.getElementById("new-color");
let playAgainBtn = document.getElementById("play-again");
let message = document.getElementById("message");

let boxLength = 3;

// Create Dynamic Box
function createBox(randomColor) {
  boxes.innerHTML +=
    /*html*/
    `<div onclick="selectedBox(this)" data-rgb-color="${randomColor}" class="bg-[${randomColor}] border-2 h-48 w-48 cursor-pointer rounded-3xl text-center">
      ${randomColor}
    </div>`;
}

// Create Dynamic color
let arry = [];
dynamicBoxes();
function dynamicBoxes(correctColor = null) {
  arry.length = 0; // Reset array previous value
  for (let i = 0; i < boxLength; i++) {
    let randomColor;
    if (correctColor) {
      randomColor = correctColor;
    } else {
      randomColor = getRandomRGBColor();
    }
    arry.push(randomColor);
    createBox(randomColor);
  }
}
let randomArryItem;
function arryItem() {
  randomArryItem = arry[Math.floor(Math.random() * arry.length)];
}

arryItem();

guessingColor();
function guessingColor() {
  // Show background color dynamically
  let bgColor =
    /*html*/
    `<div class="text-white text-4xl uppercase text-center p-8">
      <h1>THE GREAT</h1>
      <h1 class="text-6xl py-3 font-bold">${randomArryItem}</h1>
      <h1>GUESSING GAME</h1>
    </div>`;

  headerBgColor.innerHTML = bgColor;
}

function selectedBox(e) {
  if (randomArryItem === e.dataset.rgbColor) {
    headerBgColor.classList.remove("bg-gray-500");
    headerBgColor.classList.add(`bg-[${randomArryItem}]`);
    message.innerHTML = `Correct`;
    newColorBtn.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");
    boxes.innerHTML = "";
    dynamicBoxes(randomArryItem);
  } else {
    e.classList.add("opacity-0");
    message.innerHTML = `Try Again`;
  }
}

// Create Random color
function getRandomRGBColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

// Easy Button
easyBtn.addEventListener("click", () => {
  hardBtn.classList.remove("bg-green-800");
  easyBtn.classList.add("bg-green-800");
  hardBtn.classList.remove("text-white");
  easyBtn.classList.add("text-white");
  boxes.innerHTML = "";
  boxLength = 3;
  dynamicBoxes();
  arryItem();
  guessingColor();
});

// Hard Button
hardBtn.addEventListener("click", () => {
  easyBtn.classList.remove("bg-green-800");
  hardBtn.classList.add("bg-green-800");
  easyBtn.classList.remove("text-white");
  hardBtn.classList.add("text-white");
  boxes.innerHTML = "";
  boxLength = 6;
  dynamicBoxes();
  arryItem();
  guessingColor();
});

// New Color
newColorBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
  dynamicBoxes();
  arryItem();
  guessingColor();
});

// Play Again
playAgainBtn.addEventListener("click", () => {
  location.reload();
});
