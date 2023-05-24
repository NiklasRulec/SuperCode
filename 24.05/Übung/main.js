// ! ++++++++++ WINDOW OBJECT ++++++++++

// Das Window Object representiert das geöffnete Fenster im Browser

// console.log(window);

// * window.alert()
// Popup mit Text
// window.alert("Hallo Leute");

// * window.prompt()
// Popup mit Eingabefeld
// window.prompt("Was machst du heute?");

// * Um auf die Texteingabe zuzugreifen, müssen wir es in einer variable speichern.

// let returnPrompt = window.prompt("Was machst du heute?");
// console.log(returnPrompt);

// * innerHeight
// Werte in px
// Browserzeile und Devtools sind nicht eingerechnet
console.log("innerHeight", window.innerHeight);

// * innerWidth
// Werte in px
// Browserzeile und Devtools sind nicht eingerechnet
console.log("innerWidth", window.innerWidth);

// ! ++++++++++ Screen ++++++++++
// * screen
// Das Screen Object befindet sich im Window Object. Es gibt uns Informationen über den Bildschirm, auf dem sich der Browser befindet
console.log(window.screen);

// * screen.height
// Wir bekommen die Höhe zurück
console.log("screen.height", window.screen.width);

// * screen.width
// Wir bekommen die Breite zurück
console.log("screen.width", window.screen.width);

// * screen.availHeight
// Wir bekommen die Höhe des Screens ohne Taskleiste zurück, also nur den nutzbaren Bereich
console.log("screen.availHeight", window.screen.availHeight);

// * screen.availWidth
// Wir bekommen die Breite des Screens ohne Taskleiste zurück, also nur den nutzbaren Bereich
console.log("screen.availWidth", window.screen.availWidth);

// * window.open
// Mit window.open können wir auf eine andere Seite weiterleiten
// Wir können nicht mehr auf den Zurück Pfeil klicken
// Eignet sich um fest weiterzuleiten

// $ Default eird immer die Seite in einem neuen Tab geöffnet
// window.open("https://www.super-code.de");

// $ öffnet im selben Tab
// window.open("https://www.super-code.de", "_self");

// $ öffnet im neuen Tab
// window.open("https://www.super-code.de", "_blank");

// * window.onload
// Wenn die Seite geladen wurde, wird in der Konsole der Text ausgegeben
window.onload = console.log("Seite wurde geladen");

// * window.scrollTo
// mit der window.scrollTo können wir zu einem bestimmten Punkt der Seite scrollen

document.querySelector("#scroll").addEventListener("click", () => {
  // 1. Wert : px auf x Achse
  // 2. Wert : px auf y Achse
  window.scrollTo(100, 1000);
});

// * window.location
console.log(window.location);
// so bekommen wir die Domain zurück
console.log(window.location.host);
// * so bekommen wir den Pfad zurück
console.log(window.location.pathname);

// * location.reload()
// Damit können wir die aktuelle Seite neu laden lassen
document.querySelector("#reload").addEventListener("click", () => {
  window.location.reload;
});

// * location.replace()
// Wir können auf eine andere URL weiterleiten
document.querySelector("#redirect").addEventListener("click", () => {
  window.location.replace("https://www.super-code.de");
});

// * window.history
console.log(window.history);
document.querySelector("#back").addEventListener("click", () => {
  history.back();
});

// ! ++++++++++ JS TIMING EVENTS ++++++++++
// Eine Funktion wird erst nach einer Verzögerung ausgeführt

const konsolenAusgabe = () => {
  console.log("Hallo");
};

// - Wert 1 : Welche Funktion soll ausgeführt werden
// - Wert 2 : Nach wievieln Millisekunden soll Sie ausgeführt werden
// setTimeout(konsolenAusgabe, 2000);

// * Konsole leeren nach 4 Sekunden

const konsolenClear = () => {
  console.clear();
};

// setTimeout(konsolenClear, 4000);

// * setIntervall
// Wir können eine Funktion in einem bestimmten Interval immer wieder ausführen lassen
// setInterval(konsolenAusgabe, 1000);

// * clearInterval
// löscht einen Interval wieder
// - Wir müssen das SetInterval() in einer Variable speichern um es später wieder löschen zu können
// const interval = setInterval(konsolenAusgabe, 1000);

document.querySelector("#interval").addEventListener("click", () => {
  clearInterval(interval);
});

// * So kann man eine setInterval in einer Callback Funktion schreiben

// - NEU
// setInterval(() => {
//   console.log("hallöchen");
// }, 1000);

// - ALT
// setInterval(function () {
//   console.log("servus");
// }, 1000);
