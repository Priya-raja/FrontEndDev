const UserForm = document.getElementById("inputForm")
UserForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const fromData = new FormData(this);
  const options = {
      method: 'POST',
      body: fromData
  };

// Write the Fetch statement using https://httpbin.org/post along with the options. Then console log the JSON response. 
    
    fetch('https://httpbin.org/post', options)
        .then(resp => resp.json())
        .then(json => console.log(json.form))
        .catch(err => console.error(err));
    
});


