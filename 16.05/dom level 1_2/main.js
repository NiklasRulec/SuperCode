let data = document.querySelectorAll(".example");
console.log(data);

function myFunction() {
  data.forEach((elm) => {
    if (elm.style.backgroundColor == "black") {
      elm.style.backgroundColor = "#666";
    } else {
      elm.style.backgroundColor = "black";
    }
  });
}
