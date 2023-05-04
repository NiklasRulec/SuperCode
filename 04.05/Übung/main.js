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
