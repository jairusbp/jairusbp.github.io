let weatherRequest = new XMLHttpRequest();
let apiURLstring='https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e4ca57df03907d58adc6aee8db5d3eb3';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log (weatherData);

    
    document.getElementById('high-temp').innerHTML=weatherData.main.temp;
    document.getElementById('current-humidity').innerHTML=weatherData.main.humidity;
    document.getElementById('current-windSpeed').innerHTML=weatherData.wind.speed;
    document.getElementById('current-weather').innerHTML=weatherData.weather[0].main;
    

    var wChill = Math.round((0.0817*(3.71*(Math.pow(weatherData.wind.speed, 0.5))+5.81-0.25*weatherData.wind.speed)*(weatherData.main.temp_max-91.4)+91.4));
    
    document.getElementById('windChill').innerHTML=wChill;

    document.getElementById('wind-direction').innerHTML=weatherData.wind.deg;
}



let weatherRequestFH = new XMLHttpRequest();
let apiURLstringFH='https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=e4ca57df03907d58adc6aee8db5d3eb3';
weatherRequestFH.open('Get', apiURLstringFH, true);
weatherRequestFH.send();

weatherRequestFH.onload =  function () {
    let weatherDataFH = JSON.parse(weatherRequestFH.responseText);
    console.log (weatherDataFH);

    document.getElementById('high-tempFH').innerHTML=weatherDataFH.main.temp;
    document.getElementById('current-humidityFH').innerHTML=weatherDataFH.main.humidity;
    document.getElementById('current-windSpeedFH').innerHTML=weatherDataFH.wind.speed;
    document.getElementById('current-weatherFH').innerHTML=weatherDataFH.weather[0].main;

    var wChillFH = Math.round((0.0817*(3.71*(Math.pow(weatherDataFH.wind.speed, 0.5))+5.81-0.25*weatherDataFH.wind.speed)*(weatherDataFH.main.temp_max-91.4)+91.4));
    
    document.getElementById('windChillFH').innerHTML=wChillFH;

    document.getElementById('wind-directionFH').innerHTML=weatherDataFH.wind.deg;
}



let weatherRequestSS = new XMLHttpRequest();
let apiURLstringSS='https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=e4ca57df03907d58adc6aee8db5d3eb3';
weatherRequestSS.open('Get', apiURLstringSS, true);
weatherRequestSS.send();

weatherRequestSS.onload =  function () {
    let weatherDataSS = JSON.parse(weatherRequestSS.responseText);
    console.log (weatherDataSS);

    document.getElementById('high-tempSS').innerHTML=weatherDataSS.main.temp;
    document.getElementById('current-humiditySS').innerHTML=weatherDataSS.main.humidity;
    document.getElementById('current-windSpeedSS').innerHTML=weatherDataSS.wind.speed;
    document.getElementById('current-weatherSS').innerHTML=weatherDataSS.weather[0].main;

    var wChillSS = Math.round((0.0817*(3.71*(Math.pow(weatherDataSS.wind.speed, 0.5))+5.81-0.25*weatherDataSS.wind.speed)*(weatherDataSS.main.temp_max-91.4)+91.4));
    
    document.getElementById('windChillSS').innerHTML=wChillSS;
    document.getElementById('wind-directionSS').innerHTML=weatherDataSS.wind.deg;
}
