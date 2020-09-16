function clockTime() {
    const clock = document.querySelector(".clock");
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    const timeString = time.toLocaleTimeString()

    clock.innerHTML = double(hour) + ":" + double(minute) + ":" + double(seconds);

    function double(num) {
        return (num < 10) ? ("0" + num) : (num);
    }
}
clockTime();
setInterval(clockTime, 1000);