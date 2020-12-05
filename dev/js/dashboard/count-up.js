/*
Change the counter speed for how fast your want your number to go up. 1000 is equal to 1 second

1000 = 1 second
500 = 1/2 second
250 = 1/4 second
*/
var counterSpeed = 100;

// Set this number you want your counter to count up to. Default is 20
var topSpeed = 80;

// If yu don't want your speed to start at 0, change it here. Default is 0.
var speedNumber = 0;

var myVar = setInterval(speedCounter, counterSpeed);

export function speedCounter() {
	if (speedNumber < topSpeed) {
		speedNumber++;
		document.getElementById("speedTag").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;
}