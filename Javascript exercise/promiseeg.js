const buyFlightTicket = () =>{
    return new Promise( ( resolve,reject) => {
        setTimeout(() => {
            const error = false;
            if (error) {
                reject("Sorry paymment fail");
            }
            else {
                resolve("Thankyou, its successful");
            }
        }, 3000)

        })

    }

    buyFlightTicket()
    .then( (success) => console.log(success))
    .catch((error) =>console.log(error));