const apiKey = "d5d6b990ad42db5cc65fc4b4d21d3616";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherImag = document.querySelector(".weather-img");
const weathername = document.querySelector(".weathername");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404 ) {
      document.querySelector(".error").style.display = "block";
    } else {
        const data = await response.json();
        console.log(data);
  
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity-per").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-per").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".weathername").innerHTML = data.weather[0].description;
  
        if (data.weather[0].main == "Clouds") {
          weatherImag.src="./imag/cloudy-day.png";
        }
         else if (data.weather[0].main == "Smoke") {
          weatherImag.src="./imag/smoke.png";
        }
         else if (data.weather[0].main == "Rain") {
          weatherImag.src="./imag/rain.png";
        }
         else if (data.weather[0].main == "Snow") {
          weatherImag.src="./imag/snow.png";
        }
         else if (data.weather[0].main == "Clear") {
          weatherImag.src="./imag/birds.png";
        }
         else if (data.weather[0].main == "Storm") {
          weatherImag.src="./imag/storm.png";
        }
         else if (data.weather[0].main == "Sun") {
          weatherImag.src="./imag/sun.png";
        }
         else if (data.weather[0].main == "Wind") {
          weatherImag.src="./imag/wind.png";
        }
         else if (data.weather[0].main == "Haze") {
          weatherImag.src="./imag/haze.png";
        }

        document.querySelector(".error").style.display = "none";
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
  // console.log("unmar farooq");
})

console.log(data.weather[0].main);
