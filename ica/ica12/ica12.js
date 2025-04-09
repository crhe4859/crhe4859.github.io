// 1. Select the new quote button using a querySelector. Assign it to a new variable.
// 2. Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".
var newBtn=document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var answerBtn=document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

// 3. Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.

// 4. Add a new variable that holds the API endpoint: 
var endpoint="https://trivia.cyberwisp.com/getrandomchristmasquestion";

let current = {
    question : "",
    answer : ""
};

// 5. Change the getQuote function to use the fetch method to get a random quote from that endpoint.
async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        // console.log(json);
        displayQuote(json.question);
       

        current.question=json.question;
        current.answer=json.answer;

    } catch(err){
        console.log(err);
        alert('Fail!');
    }
}

// 6. Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.

function displayQuote(quote) {
    const quoteText=document.querySelector('#js-quote-text');
    quoteText.textContent = quote;

}

function displayAnswer() {
    const answerText=document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}


// 7. Adjust getQuote to run displayQuote at the proper place in the code.

// 8. Notice when you refresh that a quote isn't displayed. Fix that.