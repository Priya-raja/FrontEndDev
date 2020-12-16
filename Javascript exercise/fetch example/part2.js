const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/photos/1') // Add the URL
	.then(res => res.json()) // Process the data
	.then(json => { 
		var img = document.createElement('img');
		img.src = json.url; // Set the image source to the image URL value
		body.document.appendChild(img);
	}); 