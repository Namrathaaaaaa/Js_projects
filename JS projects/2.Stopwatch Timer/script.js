const minutesLabel = document.getElementById('minutes');
const secondsLabel = document.getElementById('seconds');
const millisecondsLabel = document.getElementById('milliseconds');

const startbutton = document.getElementById('startbtn');
const stopbutton = document.getElementById('stopbtn');
const pausebutton = document.getElementById('pausebtn');
const resetbutton = document.getElementById('resetbtn');

const lapList = document.getElementById('laplist');

// stopwatch variables
let minutes=0;
let seconds=0;
let milliseconds=0;
let interval;

startbutton.addEventListener('click',startTimer);
stopbutton.addEventListener('click',stopTimer);
pausebutton.addEventListener('click',pauseTimer);
resetbutton.addEventListener('click',resetTimer);

function startTimer(){
    interval=setInterval(updateTimer,10);
    startbutton.disabled = true;
}

function stopTimer(){
    clearInterval(interval);
    addtoLapList();
    resetTimerData();
    startbutton.disabled = false;
}

function pauseTimer(){
    clearInterval(interval);
    startbutton.disabled = false;
}

function resetTimer(){
    clearInterval(interval);
    resetTimerData();
    startbutton.disabled = false;

}

function updateTimer(){
    milliseconds++;
    if(milliseconds===100){
        milliseconds=0;
        seconds++;
        if(seconds===60){
            seconds=0;
            minutes++;
        }
    }
    displayTimer();
}

function displayTimer(){
    millisecondsLabel.textContent=padTime(milliseconds);
    secondsLabel.textContent=padTime(seconds);
    minutesLabel.textContent=padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}

function resetTimerData(){
    milliseconds=0;
    seconds=0;
    minutes=0;
    displayTimer();
}

function addtoLapList(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML=`<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
    
}