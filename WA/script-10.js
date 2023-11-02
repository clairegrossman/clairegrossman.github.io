
//html references
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//randomValue
function randomeValueFromArray(array) {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

//variables to declare
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertx = ["Willy the Goblin","Big Daddy","Father Christmas"]
const inserty = ["the soup kitchen","Disneyland","the White House"]
const insertz = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]

//event listener
randomize.addEventListener('click', result);

//method or function
function result() {

    let newStory = storyText;
    const xItem = randomeValueFromArray(insertx); 
    const yItem = randomeValueFromArray(inserty);
    const zItem = randomeValueFromArray(insertz);

   newStory = newStory.replaceAll(':insertx:', xItem); //only replaces the first varaible without "all"
   newStory = newStory.replace(':inserty:', yItem);
   newStory = newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
      }
    
      if(document.getElementById("uk").checked) {
        const weight = Math.round(300/2.205) + "kilograms";
        const temperature =  Math.round((94-32)*5/9)+ "celcius";
        newStory = newStory.replace('300 pounds', yItem);
        newStory = newStory.replace('94 Farenheight', zItem);
    
      }
    
      story.textContent = newStory;
      story.style.visibility = 'visible';
    }
