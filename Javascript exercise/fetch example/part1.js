const fetch = require("node-fetch");
// fetch('https://www.positivityblog.com/').then( response => {
//     console.log(response.text())
// })
// .then (data => {
//     console.log(data.json())
// })

fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then( res => {throw 404} )
    .then( json => {
        json.forEach( person => {
            const div = document.createElement('div');
            div.innerHTML = `${person.name} is ${person.age}`;
            document.body.appendChild(div);
        })
    })
    .catch(err => console.log(err));