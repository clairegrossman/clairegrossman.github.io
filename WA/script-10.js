
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
let storyText = "In a galaxy far, far away, there was a young Jedi named Bob :insertx:. They were known for their incredible talent in the Force, especially their ability to :inserty:. One day, Bob :insertx: received a message from a little droid. The message contained an urgent plea for help from Princess Leia. She was being held captive by Darth Vader in a :insertz: , and only Bob :insertx: could save her. After a sweaty lightsaber battle in 98 degree heat, Bob :insertx: managed to rescue Princess Leia and defeat Darth Vader. The galaxy was saved, and everyone celebrated with a big party on the planet Tatooine. "
const insertx = ["Skywalker","Windu","Kenobi"]
const inserty = ["read the minds of goldfish","juggle flaming marshmallows blindfolded","win thumb-wrestling matches against giants"]
const insertz = ["funhouse mirror maze","giant bubblegum bubble","jammed elevator stuck between floors"]

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
        newStory = newStory.replace('98', '37');
    
      }
    
      story.textContent = newStory;
      story.style.visibility = 'visible';
    }
