let counter = 0;

const btn = document.querySelector("button");
const container = document.querySelector(".umwickeln");

btn.addEventListener("click", () => {
  let newItem = document.createElement("div");
  newItem.textContent = counter;
  newItem.classList.add("rechteck");
  if (
    counter == 0 ||
    counter == 10 ||
    counter == 20 ||
    counter == 30 ||
    counter == 40 ||
    counter == 50
  ) {
    newItem.classList.add("weiss");
  }
  container.appendChild(newItem);
  counter++;
});
