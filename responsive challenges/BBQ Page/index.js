let emailCollectorForm = document.getElementById("Email-Collector")
            emailCollectorForm.addEventListener("submit", event => {
                event.preventDefault()
                // Do something with the event
                console.log("The event is firing!")

                let ourFormData = new FormData(event.target)
                
                console.log(ourFormData)
            })