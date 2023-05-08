// ! ++++++++++ Arrays

let gericht1 = "Pfannkuchen";
let gericht2 = "Döner";
let gericht3 = "Pizza";

let magdasLieblingsGerichte = ["Pfannkuchen", "Döner", "Pizza", true, 2023];

console.log(magdasLieblingsGerichte);

// * index
// So können wir auf einzelne Elemente zugreifen
// Index fängt bei 0 an

console.log(magdasLieblingsGerichte[0]); // Pfannkuchen
console.log(magdasLieblingsGerichte[1]); // Döner
console.log(magdasLieblingsGerichte[4]); // 2023

// * indexOf()
// Sucht in einem Array nach dem Suchwort und gibt dir den Index zurück

console.log("%c ---------- .indexOF ----------", "color:red");

console.log(magdasLieblingsGerichte.indexOf("Pizza")); // 2
console.log(magdasLieblingsGerichte.indexOf("Pizzzza")); // -1 // element nicht gefunden

// * Werte überschreiben in Array
// Statisch

magdasLieblingsGerichte[1] = "Salat";
console.log(magdasLieblingsGerichte);

// Dynamisch

console.log(magdasLieblingsGerichte.indexOf("Pizza")); // 2
magdasLieblingsGerichte[magdasLieblingsGerichte.indexOf("Pizza")] = "Pasta";
console.log(magdasLieblingsGerichte);

// * .length
// Gibt uns die Länge von einem Array als Number zurück

console.log("%c ---------- .length ----------", "color:red");

console.log(magdasLieblingsGerichte.length);

let superTrainer = ["Magda", "Ahmed", "Christian", "Julias", "Marzio"];
console.log(superTrainer);

// * pop()
// Die pop() Methode entfernt das letzte Element in einem Array und gibt den Wert des gelöschten Element zurück

console.log("%c ---------- pop() ----------", "color:red");
let popSuperTrainer = superTrainer.pop();
console.log(popSuperTrainer); // Marzio
console.log(superTrainer);

// * push()
// push() fügt an der letzten Stelle ein Element hinzu und gibt die neue Länge zurück (length)

console.log("%c ---------- push() ----------", "color:red");
let pushSuperTrainer = superTrainer.push("Ingo");
console.log(pushSuperTrainer); // 5
console.log(superTrainer);

// * shift()
// Die shift() Methode entfernt das erste Element in einem Array und gibt den Wert des Elementes zurück

console.log("%c ---------- shift() ----------", "color:red");
let shiftSuperTrainer = superTrainer.shift();
console.log(shiftSuperTrainer);
console.log(superTrainer);

// * unshift()
// unshift() fügt ein neues Element am Anfang hinzu und gibt die neue Länge von unserem Array zurück

console.log("%c ---------- unshift() ----------", "color:red");
let unshiftSuperTrainer = superTrainer.unshift("Timo");
console.log(unshiftSuperTrainer); // 5
console.log(superTrainer);
