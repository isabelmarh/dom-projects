//convert time from milliseconds to string

function timeToString(time) {
    let diffInHrs = time / 360000;
    let hr = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hr) * 60;
    let min = Math.floor(diffInMin);

    let diffInSec = (diffInMin - min) * 60;
    let sec = Math.floor(diffInSec);

    let diffInMs = (diffInSec - sec) * 100;
    let ms = Math.floor(diffInMs);

    let padHr = hr.toString().padStart(2, "0");
    let padMin = min.toString().padStart(2, "0");
    let padSec = sec.toString().padStart(2, "0");
    let padMs = ms.toString().padStart(2, "0");

    return `${padMin}: ${padSec}: ${padMs}`;
}
//declare the variables
let startTime;
let elapsedTime = 0;
let timerInterval;

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

//create start, pause, reset functions
function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton('PAUSE');
}

function pause() {
    clearInterval(timerInterval);
    showButton('PLAY');
}

function reset() {
    clearInterval(timerInterval)
    print("00:00:00")
    elapsedTime = 0;
    showButton('PLAY')
}

// function to diplay buttons
function showButton(buttonKey) {
    const buttonToShow = buttonKey === 'PLAY' ? playButton : pauseButton;
    const buttonToHide = buttonKey === 'PLAY' ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}


//create event listeners
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");
let resetButton = document.getElementById("resetButton");

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);