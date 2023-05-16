let listData = document.querySelector("#myList");
console.log({ listData });
let output = document.querySelector("output");

const unten = document.querySelector(".unten");

const btn1 = unten.firstElementChild;
const btn2 = unten.firstElementChild.nextElementSibling.nextElementSibling;
const btn3 =
  unten.lastElementChild.previousElementSibling.previousElementSibling;
const btn4 = unten.lastElementChild;

console.log({ btn1 });
console.log({ btn2 });
console.log({ btn3 });
console.log({ btn4 });

// ! ++++++++++ First Button ++++++++++
btn1.addEventListener("click", () => {
  console.log(listData.firstElementChild.innerText);
  output.innerHTML = listData.firstElementChild.innerText;
});

// ! ++++++++++ Second Button ++++++++++
btn2.addEventListener("click", () => {
  console.log(listData.lastElementChild.innerText);
  output.innerHTML = listData.lastElementChild.innerText;
});

// ! ++++++++++ Third Button ++++++++++
btn3.addEventListener("click", () => {
  console.log(listData.firstElementChild.nextElementSibling.innerText);
  output.innerHTML = listData.firstElementChild.nextElementSibling.innerText;
});

// ! ++++++++++ Fourth Button ++++++++++
btn4.addEventListener("click", () => {
  console.log(listData.lastElementChild.previousElementSibling.innerText);
  output.innerHTML = listData.lastElementChild.previousElementSibling.innerText;
});
