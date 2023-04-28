function greaterThan() {
  const output = document.querySelector(".output");
  if (Number(document.querySelector("#input").value) >= 18) {
    output.innerHTML = "Ja, Du kannst Shisha rauchen";
  } else {
    output.innerHTML = "Du darfst noch nicht Shisha rauchen";
  }
}
