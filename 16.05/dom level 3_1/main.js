const background = document.querySelector("body");
let output = document.querySelector("#demo");
let count = 0;

const changeBackground = (color) => {
  background.style.backgroundColor = color;
  output.innerHTML = "Wir haben die Farbe " + count + " mal geändert";
  count++;
};

// ! ##############

function changeHandle() {
  let value1 = Number(document.getElementById("rot").value);
  let value2 = Number(document.getElementById("grun").value);
  let value3 = Number(document.getElementById("blau").value);
  console.log(value1, value2, value3);
  let color = "rgb(" + value1 + "," + value2 + "," + value3 + ")";
  console.log(color);
  background.style.backgroundColor = color;
  output.innerHTML =
    "Aktueller rgb Farbcode : " +
    color +
    " und Hex Code = " +
    rgbToHex(value1, value2, value3);
}

// ! ##############

function toHex(input) {
  let hex = input.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(value1, value2, value3) {
  return "#" + toHex(value1) + toHex(value2) + toHex(value3);
}

console.log(rgbToHex(0, 51, 255));
