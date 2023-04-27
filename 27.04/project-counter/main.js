let number = document.querySelector(".number");
let count = 0;
let plus1 = document.querySelector(".plus1");
let minus1 = document.querySelector(".minus1");
let plus10 = document.querySelector(".plus10");
let minus10 = document.querySelector(".minus10");
let plus100 = document.querySelector(".plus100");
let minus100 = document.querySelector(".minus100");
let reset = document.querySelector(".reset");
let mal2 = document.querySelector(".mal2");

plus1.addEventListener("click", () => {
  count++;
  console.log(count);
  number.innerHTML = count;
});

minus1.addEventListener("click", () => {
  count--;
  console.log(count);
  number.innerHTML = count;
});

plus10.addEventListener("click", () => {
  count = count + 10;
  console.log(count);
  number.innerHTML = count;
});

minus10.addEventListener("click", () => {
  count = count - 10;
  console.log(count);
  number.innerHTML = count;
});

plus100.addEventListener("click", () => {
  count = count + 100;
  console.log(count);
  number.innerHTML = count;
});

minus100.addEventListener("click", () => {
  count = count - 100;
  console.log(count);
  number.innerHTML = count;
});

reset.addEventListener("click", () => {
  count = 0;
  console.log(count);
  number.innerHTML = count;
});

mal2.addEventListener("click", () => {
  count = count * 2;
  console.log(count);
  number.innerHTML = count;
});
