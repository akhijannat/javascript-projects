let alphabet = document.getElementById("alphabet");
let categoryTitle = document.getElementById("category-title");
let holdItem = document.getElementById("hold");
let myLives = document.getElementById("my-lives");
let clue = document.getElementById("clue");
let hint = document.getElementById("hint");
let playAgain = document.getElementById("play-again");

// Create alphabet
let alphabets = [...Array(26)].map((x, i) => String.fromCharCode(i + 97));
let alphaIndex = alphabets.forEach((alpha) => {
  alphabet.innerHTML += /*html*/ `<button onclick="checkAlphabet(this)" class="bg-white text-green-600 py-2 px-3 rounded cursor-pointer">${alpha}</button>`;
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

  if (lives === 0) {
    myLives.innerHTML = `Game Over`;
    e.setAttribute("disabled", "");
  }
}

// Generate random title
if (key === "Dhaka") {
  categoryTitle.innerHTML = `⁜ Capital city of Bangladesh ⁜`;
}

if (key === "Barisal") {
  categoryTitle.innerHTML = `⁜ Venice of Bangle ⁜`;
}

if (key === "Khulna") {
  categoryTitle.innerHTML = `⁜ Home of Tigers ⁜`;
}

// Clue Array
let clues = {
  Dhaka: {
    dhaka: "Clue for dhaka",
    gazipur: "Clue for gazipur",
    kishoreganj: "Clue for kishoreganj",
    munshiganj: "Clue for munshiganj",
    narayanganj: "Clue for narayanganj",
    narsingdi: "Clue for narsingdi",
    tangail: "Clue for tangail",
  },

  Barisal: {
    barisal: "Clue for barisal",
    barguna: "Clue for barguna",
    bhola: "Clue for bhola",
    jhalokati: "Clue for jhalokati",
    patuakhali: "Clue for patuakhali",
    pirojpur: "Clue for pirojpur",
  },
  Khulna: {
    khulna: "Clue for khulna",
    bagerhat: "Clue for bagerhat",
    chaudanga: "Clue for chaudanga",
    jashore: "Clue for jashore",
    jhenaidah: "Clue for jhenaidah",
    kushita: "Clue for kushita",
    magura: "Clue for magura",
  },
};

// Hint button
hint.addEventListener("click", () => {
  clue.innerHTML = clues[key][childArrayItem.join("")];
});

// Play Again Button
playAgain.addEventListener("click", () => {
  location.reload();
});
