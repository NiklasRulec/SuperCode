// # Value auslesen

function getInputValue() {
  const output = document.querySelector(".output");
  let name = document.querySelector(".name").value;
  let age = Number(document.querySelector(".num").value);
  let range = Number(document.querySelector(".range").value);
  let checkbox = document.querySelector(".checkbox").checked;
  let date = document.querySelector(".bday").value;

  console.log(name, age, range, checkbox, date);

  output.innerHTML +=
    name + " " + age + " " + range + " " + checkbox + " " + date;
}

// * Add, Remove & Toggle Classlist

// * Toggle
function getDark() {
  const wrapper = document.querySelector("body");
  wrapper.classList.toggle("dark");
}

// * Add

function addClass() {
  const headline = document.querySelector(".add");
  headline.classList.add("big");
}

// * Remove

function removeClass() {
  const headline2 = document.querySelector(".remove");
  headline2.classList.remove("remove");
}
