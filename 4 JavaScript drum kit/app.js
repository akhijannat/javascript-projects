let button = document.querySelectorAll(".button");

let e =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav";
let r =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav";
let f =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav";
let g =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav";
let h =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav";
let v =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav";
let b =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav";
let j =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav";
let i =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav";
let k =
  "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav";

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    let selectedSound = eval(button[i].className[0]);

    let sound = new Audio(selectedSound);
    sound.play();
  });
}
