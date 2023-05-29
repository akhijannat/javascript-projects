let cardElements = document.getElementsByClassName("game-card");
let cardElementsArray = [...cardElements];

let imgElements = document.getElementsByClassName("game-card-img");
let imgElementsArray = [...imgElements];

let starElements = document.getElementsByClassName("star");
let starElementsArray = [...starElements];

let moves;
let openedCards = [];
let matchedCards = [];

for (let i = 0; i < cardElementsArray.length; i++) {
  cardElementsArray[i].addEventListener("click", displayCard);
}

// Display the card after clicking
function displayCard() {
  this.children[0].classList.toggle("show-img");
  this.classList.toggle("open");
  this.classList.toggle("show");
  this.classList.toggle("disabled");
  cardOpen(this);
}

// Shuffle the card
function shuffle(array) {
  return array;
}

// Start the game
// wait for some milliseconds before game starts
window.onload = function () {
  setTimeout(function () {
    startGame();
  }, 1200);
};

function startGame() {
  //shuffle cards using the Fisher-Yates Shuffle function
  let shuffledImages = shuffle(imgElementsArray);
  for (i = 0; i < shuffledImages.length; i++) {
    //remove all images from previous games from each card (if any)
    cardElements[i].innerHTML = "";

    //add the shuffled images to each card
    cardElements[i].appendChild(shuffledImages[i]);
    cardElements[i].type = `${shuffledImages[i].alt}`;

    //remove all extra classes for game play
    cardElements[i].classList.remove("show", "open", "match", "disabled");
    cardElements[i].children[0].classList.remove("show-img");
  }
}

function cardOpen(card) {
  openedCards.push(card);
  let len = openedCards.length;
  if (len === 2) {
    if (openedCards[0].type === openedCards[1].type) {
      matched();
    } else {
      unmatched();
    }
  }
}

function matched() {
  openedCards[0].classList.add("match");
  openedCards[1].classList.add("match");
  openedCards[0].classList.remove("show", "open");
  openedCards[1].classList.remove("show", "open");
  matchedCards.push(openedCards[0]);
  matchedCards.push(openedCards[1]);
  openedCards = [];
}
function unmatched() {
  openedCards[0].classList.add("unmatched");
  openedCards[1].classList.add("unmatched");
  disable();
  setTimeout(function () {
    openedCards[0].classList.remove("show", "open", "unmatched");
    openedCards[1].classList.remove("show", "open", "unmatched");
    openedCards[0].children[0].classList.remove("show-img");
    openedCards[1].children[0].classList.remove("show-img");
    enable();
    openedCards = [];
  }, 1100);
}
function disable() {}

function enable() {}

function moveCounter() {
  moves++;
  counter.innerHTML = `${moves} move(s)`;

  if (moves == 1) {
  }

  //setting rating based on moves
  if (moves > 8 && moves <= 12) {
    for (let i = 0; i < 5; i++) {
      starElementsArray[i].opacity = 1;
    }
  } else if (moves > 12 && moves <= 16) {
    for (let i = 0; i < 5; i++) {
      if (i > 3) {
        starElementsArray[i].style.opacity = 0.1;
      }
    }
  } else if (moves > 16 && moves <= 20) {
    for (let i = 0; i < 5; i++) {
      if (i > 2) {
        starElementsArray[i].style.opacity = 0.1;
      }
    }
  } else if (moves > 20 && moves <= 24) {
    for (let i = 0; i < 5; i++) {
      if (i > 1) {
        starElementsArray[i].style.opacity = 0.1;
      }
    }
  } else if (moves > 24) {
    for (let i = 0; i < 5; i++) {
      if (i > 0) {
        starElementsArray[i].style.opacity = 0.1;
      }
    }
  }
}
