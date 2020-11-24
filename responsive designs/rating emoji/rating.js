const box = document.getElementById("box")
const text = document.getElementById("text")

box.addEventListener("focus", function(){
    text.textContent = "Type a rating between 1 and 5"
})

box.addEventListener("focusout", function(){
    text.textContent = "Click here to give your rating"
})

// Write your code here 👇
emojiKey = {
    49 : '😴',
    50 : '☹️',
    51 : '😐',
    52 : '😊',
    53 : '😁'
}
let number = 0;
function moveText() {
    number += 20;
    text.style.top = number + 'px';
    text.style.bottom = number + 'px';     
}
box.addEventListener("keydown", function(evt) {
        text.textContent = emojiKey[evt.keyCode]
          
})

box.addEventListener("keyup", moveText)

    
  

