let running;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function count() {
    milliseconds++;

    if (milliseconds > 99) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds > 59) {
        seconds = 0;
        minutes++;
    }
    if (minutes > 59) {
        minutes = 0;
        hours++;
    }

    milliseconds = ("0" + milliseconds).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    hours = ("0" + hours).slice(-2);

    time.innerHTML = hours + "h : " + minutes + "min : " + seconds + "s : " + milliseconds;
}

function start() {
    if (!running) {
        running = true;
        running = setInterval(count, 10);
    }
}

function stop() {
    clearInterval(running);
    running = false;
}

function reset() {
    if (!running) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        time.innerHTML = "00h : 00min : 00s : 00";
    }
}