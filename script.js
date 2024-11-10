// function get_city_name(){
//   const city_name = document.getElementById("city_name").value
//   getWeather
// }
// document.getElementsByClassName("material-symbols-outlined").addEventListener("click", getWeather);
async function getWeather() {
  const city = document.getElementById("city_name").value;
  const apiKey = "7c120808c72a5c1158b9606287d8a220";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
              // https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}&units=metric

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    
    const data = await response.json();
    
    document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
    document.getElementById("temp").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("description").innerText = `Weather: ${data.weather[0].description}`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    document.getElementById("weatherDisplay").classList.remove("hidden");
  } catch (error) {
    alert(error.message);
  }
}