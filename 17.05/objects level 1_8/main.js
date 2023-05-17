let studentData = [
  {
    name: "Alex",
    age: 23,
    coop: false,
    address: {
      street: "Don Valley Business Park",
      city: "Toronto",
      postalCode: "ONM3C3E5",
    },
    emails: ["alex69@gmail.com", "alex123@yahoo.com"],
  },
  {
    name: "Sandra",
    age: 22,
    coop: true,
    address: {
      street: "34 Lawrence Ave",
      city: "Toronto",
      postalCode: "ONM3C0E5",
    },
    emails: ["sandra@gmail.com", "sandra@yahoo.com"],
  },
];

// ! +++++++++ map()
console.log("%c ---------- map() ----------", "color:red");

studentData.map((obj) => {
  console.log(obj.name);
  console.log(obj.coop);
  console.log(obj.address.city);
  console.log(obj.emails);
});

// ! +++++++++ forEach()
console.log("%c ---------- forEach() ----------", "color:red");

studentData.forEach((obj) => {
  console.log(obj.name);
  console.log(obj.coop);
  console.log(obj.address.city);
  console.log(obj.emails);
});
