window.onload = function () {
    var sec = 0;
    var ten = 0;
    var hrs = 0;
    var setHours = document.getElementById('hrs');
    var setSecond = document.getElementById('seconds');
    var setTen = document.getElementById('tens');
    var startButton = document.getElementById('button-start');
    var stopButton = document.getElementById('button-stop');
    var resetButton = document.getElementById('button-reset');
    var interval;

    startButton.onclick=function(){
        clearInterval(interval)
        interval = setInterval(myTime,10)
    }
    stopButton.onclick = function () {
        clearInterval(interval)
    }
    resetButton.onclick = function () {
        clearInterval(interval)
        sec = "00"
        ten = "00"
        hrs = "00"
        setSecond.innerHTML = sec;
        setTen.innerHTML = ten;
        setHours.innerHTML = hrs;
    }
    function myTime() {
        ten++;
        if (ten < 9) {
            setTen.innerHTML = "0" + ten;
        }
        if (ten > 9) {
            setTen.innerHTML = ten;
        }
        if (ten > 99) {
            sec++;
            setSecond.innerHTML = "0" + sec;
            ten = 0;
            setTen.innerHTML = "0" + 0;
        }
        if (sec > 9) {
            setSecond.innerHTML = sec;
        }
        if (sec > 60) {
            hrs++;
            setHours.innerHTML = "0" + hrs;
            sec = 0;
            setSecond.innerHTML = "0" + 0;
        }
        if (hrs > 9) {
            setHours.innerHTML = hrs;
        }
    }
}















