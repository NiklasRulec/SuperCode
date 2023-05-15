const clickBtn = document.querySelector("#button");
let selectedColor = document.querySelector("#farbeAuswahlen");
let bodyBg = document.querySelector("body");

clickBtn.addEventListener("click", () => {
  event.preventDefault();
  console.log(selectedColor.selectedIndex);
  let newBgColor = String(selectedColor.value.toLowerCase().replace(/\s/g, ""));
  console.log(newBgColor);
  bodyBg.style.backgroundColor = newBgColor;
});
