// ! Return

function returnSomething() {
  return "Hello World";
  //Das werden wir nicht sehen
  console.log("Hallo Leute");
}
returnSomething();

function add(a, b) {
  let x = a + b;
  return x;
}

console.log(add(3, 5));

function addMore(c, d) {
  return c + d;
}

console.log(addMore(5, 10));

let num = 23;

function geradeUngerade(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(
  geradeUngerade(num)
    ? `die Zahl ${num} ist gerade`
    : `die Zahl ${num} ist nicht gerade`
);

// ! Arrow Function

// neu seit ES6

// ! ALt
const bootcampTime = "Vollzeit";

function whichBootcamp() {
  console.log(`Wir sind in dem ${bootcampTime} Bootcamp`);
}
whichBootcamp();

// ! Neu
const whichBootcampNew = () => {
  console.log(`Wir sind in dem ${bootcampTime} Bootcamp`);
};

whichBootcampNew();

// ! ALt Kurzschreibform

const whichBootcampKurz = (superName) =>
  console.log(`Wir sind in dem ${superName} Bootcamp`);

whichBootcampKurz("Supercode");

// ! Scope

// Globaler Scope

let firstName = "Magda";

const getName = () => {
  console.log(`Hallo ${firstName}`);
};
getName();

console.log(superBootcamp);
// Localer Scope

const superBootcamp = () => {
  const superBootcampName = "Vollzeit von Supercode";
};

superBootcamp(superBootcampName);
