function createRedBall() {
  const redBall = createCircle('!', 'red'); 
  redBall.addEventListener('click', function () {
    clearPhoneNumber();
  });
  return redBall;
}

// create a circle with a specific number and color
function createCircle(number, color) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.innerText = number;
  circle.style.backgroundColor = color;
  circle.style.left = Math.random() * 250 + 'px';
  circle.style.top = Math.random() * 250 + 'px';

  // click event listener 
  circle.addEventListener('click', function () {
    addNumberToPhoneNumber(circle.innerText);
  });

  return circle;
}

// move circles around 
function moveCircles() {
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    // bounds
    const newX = Math.random() * 650;
    const newY = Math.random() * 250;
    circle.style.left = newX + 'px';
    circle.style.top = newY + 'px';
  });
}

// array of unique numbers  0-9
const uniqueNumbers = Array.from({ length: 10 }, (_, i) => i);
shuffleArray(uniqueNumbers);

// give circles unique numbers and random colors
const container = document.getElementById('container');
for (let i = 0; i < 10; i++) {
  const number = uniqueNumbers[i];
  const color = getRandomColor();
  const circle = createCircle(number, color);
  container.appendChild(circle);
}

// "bad" red ball - will clear the input
const redBall = createRedBall();
container.appendChild(redBall);

// move circles every 1200 milliseconds 
setInterval(moveCircles, 1200);

// generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// add a number to the input box
function addNumberToPhoneNumber(number) {
  const phoneNumberInput = document.getElementById('phoneNumberInput');
  const currentPhoneNumber = phoneNumberInput.value;

  // check if the input has 10 numbers
  if (currentPhoneNumber.length < 10) {
    phoneNumberInput.value = currentPhoneNumber + number;
  }
}

// clear the phone number input
function clearPhoneNumber() {
  document.getElementById('phoneNumberInput').value = '';
}

// shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function submitPhoneNumber() {
    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const currentPhoneNumber = phoneNumberInput.value;

    // check if the phone number has exactly 10 digits otherwise it wont submit
    if (currentPhoneNumber.length === 10) {
      alert("Nice! Your number is: " + currentPhoneNumber);
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  }
