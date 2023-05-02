// ! Neue Themen

// * SWITCH

let zahl = 3;

switch (zahl) {
  case 1:
    console.log("Die zahl ist 1");
    break; // Nach jedem Case benötigen wir einen break
  case 2:
    console.log("Die zahl ist 2");
    break;
  case 3:
    console.log("Die zahl ist 3");
    break;
  default:
    console.log("Die Zahl ist nicht 1, 2 oder 3");
}

let fruit = "Apfel";

switch (fruit) {
  case "Apfel":
    console.log("Du bist ein Apfel");
    break;
  case "Birne":
    console.log("Du bist eine Birne");
    break;
  case "Banane":
    console.log("Du bist eine Banane");
    break;
  default:
    console.log("Ich kenne diese Frucht nicht");
}

let day = "Mittwoch";
switch (day) {
  case "Montag":
  case "Dienstag":
  case "Mittwoch":
  case "Donnerstag":
  case "Freitag":
    console.log("Es ist Wochentag");
    break;
  case "Samstag":
  case "Sonntag":
    console.log("Es ist Wochenende");
    break;
  default:
    console.log("Das ist kein gültiger Wert");
    break;
}

// ! Ternary Operator

let hungry = true;

hungry
  ? console.log("Ja, ich habe Hunger")
  : console.log("Nein, ich habe keinen Hunger");

hungry ? console.log("Ja, ich habe Hunger") : undefined; // Wir brauchen immer einen Wert, egal ob null oder undefined

let zahl2 = 10;

let ergebnis =
  zahl2 > 5
    ? "Ja, die Zahl ist größer als 5"
    : "Nein, die Zahl ist kleiner als 5";

console.log(ergebnis);

// ! Template literals

let firstName3 = "Magda";
let city = "Hamburg";
let satz = `${firstName3} wohnt in ${city}.`;

console.log(satz);

let superName = "John";
let greeting = `Hallo ${superName}.`;
console.log(greeting);

// ! String Methoden

// replaceALL()
// ersetzt bestehende String Satz Teile durch neue

let text = "Ich mag Äpfel. Äpfel sind sehr lecker. Äpfel sind auch sehr gesund";

text = text.replaceAll("Äpfel", "Orangen");
document.getElementById("demo").innerHTML = text;

// slice()
// schneidet einen Teil des Strings aus und verpackt diesen in einen neuen String
// JS beginnt beim zählen mit 0

let fruits = "Apfel, Banane, Kiwi";

let part = fruits.slice(0);
document.getElementById("demo2").innerHTML = part;

let part2 = fruits.slice(7, 13);
document.getElementById("demo3").innerHTML = part2;

let part3 = fruits.slice(-12);
document.getElementById("demo4").innerHTML = part3;

// substring()
// macht dasselbe wie String, kann aber nur von 0 nach positiv zählen. Negative Werte zählen als 0

let part4 = fruits.substring(0);
document.getElementById("demo5").innerHTML = part4;
