let alphabet = document.getElementById("alphabet");
let categoryTitle = document.getElementById("category-title");
let holdItem = document.getElementById("hold");
let myLives = document.getElementById("my-lives");
let clue = document.getElementById("clue");
let hint = document.getElementById("hint");
let playAgain = document.getElementById("play-again");

let isDisabled = false;

// Create alphabet
let alphabets = [...Array(26)].map((x, i) => String.fromCharCode(i + 97));
alphabetIndex();
function alphabetIndex() {
  alphabet.innerHTML = "";
  return alphabets.forEach((alpha) => {
    alphabet.innerHTML += /*html*/ `<button onclick="checkAlphabet(this)" ${
      isDisabled ? "disabled" : ""
    }  class="disabled:opacity-75 bg-white text-green-600 py-2 px-3 rounded cursor-pointer">${alpha}</button>`;
  });
}

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

let itemForClue = childArrayItem.join("");

// Generating dashes equivalent to selected array item
let dashes = childArrayItem.map(() => "_");
renderDashes(" ");

// Rendering dashes in DOM
function renderDashes(s) {
  holdItem.innerHTML = dashes.join(s);
}

// Lives
let lives = 10;
myLives.innerHTML = `You have ${lives} lives`;

/**
 * Match selected alphabet into category array item and show in DOM.
 * Otherwise lives minus and show an massage
 * @param {e check Alphabet, select and show in result}
 * if lives 0 then show an massage and disable the button
 * Wining massage
 */
function checkAlphabet(e) {
  let selectedAlphabet = e.innerHTML;
  if (childArrayItem.includes(selectedAlphabet)) {
    let matchedItemIndexNum = childArrayItem.indexOf(selectedAlphabet);

    dashes[matchedItemIndexNum] = selectedAlphabet;
    renderDashes(" ");

    childArrayItem[matchedItemIndexNum] = "#";
  } else {
    lives = Math.max(0, lives - 1);
    myLives.innerHTML = `You have ${lives} lives ☹`;
    e.setAttribute("disabled", "");
    hangMan();
  }

  if (lives === 0) {
    myLives.innerHTML = `Game Over 🥴`;
    isDisabled = true;
    alphabetIndex();
  }

  if (!holdItem.innerHTML.includes("_")) {
    myLives.innerHTML = `You Win 😎`;
    renderDashes("");
    holdItem.classList.add("capitalize");
  }
}

// render catagories title
if (key === "Dhaka") {
  categoryTitle.innerHTML = `⁜ Capital city of Bangladesh ⁜`;
}

if (key === "Barisal") {
  categoryTitle.innerHTML = `⁜ Venice of Bangle ⁜`;
}

if (key === "Khulna") {
  categoryTitle.innerHTML = `⁜ Home of Tigers ⁜`;
}

// Clue object
let clues = {
  Dhaka: {
    dhaka: "Hint for dhaka",
    gazipur: "Hint for gazipur",
    kishoreganj: "Hint for kishoreganj",
    munshiganj: "Hint for munshiganj",
    narayanganj: "Hint for narayanganj",
    narsingdi: "Hint for narsingdi",
    tangail: "Hint for tangail",
  },

  Barisal: {
    barisal: "Hint for barisal",
    barguna: "Hint for barguna",
    bhola: "Hint for bhola",
    jhalokati: "Hint for jhalokati",
    patuakhali: "Hint for patuakhali",
    pirojpur: "Hint for pirojpur",
  },
  Khulna: {
    khulna: "Hint for khulna",
    bagerhat: "Hint for bagerhat",
    chaudanga: "Hint for chaudanga",
    jashore: "Hint for jashore",
    jhenaidah: "Hint for jhenaidah",
    kushita: "Hint for kushita",
    magura: "Hint for magura",
  },
};

// Hint button
hint.addEventListener("click", () => {
  clue.innerHTML = clues[key][itemForClue];
});

// Play Again Button
playAgain.addEventListener("click", () => {
  location.reload();
});

// Make a Hang Man
let canvas = document.getElementById("canvas");

hangMan();
function hangMan() {
  let context = canvas.getContext("2d");

  console.log(lives);

  context.beginPath();

  // Hang Man Head
  if (lives == 5) {
    context.arc(100, 40, 15, 0, 2 * Math.PI);
  }

  // Hang Man Bottom Line
  if (lives == 9) {
    context.moveTo(20, 140);
    context.lineTo(200, 140);
  }

  // Hang Man Left Line
  if (lives == 8) {
    context.moveTo(20, 10);
    context.lineTo(20, 140);
  }

  // Hang Man Top Line
  if (lives == 7) {
    context.moveTo(20, 10);
    context.lineTo(100, 10);
  }

  // Hang Man Hang Line
  if (lives == 6) {
    context.moveTo(100, 10);
    context.lineTo(100, 25);
  }

  // Hang Man Body Line
  if (lives == 4) {
    context.moveTo(100, 55);
    context.lineTo(100, 100);
  }

  // Hang Man Left Hand
  if (lives == 3) {
    context.moveTo(100, 60);
    context.lineTo(70, 70);
  }

  // Hang Man Right Hand
  if (lives == 2) {
    context.moveTo(100, 60);
    context.lineTo(130, 70);
  }

  // Hang Man Left Leg
  if (lives == 1) {
    context.moveTo(100, 100);
    context.lineTo(70, 120);
  }

  // Hang Man Right Leg
  if (lives == 0) {
    context.moveTo(100, 100);
    context.lineTo(130, 120);
  }

  context.stroke();
}
