let second = document.getElementById("second");
let miliSecond = document.getElementById("mili-second");

let gameCard = document.querySelector(".game-card");
let cardImage = document.querySelectorAll(".game-card-img");

let imgArray = [...cardImage];

let sec = 1;
let mili = 1;

let imgAltArry = [];
let imgElement = [];

// When Click a card remove background and show Image and call time function
startGame();
function startGame() {
  //listen for events on the cards
  for (let i = 0; i < cardImage.length; i++) {
    cardImage[i].addEventListener("click", () => {
      // time();
      imgElement = cardImage[i].getElementsByTagName("img")[0];
      imgElement.classList.remove("hidden");

      matching();
    });
  }
}

// Matching Function
function matching() {
  imgAltArry.push(imgElement.alt);

  console.log(imgAltArry);
  // if (imgAltArry[0] == imgAltArry[-1]) {
  //   console.log("This is matched");
  // } else {
  //   console.log("No matching");
  // }
}

// After clicking any card and start the game time
function time() {
  setInterval(() => {
    if (mili < 10) {
      miliSecond.innerHTML = `0${mili++}`;
    } else {
      miliSecond.innerHTML = mili++;
    }

    if (mili === 100) {
      mili = 0;
      if (sec < 10) {
        second.innerHTML = `0${sec++}:`;
      } else {
        second.innerHTML = `${sec++}:`;
      }
    }
  }, 10);
}

// shuffle card images using the (Fisher-Yates)
shuffle();
function shuffle() {
  for (let i = imgArray.length - 1; i >= 0; i--) {
    let shuffleCardNum = Math.floor(Math.random() * (i + 1));

    gameCard.insertBefore(imgArray[shuffleCardNum], imgArray[i]);
  }
}
