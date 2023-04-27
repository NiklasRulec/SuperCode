function changeBackground() {
  let value1 = Number(document.getElementById("red").value);
  let value2 = Number(document.getElementById("green").value);
  let value3 = Number(document.getElementById("blue").value);
  console.log(value1, value2, value3);
  let color = "rgb(" + value1 + "," + value2 + "," + value3 + ")";
  console.log(color);
  document.getElementById("background").style.backgroundColor = color;
}
