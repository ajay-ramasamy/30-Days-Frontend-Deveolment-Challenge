const body = document.querySelector("body");
const colorCode = document.querySelector(".color-code");
const changeButton = document.querySelector(".a");
const autoChangeButton = document.querySelector(".b");

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const newColor = generateRandomColor();
    body.style.backgroundColor = newColor;
    colorCode.textContent = newColor; // Update color code below the text
}

let intervalId;
function toggleAutoChange() {
    if (!intervalId) {
        intervalId = setInterval(changeBackgroundColor, 1000); // Change color every second
        autoChangeButton.textContent = "Stop Auto Change";
    } else {
        clearInterval(intervalId);
        intervalId = null;
        autoChangeButton.textContent = "Auto Change";
    }
}

changeButton.addEventListener("click", changeBackgroundColor);
autoChangeButton.addEventListener("click", toggleAutoChange);
