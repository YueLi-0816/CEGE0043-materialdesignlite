function trackAndCircle() {
	trackLocation();
	//addPointLinePoly();
	//getEarthquakes();
	//getFormData();
	//getFormData2();
	//getFormData3();
	getPort();
	loadW3HTML();
}

function startup() {
	document.addEventListener('DOMContentLoaded', function() {
		trackAndCircle ();
		
	}, false);
}

function loadW3HTML() {
		w3.includeHTML();
	}