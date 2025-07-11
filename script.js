async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const output = document.getElementById('weatherOutput');
  output.innerHTML = 'Fetching weather...';

  const apiKey = 'YOUR_API_KEY'; 
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();

    const location = data.location.name + ', ' + data.location.country;
    const temp = data.current.temp_c + ' °C';
    const description = data.current.condition.text;

    output.innerHTML = `
      <h3>Weather in ${location}</h3>
      <p><strong>Temperature:</strong> ${temp}</p>
      <p><strong>Condition:</strong> ${description}</p>
    `;
  } catch (error) {
    output.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  }
}
