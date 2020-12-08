const userData = new Promise((resolve, reject) => {
    const error = false;
    if (error) {
        reject("IT failed")
    }else {
        resolve({
            name:"Priya",
            age: 32,
            email:"priya@gmail.com"
        });
    }
});

userData
.then((data) => console.log(data))
.catch((error) => console.log(error))