const bigNumOutput = document.querySelector(".big-num-output");
const keyOutput = document.querySelector(".key-output");
const keyCodeOutput = document.querySelector(".keycode-output");
const codeOutput = document.querySelector(".code-output");

function buttonPress(event) {
  let key = event.key;
  let keyCode = event.keyCode;
  let code = event.code;

  bigNumOutput.innerHTML = keyCode;
  keyOutput.innerHTML = key;
  keyCodeOutput.innerHTML = keyCode;
  codeOutput.innerHTML = code;
}
