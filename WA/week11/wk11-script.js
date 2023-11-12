const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [`colloseum.JPG`, `charcuterie.jpg`, `cat.jpeg`, `umbrellas.jpg`, `venice.JPG`];

/* Declaring the alternative text for each image file */
const alts = {'colloseum.JPG' : 'Colloseum in Rome','charcuterie.jpg' : 'Cheese and meat platter','cat.jpeg' : 'cat stretching on stone wall','umbrellas.jpg' : 'striped umbrellas on the beach','venice.JPG' : 'godolas in venice canal'}

/* Looping through images */

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {

    /*check current status*/
    const btnClass = btn.getAttribute('class');

    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });