const container = document.querySelector(".container");
const displayClock = container.querySelector(".clock");
const displayDay = container.querySelector(".day");


const repeat = setInterval(function () {
    const currentTime = new Date();
    const clock = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} `
    console.log(clock);

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    displayDay.innerText = weekday[currentTime.getDay()]
    displayDay.style.fontSize = "5rem";
    displayClock.innerText = clock;
    displayClock.style.fontSize = "200px"

}, 1000);