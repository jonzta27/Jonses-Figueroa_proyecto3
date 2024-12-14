async function buscar_clima() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Caracas,Venezuela&appid=3c8a7f5a0dd5eedd3d16fc06726bc9b9&lang=es&units=metric')
    return await response.json();
}


    async function principal() {
const infoClima = await buscar_clima();
const clima = infoClima.weather[0].main;
const descripcion = infoClima.weather[0].description;
const temperatura = infoClima.main.temp;
const sens_term = infoClima.main.feels_like;
const humedad = infoClima.main.humidity;
const presion = infoClima.main.pressure;
const latitud = infoClima.coord.lat;
const longitud = infoClima.coord.lon;
const icono = infoClima.weather[0].icon;

const iconoUrl = `https://openweathermap.org/img/wn/${icono}.png`

document.getElementById('clima').innerText = `Clima: ${clima}`;    
document.getElementById('descripcion').innerText = `Descripción: ${descripcion}`;
document.getElementById('temperatura').innerText = `Temperatura: ${temperatura}°C`;
document.getElementById('sensacion-termica').innerText = `Sensación Térmica: ${sens_term}°C`;
document.getElementById('humedad').innerText = `Humedad: ${humedad}%`;
document.getElementById('presion').innerText = `Presión: ${presion} hPa`;
document.getElementById('latitud').innerText = `Latitud: ${latitud}`;
document.getElementById('longitud').innerText = `Longitud: ${longitud}`;
document.getElementById('icono').src=iconoUrl
}

principal();



