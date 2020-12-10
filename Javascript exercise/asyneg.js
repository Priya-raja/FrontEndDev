const photos = []

async function uploadPhoto(){
    let statusUpload = new Promise( (resolve, reject) => {
        setTimeout(() => {
            photos.push("Profile picture");
            resolve("Photos Uploaded")
        },3000)

    })
    let result = await statusUpload;
    console.log(result);
    console.log(photos.length);

}
uploadPhoto();

