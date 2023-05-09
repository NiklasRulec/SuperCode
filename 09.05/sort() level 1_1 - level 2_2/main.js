// ! ++++++++++ Level 1_1 ++++++++++

console.log("%c ----- Level 1_1 -----", "color:red");

let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

function Sortierung() {
  languages.sort();
  console.log(languages);
}

Sortierung();

// ! ++++++++++ Level 1_2 ++++++++++

console.log("%c ----- Level 1_2 -----", "color:red");

let languages2 = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

function Sortierung2() {
  languages2.sort();
  languages2.reverse();
  console.log(languages2);
}

Sortierung2();

// ! ++++++++++ Level 1_3 ++++++++++

console.log("%c ----- Level 1_3 -----", "color:red");

var numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort((a, b) => a - b);
console.log(numArray1);

// ! ++++++++++ Level 2_2 ++++++++++

console.log("%c ----- Level 2_2 -----", "color:red");

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort((a, b) => a - b);
console.log(numArray2);
