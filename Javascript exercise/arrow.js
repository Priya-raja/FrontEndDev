function eatBreakfast() {

    return "I am eating eggs"
}


const lunch = function() {

    return "I will eat rice"
}

//const dinner = (food) => {
  //  return `I will eat ${food}`
//}

//console.log(dinner("idli"))

//Can also write it as

const dinner = (food) => `I will eat ${food}`;

//console.log(dinner("idli"))

const leadsinger = (artist="someone") =>`${artist} is the singer`;

console.log(leadsinger());  //default parameter