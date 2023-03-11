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
    `<div 
      onclick="checkingGuess(this)" 
      data-rgb-color="${randomColor}" 
      class="bg-[${randomColor}] border-2 h-48 w-48 cursor-pointer rounded-3xl text-center"
    ></div>`;
}

// Create Random color
function getRandomRGBColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

// Create Dynamic color Boxes
let colorsArray = []; // define array to store all colors
dynamicBoxes(); //call this to generate default color boxes
function dynamicBoxes(correctColor = null) {
  colorsArray.length = 0; // Reset array previous value

  for (let i = 0; i < boxLength; i++) {
    let randomColor;

    if (correctColor) {
      randomColor = correctColor;
    } else {
      randomColor = getRandomRGBColor();
    }

    colorsArray.push(randomColor); //adding color to colors Array
    createBox(randomColor); // generating color boxes on demand
  }
}

/**
 * selecting random color item from color boxes
 * to match user guessing color
 */
let randomColorFromColorsArray;
getARandomColorFromColorsArray();
function getARandomColorFromColorsArray() {
  randomColorFromColorsArray =
    colorsArray[Math.floor(Math.random() * colorsArray.length)];
}

/**
 * rendering top header section
 * showing selected random color code in RGB
 */
headerSection();
function headerSection() {
  headerBgColor.innerHTML =
    /*html*/
    `<div class="text-white text-4xl uppercase text-center p-8">
      <h1>THE GREAT</h1>
      <h1 class="text-6xl py-3 font-bold">${randomColorFromColorsArray}</h1>
      <h1>GUESSING GAME</h1>
    </div>`;
}

/**
 * checking users guess
 * render feedback
 * @param {this or current div} element
 */
function checkingGuess(element) {
  /**
   * matching user's guess with the selected random color
   */
  if (randomColorFromColorsArray === element.dataset.rgbColor) {
    // changing background color in header section
    headerBgColor.classList.remove("bg-gray-500");
    headerBgColor.classList.add(`bg-[${randomColorFromColorsArray}]`);

    // updating related buttons and message
    message.innerHTML = `Correct`;
    newColorBtn.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");

    // updating color of boxes
    boxes.innerHTML = "";
    dynamicBoxes(randomColorFromColorsArray);
  } else {
    /**
     * if user's guess wrong
     * hide that box
     * updating message
     */
    element.classList.add("opacity-0");
    message.innerHTML = `Try Again`;
  }
}

// Easy Button
easyBtn.addEventListener("click", () => {
  hardBtn.classList.remove("bg-green-800");
  easyBtn.classList.add("bg-green-800");
  hardBtn.classList.remove("text-white");
  easyBtn.classList.add("text-white");

  boxes.innerHTML = ""; // reset color boxes
  boxLength = 3; // color boxes amount
  dynamicBoxes(); // rendering boxes
  getARandomColorFromColorsArray(); // selecting random color item from color boxes
  headerSection(); // updating header section
});

// Hard Button
hardBtn.addEventListener("click", () => {
  easyBtn.classList.remove("bg-green-800");
  hardBtn.classList.add("bg-green-800");
  easyBtn.classList.remove("text-white");
  hardBtn.classList.add("text-white");

  boxes.innerHTML = ""; // reset color boxes
  boxLength = 6; // color boxes amount
  dynamicBoxes(); // rendering boxes
  getARandomColorFromColorsArray(); // selecting random color item from color boxes
  headerSection(); // updating header section
});

// New Color
newColorBtn.addEventListener("click", () => {
  boxes.innerHTML = ""; // reset color boxes
  dynamicBoxes(); // rendering boxes
  getARandomColorFromColorsArray(); // selecting random color item from color boxes
  headerSection(); // updating header section
});

// Play Again
playAgainBtn.addEventListener("click", () => {
  location.reload();
});
