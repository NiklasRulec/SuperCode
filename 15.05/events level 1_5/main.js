let counter = 0;

const clickBtn = document.querySelector("#clickMe");

clickBtn.addEventListener("click", () => {
  counter++;
  clickBtn.innerHTML = "Click me: " + counter;
});
