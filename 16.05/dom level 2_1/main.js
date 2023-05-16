let btn = document.querySelector(".active");
let target = document.querySelector("#navHome");

btn.addEventListener("click", () => {
  console.log("click");
  target.style.backgroundColor = "pink";
  target.style.color = "black";
  target.innerText = "emoH";
  target.style.fontFamily = "Arial";
});
