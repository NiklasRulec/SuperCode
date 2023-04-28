function adult() {
  let age = Number(document.querySelector(".inputage").value);
  console.log(age);
  const output = document.querySelector(".output");
  if (age >= 18) {
    output.innerHTML = "volljährig";
  } else {
    output.innerHTML = "minderjährig";
  }
}
