// * Function Constructor

function Laptop(herstellerParam, modelParam, jahrParam, ausstattungParam) {
  this.hersteller = herstellerParam;
  this.model = modelParam;
  this.jahr = jahrParam;
  this.ausstattung = ausstattungParam;

  this.description = function () {
    console.log(
      `Der Hersteller ist ${this.hersteller} und das model ist ${this.model} aus dem Jahr ${this.jahr}`
    );
  };
}

// * Objekte die über einen Constructor erstellt werden, nennt man Instanz
const microsoftLaptop = new Laptop("Microsoft", "Surface", 2022, [
  "I5",
  "16gb",
]);

microsoftLaptop.description();

const macbook = new Laptop("Apple", "Macbook Air M2", 2022, ["M2", "16gb"]);

macbook.description();

// ! ++++++++++ Class Constructor ES6 ++++++++++

class Handy {
  constructor(herstellerParam, modelParam, jahrParam) {
    this.hersteller = herstellerParam;
    this.modell = modelParam;
    this.jahr = jahrParam;
  }
  description() {
    console.log(
      `${this.hersteller} hat das Modell ${this.modell} im Jahr ${this.jahr} released`
    );
  }
}

// * extends ist das Schlüsselwort für die vererbung
class IPhone extends Handy {
  constructor(herstellerParam, modelParam, jahrParam, gamesParam) {
    super(herstellerParam, modelParam, jahrParam);
    this.games = gamesParam;
  }
  airplay() {
    console.log("Airplay Funktion");
  }

  setHersteller(herstellerParam) {
    if (typeof herstellerParam === "string") {
      this.hersteller = herstellerParam;
    }
  }
  getHersteller() {
    return this.hersteller;
  }
}

const iPhone14 = new IPhone("Apple", "iphone14", 2022, ["Snake"]);
iPhone14.setHersteller("Microsoft");
iPhone14.setHersteller(50);
console.log(iPhone14);
iPhone14.description();
iPhone14.airplay();

// const iPhone = new Handy("Apple", "iPhone 14", 2022);
// const samsung = new Handy("Samsung", "S20", 2022);
// iPhone.description();

// iPhone.color = "red"; // ! das hier ist ein nono!!!

// console.log(iPhone);
// console.log(samsung);
