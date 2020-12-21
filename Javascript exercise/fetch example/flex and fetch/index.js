
function displayColor(colors) {
    console.log(colors);
    let myColorHtml = colors.map(color => {
    return `<div class="my-color" style="background-color: ${color.value}"></div>`

    }).join('')

    document.body.innerHTML = `<div class="my-colors">
     ${myColorHtml}
 </div>`
}



async function Getcolors(countColors){
  const colorurl = await fetch(`https://api.noopschallenge.com/hexbot?count=${countColors}`)
  let result = await colorurl.json();
  let colors = result.colors;
  displayColor(colors);

}
let countColors = 100;
Getcolors(countColors);