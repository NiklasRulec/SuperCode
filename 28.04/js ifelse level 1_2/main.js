function weatherCheck() {
  let wetter = Number(document.querySelector(".input").value);
  const output = document.querySelector(".output");
  if (wetter == 10 || wetter == 9 || wetter == 8) {
    output.innerHTML = "Wetter ist super";
  } else if (wetter == 7 || wetter == 6) {
    output.innerHTML = "Wetter ist gut";
  } else if (wetter == 5 || wetter == 4 || wetter == 3) {
    output.innerHTML = "Wetter ist okay";
  } else if (wetter == 2 || wetter == 1 || wetter == 0) {
    output.innerHTML = "Wetter ist schlecht";
  } else {
    output.innerHTML = "Bitte einen Wert zwischen 0 und 10 eingeben";
  }
}
