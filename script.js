function getWeather() {
  let city = document.getElementById("cityInput").value;
  let apiKey = "6f93d853615f426694d92943250408";
  let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      let temp = data.current.temp_c;
      let condition = data.current.condition.text;
      let icon = data.current.condition.icon;

      document.getElementById("weatherResult").innerHTML = `
        <img src="https:${icon}" alt="Weather icon">
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${condition}</p>
      `;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
