console.log("Start Warten für 3 Sekunden");

const helloText = () => {
  console.log("Erledigt nach 3 Sekunden");
};

// setTimeout(helloText, 3000);

// ! +++++++++

let counter = 10;

const countBack = () => {
  if (counter > 0) {
    console.log(counter);
    counter--;
  } else {
    console.log("Endlich Feierabend");
    clearInterval(myInterval);
  }
};

const myInterval = setInterval(countBack, 1000);
