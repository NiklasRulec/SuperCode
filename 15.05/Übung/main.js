function clickFunction(element) {
  console.log("User wählt : " + element);
}

// ! ########################################################

const output = document.querySelector("#hello-output");

const sayHello = () => {
  output.innerHTML = "Hallo Kurs";
};
