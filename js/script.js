const container = document.querySelector(".container");
const displayClock = container.querySelector(".clock");
const displayDay = container.querySelector(".day");
const displaySaying = container.querySelector(".saying");
const displayQuotes = container.querySelector(".quote");
const inputNama = prompt("Masukkan Nama Panggilan Anda : ");
const nama = inputNama.charAt(0).toUpperCase() + inputNama.slice(1);

// 
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const saying = ["Good Morning", "Good Afternoon", "Good Evening"];

const quotes = {
    "Sunday": `Take a rest ${nama}!`,
    "Monday": `Only you can change your life. Nobody else can do it for you.`,
    "Tuesday": "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Wednesday": "It is better to fail in originality than to succeed in imitation.",
    "Thursday": "The simple act of paying attention can take you a long way.",
    "Friday": "I never dreamed about success. I worked for it.",
    "Saturday": "Experience is a hard teacher because she gives the test first, the lesson afterwards."
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

function showQuotes(day) {
    return quotes[day];
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

    const clock = `${hr}:${min}:${seconds}`
    console.log(clock);

    // display day
    displayDay.innerText = weekDay[currentTime.getDay()]
    let day = displayDay.innerText;
    displayDay.style.fontSize = "3rem";
    displayDay.style.fontWeight = "500"

    // display clock
    displayClock.innerText = clock;
    displayClock.style.fontSize = "10rem"
    displayClock.style.margin = "0 0 1rem 0"

    // display saying
    displaySaying.innerText = sayingdisplay(hr);
    displaySaying.style.fontSize = "4rem"

    // display qoutes
    displayQuotes.innerText = showQuotes(day);
    displayQuotes.style.margin = "2rem 0 0 0";
    displayQuotes.style.fontSize = "1.5rem";

}, 1000);