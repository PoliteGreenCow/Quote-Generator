// Variables
const startStopBtn = document.querySelector('#startStopBtn');
const restartBtn = document.querySelector('#restartBtn');

// Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & time status
let timeInterval = null;
let timeStatus = 'stopped';

// Stopwatch function
function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Start/Stop button event listener
startStopBtn.addEventListener('click', function () {
    if (timeStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timeStatus = "started";
    } else {
        window.clearInterval(timeInterval);
        startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timeStatus = "stopped";
    }
});

// Restart button event listener
restartBtn.addEventListener('click', function () {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    leadingSeconds = "00";
    leadingMinutes = "00";
    leadingHours = "00";
    document.getElementById('timer').innerText = "00:00:00";
    timeStatus = "stopped";
    startStopBtn.innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
});
