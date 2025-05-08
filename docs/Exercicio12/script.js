let display = document.getElementById('display');
let iniciarBtn = document.getElementById('iniciar');
let pausarBtn = document.getElementById('pausar');
let zerarBtn = document.getElementById('zerar');

let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function formatTime(milliseconds) {
    let date = new Date(milliseconds);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    let ms = date.getUTCMilliseconds().toString().padStart(3, '0');
    
    return `${hours}:${minutes}:${seconds}.${ms}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(function() {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

