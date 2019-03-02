function doInputOutput(){
	var tempF= parseInt(document.getElementById('inputTemp').value);
	var speed= parseInt(document.getElementById('inputSpeed').value);
	var result=windChill(tempF, speed);
	document.getElementById('output').innerHTML=result;
}
	//Processing:
		//Take a temperature in Fahrenheit as a parameter
		//Take a wind speed in miles per hour as a parameter
		//Calculate the wind chill factor as a temperature in Fahrenheit
		//Return the wind chill factor in Fahrenheit
		
function windChill(tempF, speed) {
	chill = 35.74 + (0.6215*tempF)-(35.75*(Math.pow(speed, 0.16)) + (0.4275*tempF*Math.pow (speed, 0.16)));
	return chill;
    }
    