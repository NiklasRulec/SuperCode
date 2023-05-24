const startTime = () => {
  let date = new Date();
  let heute =
    String(date.getDate()) +
    "." +
    String(date.getMonth() + 1) +
    "." +
    String(date.getFullYear());
  let std = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  document.getElementById(
    "txt"
  ).innerHTML = `Datum : ${heute}, Stunde : ${std}, Minute : ${min}, Sekunde : ${sec}`;
};

setInterval(startTime, 1000);
