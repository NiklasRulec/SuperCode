const btn = document.querySelector("#enter");
let target = document.querySelector("ul");

btn.addEventListener("click", () => {
  let userInput = document.querySelector("#userinput").value;
  console.log({ userInput });
  let newItem = document.createElement("li");
  let newText = document.createTextNode(userInput);
  newItem.appendChild(newText);
  target.appendChild(newItem);
});
