let forecastRequest = new XMLHttpRequest();
let forecastURLstring='https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e4ca57df03907d58adc6aee8db5d3eb3';
forecastRequest.open('Get', forecastURLstring, true);
forecastRequest.send();

forecastRequest.onload =  function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log (forecastData);

	var listDate = [];
	var listTemperature= [];
	var listIcon = [];

	for (i=0; i < forecastData.list.length; ++i) {
		time = forecastData.list[i].dt_txt;
		if (time.includes("18:00:00")){

		var date= new Date(forecastData.list[i].dt * 1000);
		var month = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
		var day= ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var findDate = weekday[date.getDay()] + "<br>" + month[date.getMonth()] + ' ' + date.getDate();
		listDate.push(findDate);

		var temz = forecastData.list[i].main.temp;
		var temz = Math.round(temz);
		listTemperature.push(temz);

		var iconCode=forecastData.list[i].weather["0"].icon;
		var iconPath = "http://openweathermap.org/img/w/" + iconCode + ".png";
		listIcon.push(iconPath);
		}
		continue;
	}

	document.getElementById('day1').innerHTML = listDate[0];
	document.getElementById('day2').innerHTML = listDate[1];
	document.getElementById('day3').innerHTML = listDate[2];
	document.getElementById('day4').innerHTML = listDate[3];
	document.getElementById('day5').innerHTML = listDate[4];

	document.getElementById('icon1').src = listIcon[0];
	document.getElementById('icon2').src = listIcon[1];
	document.getElementById('icon3').src = listIcon[2];
	document.getElementById('icon4').src = listIcon[3];
	document.getElementById('icon5').src = listIcon[4];

	document.getElementById('temp1').innerHTML = listTemperature[0];
	document.getElementById('temp2').innerHTML = listTemperature[1];
	document.getElementById('temp3').innerHTML = listTemperature[2];
	document.getElementById('temp4').innerHTML = listTemperature[3];
	document.getElementById('temp5').innerHTML = listTemperature[4];
}




let forecastRequestFH = new XMLHttpRequest();
let forecastURLstringFH='https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=e4ca57df03907d58adc6aee8db5d3eb3';
forecastRequestFH.open('Get', forecastURLstringFH, true);
forecastRequestFH.send();

forecastRequestFH.onload =  function () {
    let forecastDataFH = JSON.parse(forecastRequestFH.responseText);
    console.log (forecastDataFH);

	var listDateFH = [];
	var listTemperatureFH= [];
	var listIconFH = [];

	for (i=0; i < forecastDataFH.list.length; ++i) {
		time = forecastDataFH.list[i].dt_txt;
		if (time.includes("18:00:00")){

		var dateFH= new DateFH(forecastDataFH.list[i].dt * 1000);
		var monthFH = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];
		var dayFH= ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var findDateFH = weekdayFH[dateFH.getDay()] + "<br>" + monthFH[dateFH.getMonth()] + ' ' + dateFH.getDate();
		listDateFH.push(findDateFH);

		var temzFH = forecastDataFH.list[i].main.temp;
		var temzFH = Math.round(temzFH);
		listTemperatureFH.push(temzFH);

		var iconCodeFH=forecastDataFH.list[i].weather["0"].icon;
		var iconPathFH = "http://openweathermap.org/img/w/" + iconCodeFH + ".png";
		listIconFH.push(iconPathFH);
		}
		continue;
	}

	document.getElementById('day1FH').innerHTML = listDateFH[0];
	document.getElementById('day2FH').innerHTML = listDateFH[1];
	document.getElementById('day3FH').innerHTML = listDateFH[2];
	document.getElementById('day4FH').innerHTML = listDateFH[3];
	document.getElementById('day5FH').innerHTML = listDateFH[4];

	document.getElementById('icon1FH').src = listIconFH[0];
	document.getElementById('icon2FH').src = listIconFH[1];
	document.getElementById('icon3FH').src = listIconFH[2];
	document.getElementById('icon4FH').src = listIconFH[3];
	document.getElementById('icon5FH').src = listIconFH[4];

	document.getElementById('temp1FH').innerHTML = listTemperatureFH[0];
	document.getElementById('temp2FH').innerHTML = listTemperatureFH[1];
	document.getElementById('temp3FH').innerHTML = listTemperatureFH[2];
	document.getElementById('temp4FH').innerHTML = listTemperatureFH[3];
	document.getElementById('temp5FH').innerHTML = listTemperatureFH[4];
}
