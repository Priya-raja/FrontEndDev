const fetch = require("node-fetch");
fetch('https://www.positivityblog.com/').then( response => {
    console.log(response.text())
})
.then (data => {
    console.log(data.json())
})

fetch('people.json')
    .then( res => res.json())
    .then( json => {
        json.forEach( person => {
            const div = document.createElement('div');
            div.innerHTML = `${person.name} is ${person.age}`;
            document.body.appendChild(div);
        })
    })