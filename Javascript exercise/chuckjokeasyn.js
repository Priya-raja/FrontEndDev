const urlApi = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data)
}

getJoke();