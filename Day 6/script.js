let num = Math.floor(Math.random() * 10);

function check() {
    const feedback = document.getElementById("feedback");
    let k = document.querySelector(".a");
    let choice = Number(k.value);
    const box = document.querySelector(".box");

    if (!k.value) {
        feedback.textContent = "Please enter a number!";
        return;
    }

    if (num === choice) {
        feedback.textContent = "You win! 🎉";
        box.classList.add("winning"); // Add the winning animation
        showPopup(); // Show the popup
    } else if (choice > num) {
        feedback.textContent = "Too high!";
    } else {
        feedback.textContent = "Too low!";
    }
}

function resetGame() {
    num = Math.floor(Math.random() * 10);
    document.getElementById("feedback").textContent = "";
    document.querySelector(".a").value = "";

    const box = document.querySelector(".box");
    box.classList.remove("winning"); // Remove the winning animation
    closePopup(); // Close the popup in case it's open
}

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
