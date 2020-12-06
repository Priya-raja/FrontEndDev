 let friends = ["Arya","Priya","John"]

 let personalFriends = ["Diya",...friends,'Jacob'] //It copies from the other array.

 console.log(personalFriends)

 let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
}

let employee = {
    ...person,
    salary: 50000,
    position: "Software Developer"
}

console.log(employee);