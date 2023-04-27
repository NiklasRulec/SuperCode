function clickMe() {
  const ergebnis = document.querySelector(".ergebnis");
  let numberValue = Number(document.querySelector(".number").value);

  console.log(numberValue);

  console.log(numberValue * 2);
  ergebnis.innerHTML += numberValue * 2;
}
