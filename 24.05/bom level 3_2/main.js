let count;
let seconds;
const timeDisplay = document.querySelector("#time"); // HTML-Element zur Anzeige des Timers
const minutesInput = document.querySelector("#minutes");

// ! ++++++++++ TIMER ++++++++++

function timerFunction() {
  const minutes = parseInt(minutesInput.value);
  let seconds = minutes * 60;
  clearInterval(count);

  count = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(count);
      return;
    }
    displayTimeLeft(seconds);
    seconds--;
  }, 1000);
}

// ! ++++++++++ TIMER RESTART ++++++++++

function restartTimer() {}

// ! ++++++++++ TIMER DISPLAY ++++++++++

function displayTimeLeft(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  let display = `${minutes} : ${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
  timeDisplay.innerHTML = display;
}

// ! ++++++++++ BUTTON FUNCTIONS ++++++++++

function startMinCountdown() {
  timerFunction();
}

function pauseMinCountdown() {
  clearInterval(count);
}

function restartMinCountdown() {
  restartTimer();
}
