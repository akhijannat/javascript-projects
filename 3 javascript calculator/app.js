let showResult = document.getElementById("show-result");
let number = document.querySelectorAll(".number");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let back = document.getElementById("back");

let selectedItem = "";

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    selectedItem += number[i].innerHTML;
    showResult.innerHTML = selectedItem;
  });
}

equal.addEventListener("click", () => {
  selectedItem = eval(selectedItem);
  showResult.innerHTML = selectedItem;
});

back.addEventListener("click", () => {
  selectedItem = selectedItem.slice(0, -1);
  showResult.innerHTML = selectedItem;
});

clear.addEventListener("click", () => {
  selectedItem = "";
  showResult.innerHTML = "";
});
