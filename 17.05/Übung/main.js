const person = {
  name: "Ingo",
  age: 35,
  adult: true,
  city: "Moormerland",
  "admin-status": true,
};

console.log(person);

// ! Zugriff auf die Values
// * dot notation - punkt schreibweise
console.log(person.name);
// * bracket notation - klammer schreibweise
console.log(person["age"]);
console.log(person["admin-status"]);

// ! Werte eines Objektes neu zuweisen

person.name = "Uwe Siemens";
console.log(person.name);

// ! Werte im Objekt hinzufügen

person.job = "Trainer";
console.log(person);

// ! Werte im Objekt löschen

delete person.job;
console.log(person);

console.log(person.city);
console.log(person["city"]);

// ! Methoden in Objekten

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => {
    return a - b;
  },
};

console.log(calculator.add(2, 5));

const person2 = {
  name: "Ingo",
  age: 35,
  adult: true,
  city: "Moormerland",
  greet: () => {
    return `Hallo mein Name ist ${person2.name}, ich bin ${person2.age} Jahre alt und komme aus ${person2.city}`;
  },
  greetThree: function () {
    return `Hallo mein Name ist ${this.name}, ich bin ${this.age} Jahre alt und komme aus ${this.city}`;
  },
};

console.log(person2.greet());

// Deklaration der Funktion außerhalb des Objekts
const greetTwoFunction = () => {
  return `Hallo mein Name ist ${this.name}, ich bin ${this.age} Jahre alt und komme aus ${this.city}`;
};

// dem key greetTwo in dem person2 Objekt wird die Funktion greetTwo zugewiesen
person2.greetTwo = greetTwoFunction;
console.log("greetTwo", person2.greetTwo());

console.log(person2);

console.clear();

// THIS KEYWORD
// Bei Function Declarations wird das this-Schlüsselwort dynamisch festgelegt, abhängig vom Aufrufkontext
// Arrow Functions erben das this-Schlüsselwort lexikalisch, heißt, dass es den Wert des umgebenden Kontext erbt und nicht dynamisch festgelegt wird

console.log("greetTwo in person2", person2.greetTwo());
console.log("greetTwo außerhalb person2", greetTwoFunction());

// ! Objekte und for in Schleife
console.log("%c --------- for in Schleife ---------", "color:red");

const person3 = {
  name: "Ingo",
  age: 35,
  adult: true,
  city: "Moormerland",
};

for (let key in person3) {
  console.log(key + " : " + person3[key]);
}

// ! Objekte => keys
console.log("%c --------- Objekte => keys ---------", "color:red");

const keys = Object.keys(person3);
console.log(keys);

// ! Objekte => values
console.log("%c --------- Objekte => values ---------", "color:red");

const values = Object.values(person3);
console.log(values);

// ! Objekte => entries
console.log("%c --------- Objekte => entries ---------", "color:red");

const entries = Object.entries(person3);
console.log(entries);

console.log(entries[1][1]);

const array = [2, 5, 1, [8, 9, [2, 4, 5, [3, 32]]]];
console.log(array);
console.log(array[3][2][3][1]);

// ! Objekte innerhalb von Objekten
console.log(
  "%c --------- Objekte innerhalb von Objekten ---------",
  "color:red"
);

const person4 = {
  name: "Magda",
  city: "Hamburg",
  job: "Trainer",
  socialMedia: {
    linkedIn: "linkedInProfilpage",
    intagram: "instagramPage",
    tikTok: "tiktok Profil",
  },
  hobbies: ["coding", "gaming", "zeichnen"],
};

const valuesPerson4 = Object.values(person4.socialMedia);
console.log(valuesPerson4[0]);

console.log(person4.socialMedia.linkedIn);
console.log(person4.socialMedia.tikTok);

console.log(person4.hobbies);

// ! Objekte in Arrays
console.log("%c --------- Objekte in Arrays ---------", "color:red");

const superTrainer = [
  {
    name: "Ingo",
    city: "Moormerland",
  },
  {
    name: "Magda",
    city: "Hamburg",
  },
  {
    name: "Marzio",
    city: "Bayern",
  },
];

superTrainer.forEach((trainer) => {
  const html = `<div>
    <h2>${trainer.name}</h2>
    <p>${trainer.city}<p>
    </div>`;
  document.body.insertAdjacentHTML("afterbegin", html);
  console.log(`${trainer.name} kommt aus ${trainer.city}`);
});
