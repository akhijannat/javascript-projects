let rgb = document.getElementById("rgb");
let box = document.getElementById("box");
let easyBtn = document.getElementById("easy-btn");
let hardBtn = document.getElementById("hard-btn");
let newColorBtn = document.getElementById("new-color");
let playAgainBtn = document.getElementById("play-again");

let boxLength = 6;

// Create Dynamic color
let randomColor = Math.floor(Math.random() * 16777215).toString(16);

let createBox = `<div class="bg-[#${randomColor}] h-48 w-48 cursor-pointer rounded-3xl text-center">#${randomColor}</div>`;

let randomBox = Math.floor(Math.random() * boxLength);
console.log(randomBox);

for (let i = 0; i < boxLength; i++) {
  box.innerHTML += createBox;
}
