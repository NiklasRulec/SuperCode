// ! ######## Neue Themen

// ! ++++++++++ Array Methoden

console.log("%c---------- Array Methoden ----------", "color:red");

let carName = ["Audi", "BMW", "Seat", "Skoda", "Mercedes"];
console.log(carName);

// * splice()
console.log("%c---------- splice() ----------", "color:red");

// FÜgt VW und Fiat hinzu
carName.splice(2, 0, "VW", "Fiat");
console.log(carName);

// BMW löschen
carName.splice(1, 1);
console.log(carName);

// Seat löschen
carName.splice(3, 1);
console.log(carName);

// Audi ändern
carName.splice(0, 1, "Audolino");
console.log(carName);

// * slice()
console.log("%c---------- slice() ----------", "color:red");

let newCars = carName.slice(0, 3);
console.log(newCars);
console.log(carName);

// * sort()
console.log("%c---------- sort() ----------", "color:red");

// Number Sort
let number1 = [3, 4, 6, 1, 2, 9];
console.log(number1);
number1.sort();
console.log(number1);

// Number Sort
let string = ["B", "D", "A", "C"];
console.log(string);
string.sort();
console.log(string);

// Big Number Sort
let number2 = [10, 2, 100, 34, 111, 20];
console.log(number2);
number2.sort();
console.log(number2);

// * sort() mit funktion und callback funktion

console.log("%c--- sort() mit funktion und callback funktion ---", "color:red");

// Lange Schreibweise
let numberSort = [12, 33, 9, 2, 33, 123, 900, 34, 13, 4];
console.log(numberSort);
const vergleichFunktion = (a, b) => {
  return a - b;
};

// numberSort.sort(vergleichFunktion);
// console.log(numberSort);

// Kurze Schreibweise
number2.sort((a, b) => a - b);
console.log(number2);

number2.sort((a, b) => b - a);
console.log(number2);

// * reverse()
console.log("%c---------- reverse() ----------", "color:red");

const reverseNum = [0, 1, 2, 3, 4];
console.log(reverseNum);
reverseNum.reverse();
console.log(reverseNum);

// * forEach()
console.log("%c---------- forEach() ----------", "color:red");

let games = ["Call of Duty", "GTA Vice City", "WOW", "GTA San Andreas"];

console.log(games[0]);
console.log(games[1]);
console.log(games[2]);
console.log(games[3]);

games.forEach((elm) => {
  console.log(elm);
});

let images = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
  "https://picsum.photos/204",
  "https://picsum.photos/205",
  "https://picsum.photos/206",
  "https://picsum.photos/207",
];

const bilderOutput = document.querySelector("#bilder");

images.forEach((elt, index) => {
  console.log({ elt });
  console.log({ index });
  bilderOutput.innnerHTML += `<img src="${elt}" alt="randomImg${index}"/>`;
});

// * map()

console.log("%c----------  map() ---------- ", "color:red");

let number3 = [10, 5, 2, 4];

let number4 = number3.map((Pfannkuchen) => {
  console.log(Pfannkuchen);
  return Pfannkuchen * 2;
});

console.log(number4);

// * forEach() vs. map()
console.log("%c----------  forEach() vs. map() ---------- ", "color:red");
//- forEach() gibt kein neus Array zurück
//- map() gibt ein neues Array zurück. Braucht man, wenn man die Werte weiter verarbeiten wollen

const studentNames = ["Nina", "Tom", "Simon"];

// studentNames.forEach((name) => {
//   console.log(name.toUpperCase());
// });

// studentNames.map((name) => {
//   console.log(name.toUpperCase());
// });

// forEach()
console.log(studentNames.forEach((firstName) => firstName.toUpperCase()));
//forEach kein Array return

// map()
console.log(studentNames.map((firstName) => firstName.toUpperCase()));
//map returned ein neues Array

const forEachLowNames = studentNames.forEach((elm) => elm.toLowerCase());
console.log(forEachLowNames);

const mapLowNames = studentNames.map((elm) => elm.toLowerCase());
console.log(mapLowNames);

console.log(studentNames);
