function clickMe() {
  const output = document.querySelector(".output");
  let number1 = Number(document.querySelector(".num1").value);
  let number2 = Number(document.querySelector(".num2").value);
  console.log(number1);
  console.log(number2);
  console.log(number1 - number2);
  output.innerHTML = "Die Differenz ist = " + (number1 - number2);
}
