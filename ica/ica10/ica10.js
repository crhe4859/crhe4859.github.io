const box = document.getElementById("box");
const button = document.getElementById("button");

let buttonText = "i am a button"
let boxSize = 100; //will become pixels when box size is updated


button.addEventListener("click", () => {
    buttonText += "n";
    button.textContent = buttonText; //just updating button text
});
box.addEventListener('click', () => {
    boxSize += 20;
    box.style.width = boxSize + "px"; //increase width of box by [size]px
    box.style.height = boxSize + "px";
});

