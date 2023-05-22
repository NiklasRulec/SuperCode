const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

function date() {
  let date1 = new Date();
  day.innerHTML = date1.getDate() + "/";
  month.innerHTML = date1.getMonth() + "/";
  year.innerHTML = date1.getFullYear();
}

date();
