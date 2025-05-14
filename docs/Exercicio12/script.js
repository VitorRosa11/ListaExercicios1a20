const display = document.getElementById('display');
const iniciarBtn = document.getElementById('iniciar');
const pausarBtn = document.getElementById('pausar');
const zerarBtn = document.getElementById('zerar');

let timer;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    const ms = date.getUTCMilliseconds().toString().padStart(3, '0');
    
    return `${hours}:${minutes}:${seconds}.${ms}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    updateDisplay();
}


iniciarBtn.addEventListener('click', startTimer);
pausarBtn.addEventListener('click', pauseTimer);
zerarBtn.addEventListener('click', resetTimer);
