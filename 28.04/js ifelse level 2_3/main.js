function checkVal() {
  let number = Number(document.querySelector(".input").value);
  let differenz = Number(number - 27);

  if (number > 27) {
    console.log("multiplizier " + differenz * 2);
  } else {
    console.log("");
  }
}
