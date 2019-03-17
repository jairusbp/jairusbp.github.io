let weatherRequest = new XMLHttpRequest();
let apiURLstring='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e4ca57df03907d58adc6aee8db5d3eb3';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log (weatherData);

    document.getElementById('high-temp').innerHTML=weatherData.main.temp_max;
    document.getElementById('current-humidity').innerHTML=weatherData.main.humidity;
    document.getElementById('current-windSpeed').innerHTML=weatherData.wind.speed;
    document.getElementById('current-weather').innerHTML=weatherData.weather[0].main;

    var wChill = Math.round((0.0817*(3.71*(Math.pow(weatherData.wind.speed, 0.5))+5.81-0.25*weatherData.wind.speed)*(weatherData.main.temp_max-91.4)+91.4));
    
    document.getElementById('windChill').innerHTML=wChill;
}
