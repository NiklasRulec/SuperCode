// ! ++++++++++ Level 1_2 ++++++++++

console.log("%c ----- Level 1_2 -----", "color:red");

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

let upperDrinks = getraenke.map((elm) => elm.toUpperCase());

console.log(upperDrinks);

// ! ++++++++++ Level 1_3 ++++++++++

console.log("%c ----- Level 1_3 -----", "color:red");

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const vergleichFunktion = (a, b) => {
  return a - b;
};

array.sort(vergleichFunktion);
console.log(array);

let array2 = array.map((elm) => {
  return elm * 2;
});

console.log(array2);

// ! ++++++++++ Level 1_4 ++++++++++

console.log("%c ----- Level 1_4 -----", "color:red");

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((elm) => {
  return Math.round((elm - 32) / 1.8);
});

console.log(celsius);
