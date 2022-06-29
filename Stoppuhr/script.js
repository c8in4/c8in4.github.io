let hours = 0;
hours = ("0" + hours).slice(-2);
let minutes = 0;
minutes = ("0" + minutes).slice(-2);
let seconds = 0;
seconds = ("0" + seconds).slice(-2);
let milliseconds = 0;
milliseconds = ("0" + milliseconds).slice(-2);
let running = false;

function start() {
    if (!running) {
        let text = hours + " : " + minutes + " : " + seconds + " : " + milliseconds;
        time.innerHTML = text;
    }
}