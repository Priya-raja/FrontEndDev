const fetch = require('node-fetch')
async function getPosts () {
    const postPromise = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await postPromise.json();
    posts.forEach( post => {
        const title = post.title;
        const body = post.body;
        console.log(title);
        console.log(body);
    })
}
getPosts();


