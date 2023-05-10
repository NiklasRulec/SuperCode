// ! ++++++++++ for loop ++++++++++

// * Aufbau von for loop

// for (statement1;statement2;statement3){
// code
// }

// for(start/before;condition;step/after)
// code
// }

// * klassische for loop

for (let i = 0; i <= 1000; i++) {
  console.log(i);
}

// ! Achtung vor infinity loops

// ! ++++++++++ Schleife in einer Schleife nested loop ++++++++++

for (let i = 1; i <= 3; i++) {
  console.log("Außen Start");
  for (let j = 1; j <= 5; j++) {
    console.log(`Äußere Schleife : ${i}, Innere Schleife : ${j}`);
  }
}

// ! ++++++++++ Runter zählen mit for loop ++++++++++

for (let i = 50; i >= 40; i--) {
  console.log(i);
}

// ! ++++++++++ for Schleife mit Array ++++++++++

console.log("%c ++++++++++ Loop mit Arrays ++++++++++", "color:red");

let country = ["germany", "france", "spain", "italy"];

console.log(country.length);

for (let i = 0; country.length > i; i++) {
  console.log(i);
  console.log(country[i]);
}

// ! ++++++++++ for of Schleife ++++++++++

// Array durchlaufen

console.log("%c ++++++++++ for of Schleife ++++++++++", "color:red");

let color = ["green", "red", "blue", "black"];

for (let i of color) {
  console.log(i);
}

// Text durchlaufen

const text = "textlang";

for (let i of text) {
  console.log(i);
}

// ! ++++++++++ verschiedene Loops ++++++++++

console.log("%c ++++++++++ mit 2 multiplizieren ++++++++++", "color:red");

let superArray = [10, 20, 30];

// ? for loop

console.log("%c ++++++++++ for loop ++++++++++", "color:red");

for (let i = 0; i < superArray.length; i++) {
  console.log(superArray[i] * 2);
}

// ? for of loop

console.log("%c ++++++++++ for of loop ++++++++++", "color:red");

for (let i of superArray) {
  console.log(i * 2);
}

// ? forEach()

console.log("%c ++++++++++ forEach() ++++++++++", "color:red");

superArray.forEach((elm) => console.log(elm * 2));

// ? map()

console.log("%c ++++++++++ map() ++++++++++", "color:red");

superArray.map((elm) => console.log(elm * 2));
