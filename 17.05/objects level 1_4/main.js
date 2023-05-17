let unsereHaustiere = [
  {
    tiertyp: "Katze",

    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[0].names);
console.log(unsereHaustiere[1].names);
unsereHaustiere[1].names[0] = "Balu";
unsereHaustiere[1].names[1] = "Snoopy";
unsereHaustiere[1].names[2] = "Polo";
console.log(unsereHaustiere[1].names);
