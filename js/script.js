"use strict";

// Variabel

// container variabel
const container = document.querySelector(".container");

// display text variabel
const displayClock = container.querySelector(".clock");
const displayDay = container.querySelector(".day");
const displaySaying = container.querySelector(".saying");
const displayQuotes = container.querySelector(".quote");

// more button variabel
const moreButton = container.querySelector("#more-btn");

// popover button
const popoverBottom = container.querySelector("#popover");
moreButton.addEventListener("click", function () {
    popoverBottom.classList.toggle("hide");
})

// get name for input variabel
const inputNama = prompt("Masukkan Nama Panggilan Anda : ");
const nama = inputNama.charAt(0).toUpperCase() + inputNama.slice(1);

// get checkbox element variabel
const checkbox = container.querySelector(".onoffswitch-checkbox");

// list text to display on screen varibel
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


// Function

// function saying 24 clock
function sayingdisplay24(hrs) {
    const clock = parseInt(hrs[0] + hrs[1])
    let say = nama;
    if (clock >= 0 && clock <= 12) {
        say = `${saying[0]}, ${nama}.`;
    } else if (clock > 12 && clock <= 18) {
        say = `${saying[1]}, ${nama}.`
    } else {
        say = `${saying[2]}, ${nama}.`
    };

    return say;
};
// function saying 12 clock
function sayingdisplay12(hrs) {
    let hours = hrs.getHours()

    let say = nama;

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    if (ampm == "AM") {
        if (hours >= 0 && hours <= 12) {
            say = `${saying[0]}, ${nama}.`;
        }
    } else {
        if (hours >= 1 && hours <= 6) {
            say = `${saying[1]}, ${nama}.`
        } else {
            say = `${saying[2]}, ${nama}.`
        }
    }
    return say;
};

// function show quotes
function showQuotes(day) {
    return quotes[day];
};

// function show day
function showDay() {
    const currentTime = new Date();
    return weekDay[currentTime.getDay()];
};

// function 24 clock format
function twentyFourClock(clk) {
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
    clk = `${hr}:${min}:${seconds}`;

    return clk;
};

// function 12 clock format
function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;

    let strTime = `${hours}:${minutes}:${second}`;

    return strTime;
};


// function switch to 12 clock format
function switchClockFormat() {
    checkbox.addEventListener("click", e => {
        if (checkbox.checked == true) {
            let clock = twentyFourClock()
            displayClock.innerText = twentyFourClock(clock);
            displaySaying.innerText = sayingdisplay24(clock)
        } else {
            displayClock.innerText = formatAMPM(new Date);
            displaySaying.innerText = sayingdisplay12(new Date)
        };
    });
};