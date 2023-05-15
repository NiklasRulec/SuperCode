let output = document.querySelector(".output");
let selection = document.querySelector("#my-select");

selection.addEventListener("change", () => {
  output.innerText = "Sie haben ausgewählt " + selection.value;
});
