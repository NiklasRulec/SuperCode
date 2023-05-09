// ! ++++++++++ Level 1_1 ++++++++++

console.log("%c ----- Level 1_1 -----", "color:red");

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

function myDrinks() {
  getraenke.sort();
  getraenke.forEach((elm) => {
    console.log(elm);
    document.write(elm + "<br>");
  });
}

myDrinks();

// ! ++++++++++ Level 1_5 ++++++++++

console.log("%c ----- Level 1_5 -----", "color:red");

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let checkNumber3 = checkNumber.map((elm) => {
  if (elm % 3 === 0) {
    console.log(elm + 100);
  } else {
    console.log(elm);
  }
});

// ! ++++++++++ Level 1_6 ++++++++++

console.log("%c ----- Level 1_6 -----", "color:red");

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

let album2 = album.map((elm) => {
  let dotIndex = elm.indexOf(".");

  if (dotIndex > 0) {
    let albumSliced = elm.slice(0, dotIndex);
    console.log(albumSliced.toLowerCase());
    console.log("%c ---------", "color:red");
  } else {
    let albumSliced = "invalid";
    console.log(albumSliced);
    console.log("%c ---------", "color:red");
  }
});
