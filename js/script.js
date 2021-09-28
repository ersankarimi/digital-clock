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

// skip wallpaper button
const skipWallpaperBtn = container.querySelector("#random-wallpaper");

// popover button
const popoverBottom = container.querySelector("#popover");
moreButton.addEventListener("click", function () {
    popoverBottom.classList.toggle("hide");
});

// get name from local storage
const userName = getNameFromLocalStorage();

// get checkbox element variabel
let checkbox = container.querySelector(".onoffswitch-checkbox");

// list text to display on screen varibel
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const saying = ["Good morning", "Good afternoon", "Good evening"];

const sayingTwo = {
    "sunday" : {
        "morning" : [`Good morning ${userName}.`, `Enjoy your weekend ${userName}.`, `It's weekends, do domething ${userName}.`, `Gather Your Strength ${userName}.`],
        "afternoon" : [`Good afternoon ${userName}.`, `Sleep for a while ${userName}.`, `Be grateful ${userName}.`],
        "evening": [`Good evening ${userName}.`, `Take a rest ${userName}.`]
    },
    "monday": {
        "morning" : [`Good morning ${userName}.`, `Grab your coffee ${userName}.`, `Keep going ${userName}!`, `Be still ${userName}.`],
        "afternoon": [`Good afternoon ${userName}.`, `Keep it up!`],
        "evening": [`Good evening ${userName}.`, `Be grateful ${userName}.`]
    }, 
    "tuesday": {
        "morning": [`Good morning ${userName}.`, `Be nice.`, `Never give up.`],
        "afternoon": [`Good afternoon ${userName}.`, `Just do it!`, `And still, I rise`],
        "evening": [`Good evening ${userName}.`, `Strive for greatness.`, `Rest and be thankful.`]
    }, 
    "wednesday": {
        "morning": [`Good morning ${userName}.`, `Start doing ${userName}.`, `Love for all.`],
        "afternoon": [`Good afternoon ${userName}.`, `Strive for greatness.`],
        "evening": [`Good evening ${userName}.`, `Just rest, it's okay.`]
    },
    "thursday": {
        "morning": [`Good morning ${userName}.`, `You can do it.`, `Be nice.`], 
        "afternoon": [`Good afternoon ${userName}.`, `Grab your coffee.`],
        "evening": [`Good evening ${userName}.`, `Sleep well ${userName}.` ]
    },
    "friday": {
        "morning": [`Good morning ${userName}.`, `Prayer changes everything.`, `Be thankful.`],
        "afternoon": [`Good afternoon ${userName}.`, `Love yourself ${userName}.`],
        "evening": [`Good evening ${userName}.`, `Sleep well ${userName}.`, `Be greatful.`]
    },
    "saturday" : {
        "morning": [`Good morning ${userName}.`, `Do something ${userName}.`, `Grab your coffee.`],
        "afternoon": [`Good afternoon ${userName}.`, `Take a nap.`],
        "evening": [`Good evening ${userName}`, `Sleep well.`, `It's okey, just rest!`]
    }
};

const quotes = {
    "Sunday": `Take a rest ${userName}!`,
    "Monday": `Only you can change your life. Nobody else can do it for you.`,
    "Tuesday": "Success is not final. Failure is not fatal. It is the courage to continue that counts.",
    "Wednesday": "It is better to fail in originality than to succeed in imitation.",
    "Thursday": "The simple act of paying attention can take you a long way.",
    "Friday": "I never dreamed about success. I worked for it.",
    "Saturday": "Experience is a hard teacher because she gives the test first, the lesson afterwards."
};


// Function
// function saying 24 clock
function sayingdisplay24(hrs) {
    const clock = parseInt(hrs[0] + hrs[1])
    let say = userName;
    if (clock >= 0 && clock <= 12) {
        say = `${saying[0]}, ${userName}.`;
    } else if (clock > 12 && clock <= 18) {
        say = `${saying[1]}, ${userName}.`
    } else {
        say = `${saying[2]}, ${userName}.`
    };

    return say;
};
// function saying 12 clock
function sayingdisplay12(hrs) {
    let hours = hrs.getHours()

    let say = userName;

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    if (ampm == "AM") {
        if (hours >= 0 && hours <= 12) {
            say = `${saying[0]}, ${userName}.`;
        }
    } else {
        if (hours >= 1 && hours <= 6) {
            say = `${saying[1]}, ${userName}.`
        } else {
            say = `${saying[2]}, ${userName}.`
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
        min = "0" + currentTime.getMinutes();
    };

    let hr = currentTime.getHours();
    if (hr < 10) {
        hr = "0" + currentTime.getHours();
    };
    clk = `${hr}:${min}:${seconds}`;
    // clk = `${hr}:${min}`;
    // console.log(typeof (seconds));
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
    if (hours < 10) {
        hours = "0" + hours;
    }; // make 2 digit if hrs < 10

    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;

    let strTime = `${hours}:${minutes}:${second}`;
    // let strTime = `${hours}:${minutes}`;

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

        let el = checkbox.checked.toString()
        checkStatusClockFormat(el);
    });
};

function randomNum() {
    let x = Math.floor(Math.random() * 43) + 1;
    return x
}

// skip wallpaper button
skipWallpaperBtn.addEventListener("click", e => {
    try {
        let script = `./assets/img/wallpaper/${randomNum()}.jpg`;
        let now = container.style.backgorundImage;
        container.style.backgroundImage = now;
        container.style.transition = "all 1s";
        container.style.backgroundImage = `url(${script})`;
        // set value to local storage
        setCurrentWallpaper(script);
    } catch (error) {
        console.log(error);
    };
});