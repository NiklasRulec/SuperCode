function searchValue() {
  let searchInput = String(document.querySelector("#search-input").value);
  console.log(searchInput);
  let newArticle = String(document.querySelector("article").innerText);
  console.log(newArticle);
  newArticle = newArticle.replaceAll(
    searchInput,
    "<span>" + searchInput + "</span>"
  );
  console.log(newArticle);
  document.querySelector("article").innerHTML = newArticle;

  let highlighted = document.querySelectorAll("span");

  highlighted.forEach((span) => {
    span.classList.add("highlight");
  });
}
