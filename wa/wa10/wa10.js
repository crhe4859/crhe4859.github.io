const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = "It was 94 Fahrenheit outside, so :insertx: grabbed a cold drink and went for a stroll. When they reached :inserty:, they stopped in their tracks. The heat was unbearable, and before they knew it, they :insertz:. Bob saw the whole thing but wasn’t too surprised—after all, :insertx: weighed 300 pounds and insisted on wearing a heavy coat in the scorching sun.";

let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    // Copy storyText to newStory so that we don't modify the original text
    let newStory = storyText;
    
    // Select random elements from the arrays
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    // Replace placeholders with randomly selected values
    newStory = newStory.replace(/:insertx:/g, xItem)
                       .replace(/:inserty:/g, yItem)
                       .replace(/:insertz:/g, zItem);

    // If the user entered a custom name, replace "Bob" with that name
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    // If UK radio button is selected, convert units
    if (document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.071429) + " stone"; // Convert pounds to stone
        const temperature = Math.round((94 - 32) * (5/9)) + " centigrade"; // Convert Fahrenheit to Celsius
        
        // Replace weight and temperature in the story
        newStory = newStory.replace("300 pounds", weight)
                           .replace("94 fahrenheit", temperature);
    }

    // Update the story text and make it visible
    story.textContent = newStory;
    story.style.visibility = 'visible';
}