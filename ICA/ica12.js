const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', testFunction);
const questionText = document.querySelector('#js-quote-text');

let answerText = document.querySelector('#js-answer-text');
let answer = '';

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion'

async function getQuote() {
    console.log('Test');

    try{
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        // console.log(json);
        displayQuote(json['question']);
        answer = json['answer'];
        answerText.textContent = '';
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    questionText.textContent = question;
    
}

function displayAnswer() {
    answerText.textContent = answer;
    
}

// function testFunction() {
//     console.log('answer button clicked');
// }

// function displayAnswer(answer) {
//     const answerText = document.querySelector('js-answer-text');
//     answerText.textContent = answer;
// }

getQuote();
