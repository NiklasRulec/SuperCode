let counter = 100;
const output = document.querySelector(".zeit");

const countBack = () => {
  if (counter >= 0) {
    output.innerHTML = counter + "%";
    counter--;
  } else if ((counter = 0)) {
    clearInterval(myInterval);
  }
};

const clickFunction = () => {
  const myInterval = setInterval(countBack, 50);
};
