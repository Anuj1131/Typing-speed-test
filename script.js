const sentence = document.getElementById("sentence").innerText;
const input = document.getElementById("input");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

let startTime;
let typingStarted = false;

startBtn.addEventListener("click", () => {
    input.value = "";
    input.disabled = false;
    input.focus();
    startTime = new Date();
    typingStarted = true;
    startBtn.disabled = true;
    result.innerText = "Your speed: 0 WPM";
});

input.addEventListener("input", () => {
    if (typingStarted && input.value === sentence) {
        let endTime = new Date();
        let timeDiff = (endTime - startTime) / 1000;
        let words = sentence.split(" ").length;
        let wpm = Math.round((words / timeDiff) * 60);
        result.innerText = `Your speed: ${wpm} WPM`;
        input.disabled = true;
        startBtn.disabled = false;
        typingStarted = false;
    }
});

resetBtn.addEventListener("click", () => {
    input.value = "";
    input.disabled = false;
    result.innerText = "Your speed: 0 WPM";
    startBtn.disabled = false;
    typingStarted = false;
});
