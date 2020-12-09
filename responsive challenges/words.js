function spinWords(str){
  //TODO Have fun :)
   
   const words = str.split(" ");
   const result = [];
   
   for (let i= 0; i<=words.length-1; i++){
      if(words[i].length>=5){
        result.push(words[i].split('').reverse().join(''))     
      } else {
        result.push(words[i])
      }
    
   
}
return result.join(' ')
}
console.log(spinWords("Hi my name is Rihaana"));