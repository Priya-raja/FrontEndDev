const uploadData = document.getElementById('uploadForm')

uploadData.addEventListener('submit', function(e) {
     e.preventDefault();

     uploadFile(this);

})
    async function uploadFile(data) {
        const formData = new FormData(data);
        // code for multiple files upload
        const files = data.querySelector('input[type="file"]').files;

        for (let i=0; i < files.length; i++) {
            formData.append(`fileInput_${i}`, files[i]);
        }
        // multiple files only ends. add this extra section.
        
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
