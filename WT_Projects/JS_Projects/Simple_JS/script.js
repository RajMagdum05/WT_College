// Set initial count
let count = 0;

// Select the value and buttons
const value = document.getElementById("number");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Increase button
increaseBtn.addEventListener("click", function () {
    count++;
    value.textContent = count;
    updateColor();
});

// Decrease button
decreaseBtn.addEventListener("click", function () {
    count--;
    value.textContent = count;
    updateColor();
});

// Reset button
resetBtn.addEventListener("click", function () {
    count = 0;
    value.textContent = count;
    updateColor();
});

// Function to change color based on number
function updateColor() {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}
