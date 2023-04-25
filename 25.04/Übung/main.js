console.log("hallo");

// # Variablen

let num1 = 33;
const num2 = 44;

console.log(num1);
console.log({ num2 });

// let

let superName = "Niklas";
console.log({ superName });

superName = "Eva";
console.log(superName);

// const

const firstName = "Timo";
console.log(firstName);

// firstName = "Paula";
// console.log(firstName);
// geht nicht weil const

console.log(num1 + num2);

// # Datentypen

// Strings

let lastName = "Rulec";
console.log(lastName);

// Numbers

let startNum = 0;
console.log(startNum);

// Booleans

console.log(true);
console.log(false);

// ? Konventionen
//camel Case - erster Buchstabe klein und alles zusammen

let fullName = "Niklas Rulec";
let full_Name = "Niklas Rulec";

// ! Nogo

let myfirstvariable = "text123";

// Richtig

let myFirstVariable = "text123";

// ! String Concatination

const superCodeName = "SuperCode";
const city = "Düsseldorf";

console.log(superCodeName, city);

console.log("Die Firma " + superCodeName + " befindet sich in " + city);

let superFirstName = "Timo";
let timoCity = "Bielefeld";
console.log(superFirstName + " wohnt in der schönen CIty " + timoCity);

// Timo O wohnt in der schönen City Bielefeld.

// ! Arithmethische Operationen

let x = 5;
let y = 3;
let z = 15;

// addieren
console.log(x + x);

// subtrahieren
console.log(z - x);

// multiplizieren
console.log(x * y);

// dividieren
console.log(z / x);

// Modulo
console.log(x % y);
console.log(z % x);
console.log(15 % 5);

console.log({ x });
x++;
x++;
x++;
console.log({ x });

console.log({ y });
y--;
console.log({ y });

// # Output

document.write("Hallo Leute");
document.write("<h1 class='test'> Hallo Kurs </h1>");

// window.alert("Email eintragen vergessen");

// # Input

// window.prompt("Bitte Name hier eintragen", "Max Mustermann");

// let windowPrompt = window.prompt(
//   "bitte Vor- und Nachname eingeben",
//   "Thomas Müller"
// );

// console.log(windowPrompt);

let confirm = window.confirm("Stimmen Sie den Cookies zu?");

console.log(confirm);
