let rgb = document.getElementById("rgb");
let box = document.getElementById("box");
let easyBtn = document.getElementById("easy-btn");
let hardBtn = document.getElementById("hard-btn");
let newColorBtn = document.getElementById("new-color");
let playAgainBtn = document.getElementById("play-again");

let boxLength = 3;

// Create Dynamic color and Box
function dynamicBoxes() {
  for (let i = 0; i < boxLength; i++) {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let createBox = `<div class="bg-[#${randomColor}] h-48 w-48 cursor-pointer rounded-3xl text-center"></div>`;
    box.innerHTML += createBox;
  }
}

// Easy Button
easyBtn.addEventListener("click", () => {
  hardBtn.classList.remove("bg-green-800");
  easyBtn.classList.add("bg-green-800");
  hardBtn.classList.remove("text-white");
  easyBtn.classList.add("text-white");
  box.innerHTML = "";
  boxLength = 3;
  dynamicBoxes();
});

// Hard Button
hardBtn.addEventListener("click", () => {
  easyBtn.classList.remove("bg-green-800");
  hardBtn.classList.add("bg-green-800");
  easyBtn.classList.remove("text-white");
  hardBtn.classList.add("text-white");
  box.innerHTML = "";
  boxLength = 6;
  dynamicBoxes();
});

// New Color
newColorBtn.addEventListener("click", () => {
  box.innerHTML = "";
  dynamicBoxes();
});

// Play Again
playAgainBtn.addEventListener("click", () => {
  location.reload();
});

window.onload(dynamicBoxes());
