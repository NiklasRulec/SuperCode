const deleteButton = document.querySelector("#button");
let selection = document.querySelector("#farbeAuswahlen");

deleteButton.addEventListener("click", () => {
  event.preventDefault();
  selection.remove(selection.selectedIndex);
});
