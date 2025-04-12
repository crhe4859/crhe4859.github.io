var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
var answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

var endpoint="https://api.kanye.rest";

let current = {
    quote : "",
};

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if (!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.question);

        // current.question=json.question;
        // current.answer=json.answer;
        current.quote=json.quote;

    } catch(err){
        console.log(err);
        alert('Fail!');
    }
}

function displayQuote(quote) {
    const quoteText=document.querySelector('#js-quote-text');
    quoteText.textContent = current.quote;
}

function displayAnswer() {
    const searchQuery = "kanye";
    const googleURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleURL, '_blank');
}