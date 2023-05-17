// ! ++++++++++ Daten

let myMusic = [
  {
    artist: "The Beatles",
    title: "Abbey Road",
    release_year: 1969,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    artist: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_year: 1978,
    medium: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_year: 1971,
    medium: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    artist: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_year: 1983,
    medium: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

// ! ++++++++++ Schleife

myMusic.forEach((obj) => {
  console.log(obj.artist);
  console.log(obj.title);
  if (obj.release_year < 1975) {
    console.log(obj.release_year);
  }
  console.log(obj.medium);
  document.write(obj.artist + "<br>");
  document.write(obj.title + "<br>");
  if (obj.release_year < 1975) {
    document.write(obj.release_year + "<br>");
  }
  document.write(obj.medium + "<br>");
  document.write(" " + "<br>");
});
