const container = document.querySelector(".container");
const displayClock = container.querySelector(".clock");
const displayDay = container.querySelector(".day");
const displaySaying = container.querySelector(".saying");
const nama = prompt("Masukkan Nama Anda : ");
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const saying = ["Good Morning", "Good Afternoon", "Good Evening"];

const qoutes = {
    "Sunday": `Take a rest ${nama}!`,
    "Monday": ``
};

// function saying
function sayingdisplay(hrs) {
    let say = nama;
    if (hrs >= 0 && hrs <= 12) {
        say = `${saying[0]}, ${nama}.`;
    } else if (hrs > 12 && hrs <= 18) {
        say = `${saying[1]}, ${nama}.`
    } else {
        say = `${saying[2]}, ${nama}.`
    }

    return say;
}

const repeat = setInterval(function () {
    const currentTime = new Date();

    // variabel second , hr , min
    let seconds = currentTime.getSeconds();
    if (seconds < 10) {
        seconds = "0" + currentTime.getSeconds();
    };

    let min = currentTime.getMinutes();
    if (min < 10) {
        seconds = "0" + currentTime.getMinutes();
    };

    let hr = currentTime.getHours();
    if (hr < 10) {
        hr = "0" + currentTime.getHours;
    };

    const clock = `${hr}:${min}:${seconds} `

    // display day
    displayDay.innerText = weekDay[currentTime.getDay()]
    displayDay.style.fontSize = "3rem";
    displayDay.style.fontWeight = "500"

    // display clock
    displayClock.innerText = clock;
    displayClock.style.fontSize = "10rem"
    displayClock.style.margin = "0 0 1rem 0"

    // display saying
    displaySaying.innerText = sayingdisplay(hr);
    displaySaying.style.fontSize = "4rem"

}, 1000);