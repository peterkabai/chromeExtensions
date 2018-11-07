let page = document.getElementById('buttonDiv');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function constructOptions(kButtonColors) {
	for (let item of colors) {
		let button = document.createElement('button');
		button.style.backgroundColor = item;
		button.addEventListener('click', function() {
			chrome.storage.sync.set({color: item}, function() {
				document.getElementById("text").style.color = item
			})
		});
		page.appendChild(button);
	}
}

constructOptions(colors);