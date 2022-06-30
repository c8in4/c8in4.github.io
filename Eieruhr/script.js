let alarm = new Audio("analog-alarm-clock.wav");
let running = false;


function startTimer() {
    if (!running) {
        let startTime = new Date().getTime();
        let time = 1000 * 5 * 60;
        let endTime = startTime + time;

        setInterval(function() {
            let timeLeft = endTime - new Date().getTime();

            if (timeLeft > 0) {
                let minutes = timeLeft / (1000 * 60);
                minutes = Math.floor(minutes);
                let seconds = (timeLeft / 1000) % 60;
                seconds = Math.round(seconds);
                seconds = ("0" + seconds).slice(-2);
                let text = "0" + minutes + " : " + seconds;

                timer.innerHTML = text;
            } else {
                alarm.play();
                timer.innerHTML = "00 : 00";
            }


        }, 1000);
        running = true;
    }

}