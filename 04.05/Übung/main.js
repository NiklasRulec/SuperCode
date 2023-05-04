// ! String Trennmaschine

const davorOutput = document.querySelector(".davor");
const danachOutput = document.querySelector(".danach");

const trennen = () => {
  //Values auslesen
  const inputZeichen = document.querySelector(".zeichenkette").value;
  const trennZeichen = document.querySelector(".trennung").value;
  const vorneOdHinten = document.querySelector(
    "input[name='davor-danach']:checked"
  ).value;

  console.log({ inputZeichen }, { trennZeichen }, { vorneOdHinten });

  if (inputZeichen.includes(trennZeichen)) {
    //ermittelt den Index des Suchwortes
    const indexTrennung = inputZeichen.indexOf(trennZeichen);
    console.log({ indexTrennung });

    // Länge des Trennwortes
    const trennLength = trennZeichen.trennLength;
    console.log({ trennLength });

    // Index des SUchwortes plus Länge des Suchwortes
    const afterTrennwortIndex = indexTrennung + trennLength;
    console.log({ afterTrennwortIndex });

    if (vorneOdHinten == "davor") {
      const vordererTeil = inputZeichen.slice(0, indexTrennung);
      const hintererTeil = inputZeichen.slice(indexTrennung);
      console.log({ vordererTeil }, { hintererTeil });
      davorOutput.innerHTML = vordererTeil;
      danachOutput.innerHTML = hintererTeil;
    } else {
      const vordererTeil = inputZeichen.slice(0, afterTrennwortIndex);
      const hintererTeil = inputZeichen.slice(afterTrennwortIndex);
      console.log({ vordererTeil }, { hintererTeil });
      davorOutput.innerHTML = vordererTeil;
      danachOutput.innerHTML = hintererTeil;
    }
  } else {
    // Wort kann nicht gefunden werden
    davorOutput.innerHTML = "Fehler, das Wort konnte nicht gefunden werden.";
    danachOutput.innerHTML = "";
  }
};

// ! +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ! ++++++++++ NEUE THEMEN

// ! ++++++++++ Number Methoden

// ? toFixed()

// toFixed rundet auf oder ab. Wandelt Zahl in String um
const num1 = 14.3452432;
console.log(num1.toFixed());
console.log(typeof num1.toFixed());
// Als Argument können wir eine Zahl mitgeben, die die Anzahl der Nachkommastellen angibt
console.log(num1.toFixed(2));

// * Number()

const num2 = "223";
console.log(typeof num2); // string
console.log(Number(num2)); // 223

const num3 = "Magda";
console.log(Number(num3));

// ! ++++++++++ Math Object Methoden
// So sehen wir alle Methoden von Math

console.log(Math);

// * Math.round()
// die Math.round Methode rundet wie toFixed auf oder ab

const num4 = 14.5333;
console.log(Math.round(num4));

// * Math.ceil
// Rundet immer auf

const num5 = 14.000001;
console.log(Math.ceil(num5));

// * Math.floor
// Rundet immer ab

const num6 = 16.99999;
console.log(Math.floor(num6));

// * Math.random
// Gibt eine random Zahl aus

console.log(Math.random());

//Gibt uns eine gerundetete Zahl zwischen 1 und 10 aus

console.log(Math.round(Math.random() * 10));

// Gibt uns eine gerundete Zahl zwischen 1 und 11

console.log(Math.round(Math.random() * 10 + 1));

// Gibt uns eine gerundete Zahl zwischen 11 und 22

console.log(Math.ceil(Math.random() * 10 + 10));
