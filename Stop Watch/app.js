let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let miliSecond = document.getElementById("mili-second");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let interval;
let hs = 1;
let minit = 1;
let sec = 1;
let mili = 1;

start.addEventListener("click", () => {
  interval = setInterval(() => {
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

      if (sec === 60) {
        sec = 0;

        if (minit < 10) {
          minute.innerHTML = `0${minit++}:`;
        } else {
          minute.innerHTML = `${minit++}:`;
        }

        if (minit === 60) {
          minit = 0;
          hour.innerHTML = hs++;
        }
      }
    }
  }, 10);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  mili = 0;
  sec = 0;
  minit = 0;
  hs = 0;
  miliSecond.innerHTML = `00`;
  second.innerHTML = "";
  minute.innerHTML = "";
  hour.innerHTML = "";
});
