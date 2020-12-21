
function displayColor(colors) {
    console.log(colors);
    let myColorHtml = colors.map(color => {
    return `<div class="my-color" style="background-color: ${color.value}"></div>`

    }).join('')

    document.body.innerHTML = `<div class="my-colors">
     ${myColorHtml}
 </div>`
}



async function Getcolors(){
  const colorurl = await fetch("https://api.noopschallenge.com/hexbot?count=25")
  let result = await colorurl.json();
  let colors = result.colors;
  displayColor(colors);

}

Getcolors();