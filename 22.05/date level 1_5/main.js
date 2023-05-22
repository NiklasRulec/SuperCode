let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

// ! ++++++++++

const monatsName = (datum) => {
  let newDatum = datum.split(",");
  let monthName = Number(newDatum[1] - 1);
  return list[monthName];
};

console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli
