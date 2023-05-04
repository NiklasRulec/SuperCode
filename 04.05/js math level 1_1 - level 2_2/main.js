// ! ++++++++++ Level 1_1

console.log("++++++++++ Level 1_1 ++++++++++");

console.log(Math.PI);

const pi = Math.PI;
let roundedPI = pi.toFixed(2);
console.log(roundedPI);

// ! ++++++++++ Level 1_2

console.log("++++++++++ Level 1_2 ++++++++++");

function roundIt() {
  let array = [3.14, 193.4464, 0.8596433607, -2.940629089];
  array.forEach((element) => {
    let rounded = Math.round(element);
    console.log(rounded);
  });
}

roundIt();

// ! ++++++++++ Level 1_3

console.log("++++++++++ Level 1_3 ++++++++++");

let randomNum = Math.random();
console.log({ randomNum });
let randomNum1_10 = Math.round(Math.random() * 10);
console.log({ randomNum1_10 });
let randomNum1_100 = Math.round(Math.random() * 100);
console.log({ randomNum1_100 });

// ! ++++++++++ Level 2_1

console.log("++++++++++ Level 2_1 ++++++++++");

function roundTo(zahl, genauigkeit) {
  zahl = zahl.toFixed(genauigkeit);
  console.log(zahl);
}

roundTo(Math.PI, 5);
roundTo(Math.PI, 2);
roundTo(Math.PI, 10);

// ! ++++++++++ Level 2_2

console.log("++++++++++ Level 2_2 ++++++++++");

let randomNumber1_10 = Number(Math.round(Math.random() * 10));
console.log({ randomNumber1_10 });

let personAnswer = prompt("Errate die Zahl zwischen 0 und 10", "Deine Antwort");

if (randomNumber1_10 == personAnswer) {
  console.log("Die Zahl ist " + randomNumber1_10 + ". Du hast gewonnen.");
  alert("Die Zahl ist " + randomNumber1_10 + ". Du hast gewonnen.");
} else {
  console.log("Die Zahl ist " + randomNumber1_10 + ". Du hast nicht gewonnen.");
  alert("Die Zahl ist " + randomNumber1_10 + ". Du hast nicht gewonnen.");
}
