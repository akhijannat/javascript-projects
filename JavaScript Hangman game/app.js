let alphabet = document.getElementById("alphabet");
let holdItem = document.getElementById("hold");
let myLives = document.getElementById("my-lives");
let clue = document.getElementById("clue");
let hint = document.getElementById("hint");
let playAgain = document.getElementById("play-again");

// Create alphabet
let alphabets = [...Array(26)].map((x, i) => String.fromCharCode(i + 97));
let alphaIndex = alphabets.forEach((alpha) => {
  alphabet.innerHTML += /*html*/ `<div onclick="checkAlphabet(this)" class="bg-white text-green-600 py-2 px-3 rounded cursor-pointer">${alpha}</div>`;
});

// Category Array Items
let categories = {
  Dhaka: [
    "dhaka",
    "gazipur",
    "kishoreganj",
    "munshiganj",
    "narayanganj",
    "narsingdi",
    "tangail",
  ],
  Barisal: [
    "barisal",
    "barguna",
    "bhola",
    "jhalokati",
    "patuakhali",
    "pirojpur",
  ],
  Khulna: [
    "khulna",
    "bagerhat",
    "chaudanga",
    "jashore",
    "jhenaidah",
    "kushita",
    "magura",
  ],
};
// Get array item randomly from categories object
let keys = Object.keys(categories);
let index = Math.floor(keys.length * Math.random());
let key = keys[index];
let value = categories[key];

// Get random item from selected array
let childArrayItem = value[Math.floor(Math.random() * value.length)].split("");

console.log(childArrayItem);

// Generating dashes equivalent to selected array item
let dashes = childArrayItem.map(() => "_");
renderDashes();

// Rendering dashes in DOM
function renderDashes() {
  holdItem.innerHTML = dashes.join(" ");
}

// Lives
let lives = 10;
myLives.innerHTML = `You have ${lives} lives`;

//
function checkAlphabet(e) {
  let selectedAlphabet = e.innerHTML;
  if (childArrayItem.includes(selectedAlphabet)) {
    let matchedItemIndexNum = childArrayItem.indexOf(selectedAlphabet);

    dashes[matchedItemIndexNum] = selectedAlphabet;
    renderDashes();

    childArrayItem[matchedItemIndexNum] = "#";
  } else {
    lives = Math.max(0, lives - 1);
    myLives.innerHTML = `You have ${lives} lives`;
    e.classList.add("in-active");
  }
}

// Play Again Button
playAgain.addEventListener("click", () => {
  location.reload();
});
