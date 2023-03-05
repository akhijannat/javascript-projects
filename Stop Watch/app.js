let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let miliSecond = document.getElementById("mili-second");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let ghonta = 1;
let minit = 1;
let sec = 1;
let mili = 1;

let interval;
start.addEventListener("click", () => {
  interval = setInterval(() => {
    if (mili === 100) {
      mili = 0;
      miliSecond.innerHTML = mili;

      if (sec === 60) {
        sec = 0;
        second.innerHTML = sec;
        minute.innerHTML = `${minit++}:`;

        if (minit === 60) {
          minit = 0;
          minute.innerHTML = minit;
          hour.innerHTML = `${ghonta++}:`;
        }
      }
      second.innerHTML = `${sec++}:`;
    }

    miliSecond.innerHTML = mili++;
  }, 1);
});

stop.addEventListener("click", () => {
  clearTimeout(interval);
});

reset.addEventListener("click", () => {
  clearTimeout(interval);
  miliSecond.innerHTML = mili = `00`;
  second.innerHTML = sec = "";
  minute.innerHTML = minit = "";
});
