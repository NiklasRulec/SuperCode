function checkAirQuality() {
  const aqi = document.querySelector(".aqi");
  let quality = Number(document.querySelector(".input").value);
  const background = document.querySelector("section");
  const output = document.querySelector(".output");
  const output2 = document.querySelector(".output2");

  if (quality <= 50) {
    aqi.innerHTML = "AQI =" + quality;
    output.innerHTML = "Level of health concern: Good ";
    output2.innerHTML = "Level of health effect: Little or no risk";
    background.style.backgroundColor = "green";
  } else if (quality >= 50 && quality <= 100) {
    aqi.innerHTML = "AQI =" + quality;
    output.innerHTML = "Level of health concern: Moderate";
    output2.innerHTML = "Level of health effect: Acceptable quality";
    background.style.backgroundColor = "orange";
  } else if (quality >= 100 && quality <= 150) {
    aqi.innerHTML = "AQI =" + quality;
    output.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups ";
    output2.innerHTML =
      "Level of health effect: Generable publics not likely affected";
    background.style.backgroundColor = "red";
  }
}
