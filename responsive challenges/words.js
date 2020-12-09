function spinWords(str){
  //TODO Have fun :)
   const words = [];
   words = str.split("")
 
   if(words.length >= 5){
     return str+= words.split("").reverse()  
     } else {
       return words
     }
}

console.log(spinWords("Hi my name is Rihaana"))