// const fetch = require("node-fetch");
// fetch('https://jsonplaceholder.typicode.com/photos/1') // Add the URL
// 	.then(res => res.json()) // Process the data
// 	.then(json => { 
// 		var img = document.createElement('img');
// 		img.src = json.url; // Set the image source to the image URL value
// 		body.document.appendChild(img);
// 	}); 

	// 
	async function getPost() {
		const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts/1')
		const posts = await postPromise.json();
		const html = `
		<h1>${posts.title}</h1>
		<p>${posts.body}</p>
		`
		;
		document.body.innerHTML = html;
	}
	
	getPost();
	