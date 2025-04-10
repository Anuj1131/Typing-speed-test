const sentence = document.getElementById("sentence").innerText;
const input = document.getElementById("input");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");
const timeTaken = document.getElementById("timeTaken");

let startTime
let typingStarted = false;

startBtn.addEventListener("click", () => {
    input.value = ""; // Clear input
    input.disabled = false; // Enable input
    input.focus(); // Focus on input
    startTime = new Date(); // Start timer
    typingStarted = true;
    startBtn.disabled = true; // Disable start button
    result.innerText = "Your speed: 0 WPM"; // Reset result
    timeTaken.innerText = ""; // Reset time taken
});

input.addEventListener("input", () => {
    if (typingStarted) {
        if (input.value === sentence) {
            let endTime = new Date();
            let timeDiff = (endTime - startTime) / 1000; // Time in seconds
            let words = sentence.split(" ").length; // Number of words
            let wpm = Math.round((words / timeDiff) * 60); // Calculate WPM
            result.innerText = `Your speed: ${wpm} WPM`; // Show result
            timeTaken.innerText = `Time taken: ${timeDiff.toFixed(2)} seconds`; // Show time taken
            input.disabled = true; // Disable input after completion
            startBtn.disabled = false; // Re-enable start button
            typingStarted = false; // Reset typing state
        } else if (input.value.length > sentence.length) {
            // Prevent typing beyond the sentence length
            input.value = input.value.slice(0, sentence.length);
        }
    }
});

resetBtn.addEventListener("click", () => {
    input.value = ""; // Clear input
    input.disabled = true; // Disable input
    result.innerText = "Your speed: 0 WPM"; // Reset result
    timeTaken.innerText = ""; // Reset time taken
    startBtn.disabled = false; // Enable start button
    typingStarted = false; // Reset typing state
});

