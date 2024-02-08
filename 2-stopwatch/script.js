let timer;
let [hours, minutes, seconds]  = [0, 0, 0];
let display = document.getElementById("display");

function updateTime() {
    seconds ++;
    if(seconds == 60){
        seconds = 0;
        minutes ++;
    } 
    if(minutes == 60) {
        minutes = 0;
        hours ++;
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = `${h}:${m}:${s}`

}
document.getElementById('startBtn').addEventListener('click', function() {
    if(!timer) clearInterval(timer);
     timer = setInterval(updateTime, 1000);
});

document.getElementById('stopBtn').addEventListener('click', function() {
    clearInterval(timer);
    timer = null;
});
document.getElementById('resetBtn').addEventListener('click', function() {
    display.style.opacity = 0.2;
    clearInterval(timer);
    timer = null;
    [hours, minutes, seconds]  = [0, 0, 0];
    display.innerText = `00:00:00`;

    setTimeout(() => {
        display.style.opacity = 0.5;
    }, 200);

    setTimeout(() => {
        display.style.opacity = 0.8;
    }, 500);

    setTimeout(() => {
        display.style.opacity = 1;
    }, 1000)
    
});
