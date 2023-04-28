// # Wiederholung

// - Input auslesen

function checkVal() {
  let text = document.querySelector("#text").value;
  console.log(text);
  let checkbox = document.querySelector("#checkbox").checked;
  console.log(checkbox);
}

// - Klasse hinzufügen

const outputAddH5 = document.querySelector("h5");
function addClass() {
  outputAddH5.classList.add("dick");
}
// - Klasse abziehen

function removeClass() {
  outputRemove.classList.remove("dick");
}

// - Klasse togglen

function toggleClass() {
  const btnToggle = document.querySelector(".toggle");
  btnToggle.classList.toggle("dick");
}

// #==== Conditional Statements

let age = 17;

if (age >= 18) {
  console.log("Du bist volljährig");
} else {
  console.log("Du bist minderjährig");
}

// Check Number

function checkNumber() {
  const inputNum = Number(document.querySelector(".num").value);
  const output = document.querySelector(".outputifelse");

  if (inputNum > 0) {
    output.innerHTML = "Die Zahl ist positiv";
  } else if (inputNum == 0) {
    output.innerHTML = "Die Zahl ist Null";
  } else {
    output.innerHTML = "Die Zahl ist negativ";
  }
}
