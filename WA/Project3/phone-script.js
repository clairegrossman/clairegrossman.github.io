  function createRedBall() {
    const redBall = createCircle('!', 'red'); // 'X' is the content of the red ball
    redBall.addEventListener('click', function () {
      clearPhoneNumber();
    });
    return redBall;
  }

  // Function to create a circle with a specific number and color
  function createCircle(number, color) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.innerText = number;
    circle.style.backgroundColor = color;
    circle.style.left = Math.random() * 250 + 'px';
    circle.style.top = Math.random() * 250 + 'px';

    // Add click event listener to the circle
    circle.addEventListener('click', function () {
      addNumberToPhoneNumber(circle.innerText);
    });

    return circle;
  }

  // Function to move circles around the container
  function moveCircles() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
      const newX = Math.random() * 450;
      const newY = Math.random() * 250;
      circle.style.left = newX + 'px';
      circle.style.top = newY + 'px';
    });
  }

  // Create an array of unique numbers from 0 to 9
  const uniqueNumbers = Array.from({ length: 10 }, (_, i) => i);
  shuffleArray(uniqueNumbers);

  // Create circles with unique numbers and random colors, and append them to the container
  const container = document.getElementById('container');
  for (let i = 0; i < 10; i++) {
    const number = uniqueNumbers[i];
    const color = getRandomColor();
    const circle = createCircle(number, color);
    container.appendChild(circle);
  }

  // Add the red ball to the container
  const redBall = createRedBall();
  container.appendChild(redBall);

  // Update circle positions every 1200 milliseconds (1.2 seconds)
  setInterval(moveCircles, 1000);

  // Function to generate a random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Function to add a number to the phone number input
  function addNumberToPhoneNumber(number) {
    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const currentPhoneNumber = phoneNumberInput.value;

    // Check if the input has reached the maximum length (10)
    if (currentPhoneNumber.length < 10) {
      phoneNumberInput.value = currentPhoneNumber + number;
    }
  }

  // Function to clear the phone number input
  function clearPhoneNumber() {
    document.getElementById('phoneNumberInput').value = '';
  }

  // Function to shuffle an array (Fisher-Yates algorithm)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
