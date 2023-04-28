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

// * Log In User

let userName = "marzio";
let password = "hallo";

console.log(window);
console.log(window.location);
console.log(window.location.href);

function checkUserData() {
  let loginUserName = document.querySelector("#username").value;
  let loginUserPass = document.querySelector("#password").value;
  const outputLogin = document.querySelector(".login-feedback");

  // && =
  // || =

  if (userName == loginUserName && password == loginUserPass) {
    outputLogin.innerHTML = "<p class='green'> Login war erfolgreich</p>";
    window.location.replace("./secret.html");
  } else {
    outputLogin.innerHTML = "<p class='red'> Login war nicht erfolgreich</p>";
  }
}
