const fetch = require("node-fetch");
fetch('https://www.positivityblog.com/').then( response => {
    console.log(response.text())
})
.then (data => {
    console.log(data)
})