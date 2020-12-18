const uploadData = document.getElementById('uploadForm')

uploadData.addEventListener('submit', function(e) {
     e.preventDefault();

     uploadFile(this);

})


  
    async function uploadFile(data) {
        const formData = new FormData(data);
        
        const options = {
            method: 'POST',
            body: formData
        };
        
        const uploadPromise = await fetch('https://httpbin.org/post', options);
        
        if(uploadPromise.ok) {
            const uploadResp = await uploadPromise.json();
            console.log(uploadResp.files);
        } else {
            console.error(uploadPromise.status);
        }
    }
