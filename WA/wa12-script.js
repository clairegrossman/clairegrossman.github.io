
async function getRandomDog() {
    console.log('Test');
    let endpoint ="https://dog.ceo/api/breeds/image/random";
    
    try{
        let response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json)
        displayImage(json['message']);
        // image = json['message'];
        // return await response.json();
    }
    catch(error){
        console.log(error);
        alert('Failed to fetch image');
    }
}

function displayImage(image_url){
    document.getElementById("image").src = image_url;
  }
  
getRandomDog()