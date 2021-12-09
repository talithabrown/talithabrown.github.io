
// -------------------------populate current weather-----------------------------------------------------------

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c5142f0c59b758948afc826391c4d07a&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = Math.round(jsObject.wind.speed);

    // Calculate wind chill
    const temp = Math.round(jsObject.main.temp);
    const windSpeed = Math.round(jsObject.wind.speed);

    if (temp <= 50 && windSpeed > 3) {
        let windChill = 35.74+0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16

        document.getElementById("wind-chill").innerHTML = `${Math.round(windChill)} F`
    } 
    else {
        document.getElementById("wind-chill").innerHTML = "N/A"
    }

    });

//----------------------------------------------------------------------------------------------------------------

//--------------------------populate five day weather forcast table----------------------------------------------------

const date = new Date();
let dayNum = date.getDay() + 1
var weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
for (let i = 0; i < 5; i++) {
    if (dayNum > 6) {
        dayNum = dayNum - 7
    }
    document.getElementById(`weekday${i + 1}`).textContent = weekdays[dayNum]
    dayNum = dayNum + 1
}



const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c5142f0c59b758948afc826391c4d07a&units=imperial";

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    
    var num = 1
    for (let i = 0; i < jsObject.list.length; i++) {
        //let num = 1
        if (jsObject.list[i].dt_txt.includes('18:00:00')) {
            document.getElementById(`day${num}`).textContent = Math.round(jsObject.list[i].main.temp);

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';  // note the concatenation
            const desc = jsObject.list[i].weather[0].description;  // note how we reference the weather array
            document.getElementById(`icon${num}`).setAttribute('src', imagesrc);  // focus on the setAttribute() method
            document.getElementById(`icon${num}`).setAttribute('alt', desc);

            num = num + 1
        }
    }
   

    });

