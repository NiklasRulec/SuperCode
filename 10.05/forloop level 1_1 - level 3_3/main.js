// ! ++++++++++ level 1_1 ++++++++++
console.log("%c ++++++++++ level 1_1 ++++++++++", "color:red");

for (let i = 0; i <= 10; i++) {
  console.log("Hello World + " + i);
}

// ! ++++++++++ level 1_2 ++++++++++
console.log("%c ++++++++++ level 1_2 ++++++++++", "color:red");

let numArray = [];

for (i = 0; i <= 10; i++) {
  numArray.push(i);
}

console.log(numArray);

// ! ++++++++++ level 1_4 ++++++++++
console.log("%c ++++++++++ level 1_4 ++++++++++", "color:red");

let names = [
  "Freddy",
  "Steffen",
  "Finn",
  "Julia",
  "Farid",
  "Christian",
  "Sergio",
];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// ! ++++++++++ level 2_1 ++++++++++
console.log("%c ++++++++++ level 2_1 ++++++++++", "color:red");

let returnArray = [];

function imageArray() {
  for (let i = 001; i <= 100; i++) {
    returnArray.push("image_" + i + ".jpg");
  }
  console.log(returnArray);
}

imageArray();

// ! ++++++++++ level 2_2 ++++++++++
console.log("%c ++++++++++ level 2_2 ++++++++++", "color:red");

function loopFunction() {
  let numInput = document.querySelector(".numinput").value;
  let arrayO = [];
  for (let i = 1; i <= numInput; i++) {
    arrayO += "o";
  }
  arrayO.toString();
  console.log(arrayO);
  document.querySelector(".output").innerHTML = "L" + arrayO + "p";
}

// ! ++++++++++ level 3_2 ++++++++++
console.log("%c ++++++++++ level 3_2 ++++++++++", "color:red");

let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i <= numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j == 0) {
      document.write(
        numArr[i] +
          " lässt sich durch " +
          j +
          " teilen. " +
          "Das Ergebnis lautet " +
          numArr[i] / j +
          "."
      );
      document.write("<br>");
    }
  }
}

// ! ++++++++++ level 3_3 ++++++++++
console.log("%c ++++++++++ level 3_3 ++++++++++", "color:red");

function loopFunction2() {
  let numInput = document.querySelector(".numinput").value;
  let arrayO = [];
  //   ! ++++++++++ Zahl gerade und gößer als 0
  if (numInput > 0 && numInput % 2 == 0) {
    for (let i = 1; i <= numInput; i++) {
      arrayO += "o";
    }
    arrayO.toString();
    console.log(arrayO);
    document.querySelector(".output").innerHTML = "L" + arrayO + "p";
    //   ! ++++++++++ Zahl ungerade und gößer als 0
  } else if (numInput > 0 && numInput % 2 !== 0) {
    for (let i = 1; i <= numInput; i++) {
      i % 2 ? (arrayO += "o") : (arrayO += "0");
    }
    arrayO.toString();
    console.log(arrayO);
    document.querySelector(".output").innerHTML = "L" + arrayO + "p";
    //   ! ++++++++++ Zahl kleiner als 0
  } else if (numInput <= 0) {
    document.querySelector(".output").innerHTML =
      "Error. Eingabe muss gößer als 0 sein";
  }
}
