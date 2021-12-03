

const temp = parseInt(document.querySelector("#temp").textContent)
const windSpeed = parseInt(document.querySelector("#wind-speed").textContent)

if (temp <= 50 && windSpeed > 3) {
  let windChill = 35.74+0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16

  document.getElementById("wind-chill").innerHTML = `${Math.round(windChill)} F`

} else {
  document.getElementById("wind-chill").innerHTML = "N/A"
}