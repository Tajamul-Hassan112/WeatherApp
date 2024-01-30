const apiKey = "f2d6681411f105b29b42f203f4958d21";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const searchBox=document.querySelector(".nav input");
  const searchButton=document.querySelector(".nav i");

async function checkWeather(city) {
  const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
  document.querySelector(".per").innerHTML=data.main.humidity + "%";
  document.querySelector(".windspeed").innerHTML=data.wind.speed + "km/h";
}
searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
}
);
