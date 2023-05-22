// ! ++++++++++ DATE OBJECT ++++++++++

// * mit newDate() erstellen wir ein neues Date Object
// * Start am 01.01.1970

// * Wenn wir keine Parameter mitgeben, bekommen wir die aktuelle Zeit und Datum
let date1 = new Date();
console.log(date1);
console.log(typeof date1);

// * Geht nicht weil kein String
// * console.log(date1.toUpperCase());

// * Wenn wir Parameter mitgeben, wird ein Objekt mit den durchgereichten Zeiten erstellt

let date2 = new Date(1993, 4, 30, 12, 11);
console.log(date2);
console.log(typeof date2);

// * Wenn wir date1 - date2 rechnen, bekommen wir die Milliskeunden, die zwischen den beiden Zeiten liegt

let date3 = date1 - date2;
console.log(date3);

// * Die .toString() Methode wandelt Date Object in einen String um

let date4 = date1.toString();
console.log(date4);
console.log(typeof date4);
// * Jetzt funktioniert toUpperCase, weil date 4 nun ein String ist
console.log(date4.toUpperCase());

// * toUTCString() - gibt ein Datum in UTC Zeit zurück
// UTC: The Universal Coordinated ist der Standard bei Weltuhren

let date5 = date1.toUTCString();
console.log(date5);

// * toLocalDateString() - gibt Datum in einer loklalisierten Darstellung zurück

let date6 = new Date().toLocaleDateString();
console.log(date6);

// ! +++++++++++ GET +++++++++++

// * Wir bekommen die Millisekunden Zeit seit dem 01.01.1970 0:00 zurück
let date7 = date1.getTime();
console.log(date7);

// * getFullYear() - gibt uns das Jahr zurück
let date8 = date1.getFullYear();
console.log(date8);
console.log(typeof date8);

// * getMonth() - gibt uns den Monat zurück
// Wir bekommen den Index (!!!) des Monats zurück - Start ist bei 0!
let date9 = date1.getMonth();
console.log(date9);

// * getDate() - gibt uns den aktuellen Tag zurück
let date10 = date1.getDate();
console.log(date10);

// * getMinutes() - gibt uns die aktuellen Minuten zurück
let date11 = date1.getMinutes();
console.log(date11);

// * getSeconds() - gibt uns die aktuellen Sekunden zurück
let date12 = date1.getSeconds();
console.log(date12);

// * getMilliseconds() - gibt uns die aktuellen Millisekunden zurück
let date13 = date1.getMilliseconds();
console.log(date13);

// * getDay() - gibt uns den Tag zurück
let date14 = date1.getDay();
console.log(date14);

// * setDate() - können wir das Tagesdatum bestimmen
// Max zahl ist 31
console.log("Anfangsdatum", date2);
date2.setMonth(3);
console.log(date2);

// * setFullYear() - können wir das Tagesdatum bestimmen
date2.setFullYear(2001);
console.log(date2);

// * Namen von Wochentag rausbekommen

let dateObj = new Date();
let weekday = dateObj.toLocaleString("default", { weekday: "long" });
console.log(weekday);
