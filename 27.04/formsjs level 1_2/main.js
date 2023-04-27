function date() {
  let number = Number(document.querySelector(".number").value);
  let alter = document.querySelector(".alter");
  console.log(number);
  console.log(2023 - number);
  alter.innerHTML = "Alter : " + (2023 - number);
}
