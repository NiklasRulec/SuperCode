let btn = document.querySelector(".active");
let container = document.querySelectorAll("li");

btn.addEventListener("click", () => {
  let object = document.getElementsByTagName("li");
  console.log({ object });
  object[0].style.backgroundColor = "#f6c89f";
  object[1].style.backgroundColor = "#ffe7d1";
  object[2].style.backgroundColor = "#4b8e8d";
  btn.style.backgroundColor = "#396362";
  container.style.color = "#333";
});
