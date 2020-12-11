const fetch = require("node-fetch");
fetch('https://jsonplaceholder.typicode.com/comments',{
     method: "POST",
     body: JSON.stringify({
        postId: 1,
        name: 'Dylan',
        email: 'dylansemail310@gmail.com',
        body: 'That was dope!'
    })
})
.then(response => response.json())
.then(data => console.log(data))