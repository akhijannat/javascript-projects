let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let miliSecond = document.getElementById("mili-second");

let gameCard = document.querySelector(".game-card");
let cardImage = document.querySelectorAll(".game-card-img");

let imgArray = [...cardImage];

// Keep track of clicked cards
let card2 = null;
let card1 = null;

function clicked(card) {
  // Card 1
  if (card1 == null) {
    card.classList.remove("brightness-0");
    card.classList.add("brightness-100");
    card1 = card;
  } else if (card2 == null) {
    card.classList.remove("brightness-0");
    card.classList.add("brightness-100");
    card2 = card;
    setTimeout("checkMatch()", 1000);
  }

  // time();
}

// shuffle card images using the (Fisher-Yates)
shuffle();
function shuffle() {
  for (let i = imgArray.length - 1; i >= 0; i--) {
    let shuffleCardNum = Math.floor(Math.random() * (i + 1));

    gameCard.insertBefore(imgArray[shuffleCardNum], imgArray[i]);
  }
}

// Check if there is a match
function checkMatch() {
  // See if card 1 is the same as card 2
  if (card1.src == card2.src) {
    // Reset cards
    card1 = null;
    card2 = null;
  } else {
    // Flip the cards back over
    card1.classList.remove("brightness-100");
    card1.classList.add("brightness-0");

    card2.classList.remove("brightness-100");
    card2.classList.add("brightness-0");

    // Reset cards
    card1 = null;
    card2 = null;
  }
}

//let interval;
// let hs = 1;
// let minit = 1;
// let sec = 1;
// let mili = 1;

// function time() {
//   interval = setInterval(() => {
//     if (mili < 10) {
//       miliSecond.innerHTML = `0${mili++}`;
//     } else {
//       miliSecond.innerHTML = mili++;
//     }

//     if (mili === 100) {
//       mili = 0;
//       if (sec < 10) {
//         second.innerHTML = `0${sec++}:`;
//       } else {
//         second.innerHTML = `${sec++}:`;
//       }

//       if (sec === 60) {
//         sec = 0;

//         if (minit < 10) {
//           minute.innerHTML = `0${minit++}:`;
//         } else {
//           minute.innerHTML = `${minit++}:`;
//         }

//         if (minit === 60) {
//           minit = 0;
//           hour.innerHTML = hs++;
//         }
//       }
//     }
//   }, 10);
// }
