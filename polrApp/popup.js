let button = document.getElementById("button");
let text = document.getElementById("output");
let urlValue = "";

document.addEventListener('DOMContentLoaded', function() {
   let linkClicked = document.getElementById("output");
   linkClicked.addEventListener("click", linkWasCLicked);
})

function linkWasCLicked() {
	chrome.tabs.create({active: true, url: urlValue});
}

button.onclick = function(element) {
	const address = document.getElementById("address").value	
	const Http = new XMLHttpRequest();
	let url='https://api.polr.app/API/getPollingLocation?address='+address;

	Http.responseType = 'json';
	Http.open("GET", url, true);
	Http.onload  = function() {
		let c = Http.response[0].address.city;
		let ln = Http.response[0].address.locationName;
		let l = Http.response[0].address.line1;
		let s = Http.response[0].address.state;
		let z = Http.response[0].address.zip;
		let addressString = ln + "<br>" + l + "<br>" + c + "<br>" + s + "<br>" + z + "<br><span style='color:blue;'>(click for directions)</span>";
		text.innerHTML = addressString;
		urlValue = "https://www.google.com/maps/place/" + l + "+" + c + "+" + s + "+" + z;
	};
	Http.send()
}