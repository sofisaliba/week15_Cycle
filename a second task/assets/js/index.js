document.addEventListener('DOMContentLoaded', function () {
const cities = ['Brussel', 'Paris', 'London', 'Barcelona', 'Moscow', 'Minsk'];
const temperatures = [];

for (const city of cities) {
    const temperature = parseFloat(prompt(`Введите тумпературу для ${city}: `)); 
    temperatures.push(temperature);
}

const temperatureList = document.getElementById('temperature_list');
let mintemperature = Infinity;
let maxtemperature = -Infinity;

for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const temperature = temperatures[i];
    const item = document.createElement('li');
item.textContent = `${city}: ${temperature}°C`; 
temperatureList.appendChild(item);

if (temperature < mintemperature) {
    mintemperature = temperature;
}

if (temperature > maxtemperature) {
    maxtemperature = temperature;
}
}

const info = document.createElement('li');
info.textContent = `Минимальная температура: ${mintemperature}°C, Максимальная температура: ${maxtemperature}°C`;
temperatureList.appendChild(info);

});


