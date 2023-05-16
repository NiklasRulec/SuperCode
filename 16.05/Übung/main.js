// ! ++++++++++ Collection ++++++++++

// console.log(document.forms);

// hiermit holen wir unsere "loginForm" -> loginForm = name im html;
// const loginForm = document.forms.loginForm;
// console.log(loginForm);

// holen wir die einzenen Inputfelder als html collection
// console.log(loginForm.elements);

// holt der Wert von username
// console.log(loginForm.elements.username.value);

// console.log(loginForm.elements.password.value);

// console.log(loginForm.elements.button);

// ! ++++++++++ Nodelist & HTML Collection ++++++++++

const liHTMLCollection = document.getElementsByTagName("li");
const lisNodeList = document.querySelectorAll("li");

console.log({ liHTMLCollection });
console.log({ lisNodeList });

// ! ++++++++++ Nodelist vs. HTML Collection ++++++++++
// HTML Collection => Live , forEach funktioniert nicht
// Node List => Static, forEach funktioniert

// erstelle ein li element und füge das mit JS zum html hinzu

console.log({ liHTMLCollection });
console.log({ lisNodeList });

// const liHTMLCollectionasArray = Array.from(liHTMLCollection);

//funktioniert nicht
// liHTMLCollection.forEach((element) => {
//   console.log(element);
// });

lisNodeList.forEach((htmlElement) => {
  console.log(htmlElement);
  htmlElement.innerHTML = "Hallo";
});

console.clear();
console.log(document.body.children[0].children);
console.log(document.body.children[0].child);

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// ! +++++++++++ createElement, appendChild +++++++++++

console.clear();

// erstellt ein Element deiner Wahl, in diesem Fall ein "div"

const divElement = document.createElement("div");

// legt Text in dem Element fest
divElement.textContent = "Hallo, ich bin ein Div";

divElement.style.height = "100px";
divElement.style.backgroundColor = "tomato";
divElement.style.padding = "50px";

// fügt das Element im body element als child an
document.body.appendChild(divElement);

// Alternative
const ul = document.body.children[0];
ul.insertAdjacentElement("afterend", divElement);

const html = `<li>Moin, ich bin ein LI </li>`;
ul.insertAdjacentHTML("afterbegin", html);

console.log({ liHTMLCollection });
console.log({ lisNodeList });

console.clear();

// ! +++++++++++ forEach, createElement, appendChild +++++++++++

const socialMedia = ["facebook", "twitter", "tiktok", "instagram"];

socialMedia.forEach((item) => {
  const element = document.createElement("li");
  element.innerHTML = item;
  ul.appendChild(element);
});

// ! +++++++++++ setAttribut, createElement mit imgs +++++++++++

const imageElement = document.createElement("img");

imageElement.setAttribute("src", "https://picsum.photos/200");
imageElement.setAttribute("alt", "random image");
imageElement.setAttribute("class", "random-class");

document.body.appendChild(imageElement);

// ! +++++++++++ setAttribut, forEach mit imgs +++++++++++

const imgSrcArray = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
  "https://picsum.photos/204",
  "https://picsum.photos/205",
  "https://picsum.photos/206",
  "https://picsum.photos/207",
];

imgSrcArray.forEach((imgSrc) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", imgSrc);
  newImage.setAttribute("alt", "random image");
  document.body.appendChild(newImage);

  const imgHtml = `<img src=${imgSrc} alt=""random image">`;
  document.body.insertAdjacentHTML("afterbegin", imgHtml);
});

// document.body.querySelector
ul.querySelector;

// querySelector -> guckt nach "unten"
// querySelectorAll
// closest -> guckt nach "oben"
// insertAdjacentHtml
// setAttribut
