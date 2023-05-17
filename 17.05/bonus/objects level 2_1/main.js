let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

// ! ++++++++++ name

let names = [];

edelMetallPreise.forEach((obj) => {
  names.push(obj.name);
});

console.log(names);

// ! ++++++++++ preise

let preise = [];

edelMetallPreise.forEach((obj) => {
  preise.push(obj.preiseGramEuro);
});

console.log(preise);

// ! ++++++++++ veraenderung

let veraenderung = [];

edelMetallPreise.forEach((obj) => {
  veraenderung.push(obj.veraenderung);
});

console.log(veraenderung);

// ! ++++++++++ filter

let result = edelMetallPreise.filter(fifty);

function fifty(obj) {
  return obj.preiseGramEuro > 50;
}

console.log(result);

// ! ++++++++++ Tabelle

let table = document.querySelector("table");

for (i = 0; i < names.length; i++) {
  let newItem = document.createElement("tr");
  let newName = document.createElement("td");
  let newPrice = document.createElement("td");
  let newChange = document.createElement("td");
  let newNameText = document.createTextNode(names[i]);
  let newPriceText = document.createTextNode(preise[i]);
  let newChangeText = document.createTextNode(veraenderung[i]);
  // ! ++++++++++ New Name
  newName.appendChild(newNameText);
  newItem.appendChild(newName);
  // ! ++++++++++ New Price
  newPrice.appendChild(newPriceText);
  newItem.appendChild(newPrice);
  // ! ++++++++++ New Name
  newChange.appendChild(newChangeText);
  newItem.appendChild(newChange);
  table.appendChild(newItem);
}
