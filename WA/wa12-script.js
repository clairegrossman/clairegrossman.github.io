
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

displayImage()
  

// async function renderDogs()
// {
//     let dogs = await getRandomDog();
//     var dog =[];
//     dog = new Image();//created the image object
//     dog.src = dogs.message;///taking the image path
//     dog.width="500";
//     dog.height="300";
//     var images = document.getElementsByTagName('img');
//     ///limit the image display on screen
//     var l=images.length;
//     if(l>3)
//     {
//         for(var p=0;p<l;p++)
//         {
//             images[0].parentNode.removeChild(images[0]);
//         }
//     }

//     document.body.appendChild(dog);
// }