// ! ++++++++++ Level 1_1

console.log("%c ---------- level 1_1 ----------", "color:red");

let person = ["Niklas", "Rulec", "24"];
let friends = ["Eva", "Elias", "Hauke"];
let favoriteFood = ["Döner", "Pizza", "Pasta"];

console.log(person);
console.log(friends);
console.log(favoriteFood);

// ! ++++++++++ Level 1_2

console.log("%c ---------- level 1_2 ----------", "color:red");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

// ! ++++++++++ Level 1_3

console.log("%c ---------- level 1_3 ----------", "color:red");

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

// ! ++++++++++ Level 1_4

console.log("%c ---------- level 1_4 ----------", "color:red");

console.log(person);
console.log(person.length);
person.push("Dortmund");
person.push("Düsseldorf");
console.log(person);
console.log(person.length);

console.log(friends);
console.log(friends.length);
friends.push("Benedikt");
friends.push("David");
console.log(friends);
console.log(friends.length);

console.log(favoriteFood);
console.log(favoriteFood.length);
favoriteFood.push("Sushi");
favoriteFood.push("Wraps");
console.log(favoriteFood);
console.log(favoriteFood.length);

// ! ++++++++++ Level 1_5

console.log("%c ---------- level 1_5 ----------", "color:red");

console.log(person);
let lastPerson = person.pop();
console.log(lastPerson);
console.log(person);

console.log(friends);
let lastFriend = friends.pop();
console.log(lastFriend);
console.log(friends);

console.log(favoriteFood);
let lastFavoriteFood = favoriteFood.pop();
console.log(lastFavoriteFood);
console.log(favoriteFood);

// ! ++++++++++ Level 1_6

console.log("%c ---------- level 1_6 ----------", "color:red");

console.log(person);
let firstPerson = person.shift();
console.log(firstPerson);
console.log(person);

console.log(friends);
let firstFriend = friends.shift();
console.log(firstFriend);
console.log(friends);

console.log(favoriteFood);
let firstFavoriteFood = favoriteFood.shift();
console.log(firstFavoriteFood);
console.log(favoriteFood);

// ! ++++++++++ Level 1_7

console.log("%c ---------- level 1_7 ----------", "color:red");

console.log(friends);
friends.unshift("Johannes", "Peter");
friends.push("Aaron", "Sven");
console.log(friends);

console.log(favoriteFood);
favoriteFood.unshift("Pita", "Gyros");
favoriteFood.push("Pommes", "Bratwurst");
console.log(favoriteFood);

// ! ++++++++++ Level 1_8

console.log("%c ---------- level 1_8 ----------", "color:red");

let destinations = ["Japan", "USA", "Kanada"];
console.log(destinations);
let slicedDestination = destinations.slice(0, 2);
console.log(slicedDestination);
console.log(destinations);

// ! ++++++++++ Level 1_10

console.log("%c ---------- level 1_10 ----------", "color:red");

const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

console.log(text);
let splitText = text.split(".");
console.log(splitText);
let splittext1 = text.split(" ");
console.log(splittext1);
let splittext2 = text.split("");
console.log(splittext2);
