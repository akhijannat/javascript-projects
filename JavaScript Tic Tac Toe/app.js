let box = document.querySelectorAll(".box");

let cross = "x";
let zero = "0";
let count = 9;

let symbol = Math.floor(Math.random() * count);

for (let i = 0; i < box; i++) {
  box.innerHTML = cross;
}
console.log(symbol);
