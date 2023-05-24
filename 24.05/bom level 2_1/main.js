const meldung = document.querySelector(".message");
console.log(meldung);
const count = document.querySelector("#count");

let counter = 10;

const countBack = () => {
  if (counter > 0) {
    counter--;
    count.innerHTML = counter;
  } else if (counter == 0) {
    meldung.style.opacity = "0";
    clearInterval(myInterval);
  }
  console.log(counter);
};

const myInterval = setInterval(countBack, 1000);
