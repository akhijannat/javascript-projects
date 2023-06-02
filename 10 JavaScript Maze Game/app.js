let level1 = [
  [1, 0, 1, 0],
  [1, 1, 1, 1],
  [1, 0, 1, 0],
  [1, 0, 1, 1],
];

let level2 = [
  [1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 0, 1, 1],
];

let level3 = [
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 0, 0, 1],
];

let Level = document.getElementById("level-select");
let maze = document.getElementById("maze-container");
let massage = document.getElementById("massage");
let rat = document.getElementById("rat");
let food = document.getElementById("food");

let mazeArray = level1;

// Create a Maze
function createMaze() {
  for (let i = 0; i < mazeArray.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < mazeArray[i].length; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      if (mazeArray[i][j] == 0) {
        cell.classList.add("wall");
      }

      if (i == 0 && j == 0) {
        mazeArray[i][j] = 2;
      }
      row.appendChild(cell);
    }
    maze.appendChild(row);
  }

  setRatPosition(0, 0);
  setFoodPosition(0, 0);
  getRatPosition();
}

// Change level with Maze
Level.addEventListener("change", () => {
  let level = Level.value;

  if (level == 1) {
    mazeArray = level1;
    massage.classList.add("hidden");
  } else if (level == 2) {
    mazeArray = level2;
    massage.classList.add("hidden");
  } else if (level == 3) {
    mazeArray = level3;
    massage.classList.add("hidden");
  }

  maze.innerHTML = `<img src="rat.png" alt="rat" width="50px" height="50px" id="rat" class="absolute top-0 left-0 z-50">
                    <img src="food.png" alt="rat" width="50px" height="50px" id="food" class="absolute bottom-0 right-0">
                  `;
  createMaze();
});

// Set rat position
function setRatPosition(x, y) {
  rat.style.top = x + "px";
  rat.style.left = y + "px";
}

// Set food position
function setFoodPosition(x, y) {
  food.style.bottom = x + "px";
  food.style.right = y + "px";
}

// Get Rat Position
function getRatPosition() {
  let position = [-1, -1];
  for (let i = 0; i < mazeArray.length; i++) {
    for (let j = 0; j < mazeArray[i].length; j++) {
      if (mazeArray[i][j] == 2) {
        position[0] = i;
        position[1] = j;
      }
    }
  }
  return position;
}

// Moving rat Left, Right, Up and Down
document.addEventListener("keydown", (e) => {
  let rat = document.getElementById("rat");
  let food = document.getElementById("food");
  let ratLeft = rat.offsetLeft;
  let ratTop = rat.offsetTop;
  let foodLeft = food.offsetLeft;
  let foodTop = food.offsetTop;
  let ratPosition = getRatPosition();

  // Right Arrow
  if (
    e.key == "ArrowRight" &&
    ratLeft < (mazeArray.length - 1) * 50 &&
    mazeArray[ratPosition[0]][ratPosition[1] + 1] == 1
  ) {
    ratLeft += 50;
    rat.style.left = ratLeft + "px";
    mazeArray[ratPosition[0]][ratPosition[1]] = 1;
    mazeArray[ratPosition[0]][ratPosition[1] + 1] = 2;
  }

  // Left Arrow
  if (
    e.key == "ArrowLeft" &&
    ratLeft > 0 &&
    mazeArray[ratPosition[0]][ratPosition[1] - 1] == 1
  ) {
    ratLeft -= 50;
    rat.style.left = ratLeft + "px";
    mazeArray[ratPosition[0]][ratPosition[1]] = 1;
    mazeArray[ratPosition[0]][ratPosition[1] - 1] = 2;
  }

  // Up Arrow
  if (
    e.key == "ArrowUp" &&
    ratTop > 0 &&
    mazeArray[ratPosition[0] - 1][ratPosition[1]] == 1
  ) {
    ratTop -= 50;
    rat.style.top = ratTop + "px";
    mazeArray[ratPosition[0]][ratPosition[1]] = 1;
    mazeArray[ratPosition[0] - 1][ratPosition[1]] = 2;
  }

  // Down Arrow
  if (
    e.key == "ArrowDown" &&
    ratTop < (mazeArray.length - 1) * 50 &&
    mazeArray[ratPosition[0] + 1][ratPosition[1]] == 1
  ) {
    ratTop += 50;
    rat.style.top = ratTop + "px";
    mazeArray[ratPosition[0]][ratPosition[1]] = 1;
    mazeArray[ratPosition[0] + 1][ratPosition[1]] = 2;
  }

  // Show massage after game win
  if (ratLeft == foodLeft && ratTop == foodTop) {
    massage.classList.remove("hidden");
  }
});

// Reset game or play again function
function playAgain() {
  location.reload();
}
