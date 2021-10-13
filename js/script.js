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

// get checkbox for clock format element variabel
let clockFormatToggle = container.querySelector(".onoffswitch-checkbox-clockformat");

// get checkbox for show second element variabel
let showSecondToggle = container.querySelector(".onoffswitch-checkbox-showsecond");

// list text to display on screen varibel
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const sayingTwo = {
    "sunday" : {
        "morning" : [`Good morning ${getNameFromLocalStorage()}.`, `Enjoy your weekend ${getNameFromLocalStorage()}.`, `It's weekends, do domething ${getNameFromLocalStorage()}.`],
        "afternoon" : [`Good afternoon ${getNameFromLocalStorage()}.`, `Sleep for a while ${getNameFromLocalStorage()}.`, `Be grateful ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening ${getNameFromLocalStorage()}.`, `Take a rest ${getNameFromLocalStorage()}.`, `Gather Your Strength ${getNameFromLocalStorage()}.`]
    },
    "monday": {
        "morning" : [`Good morning, ${getNameFromLocalStorage()}.`, `Grab your coffee ${getNameFromLocalStorage()}.`, `Keep going ${getNameFromLocalStorage()}!`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Keep it up!`, `Be still ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Be grateful ${getNameFromLocalStorage()}.`, `Take a rest ${getNameFromLocalStorage()}!`]
    }, 
    "tuesday": {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `Be nice.`, `Never give up.`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Just do it!`, `And still, I rise`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Strive for greatness.`, `Rest and be thankful.`]
    }, 
    "wednesday": {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `Start doing ${getNameFromLocalStorage()}.`, `Love for all.`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Strive for greatness.`, `Be nice.`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Just rest, it's okay.`, `Take a rest ${getNameFromLocalStorage()}!`]
    },
    "thursday": {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `You can do it.`, `Be nice.`], 
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Grab your coffee.`, `Keep it up!`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Sleep well ${getNameFromLocalStorage()}.`, `Take a rest ${getNameFromLocalStorage()}!`]
    },
    "friday": {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `Prayer changes everything.`, `Be thankful.`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Love yourself ${getNameFromLocalStorage()}.`, `Grab your coffee ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Sleep well ${getNameFromLocalStorage()}.`, `Be greatful.`]
    },
    "saturday" : {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `Do something ${getNameFromLocalStorage()}.`, `Grab your coffee.`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Take a nap.`, `Do something ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}`, `Sleep well.`, `It's okey, just rest!`]
    }
};

const quotes = {
    "Sunday": `Take a rest ${getNameFromLocalStorage()}!`,
    "Monday": `Only you can change your life. Nobody else can do it for you.`,
    "Tuesday": "Success is not final. Failure is not fatal. It is the courage to continue that counts.",
    "Wednesday": "It is better to fail in originality than to succeed in imitation.",
    "Thursday": "The simple act of paying attention can take you a long way.",
    "Friday": "I never dreamed about success. I worked for it.",
    "Saturday": "Experience is a hard teacher because she gives the test first, the lesson afterwards."
};

// function rotate quote
function rotateSaying(quoteList, day, time, min, i) {
    return (min >= 0 && min <= 20) ? quoteList[day][time][i]
    : (min >= 21 && min <= 40) ? quoteList[day][time][i+1]
    : quoteList[day][time][i+2]
};


// Function
// function saying 24 clock
function sayingdisplay24(hrs) {
    let clock = parseInt(hrs[0] + hrs[1]);
    return clock >= 0 && clock <=12 ? rotateSaying(sayingTwo, showDay().toLowerCase(), "morning", new Date().getMinutes(), 0) // morning
    : clock > 12 && clock <= 18 ? rotateSaying(sayingTwo, showDay().toLowerCase(), "afternoon", new Date().getMinutes(), 0) // afternoon
    : rotateSaying(sayingTwo, showDay().toLowerCase(), "evening", new Date().getMinutes(), 0); // evening
}

// function saying 12 clock
function sayingdisplay12(hrs) {
    let clock = hrs.getHours()
    let ampm = clock >= 12 ? "PM" : "AM";
    clock = clock % 12;
    clock = clock ? clock : 12; // the hour '0' should be '12'

    return (ampm === "AM" && clock >= 0 && clock <=12) ? rotateSaying(sayingTwo, showDay().toLowerCase(), "morning", new Date().getMinutes(), 0) // morning
    : (clock >= 1 && clock <= 6) ? rotateSaying(sayingTwo, showDay().toLowerCase(), "afternoon", new Date().getMinutes(), 0) // afternoon
    : rotateSaying(sayingTwo, showDay().toLowerCase(), "evening", new Date().getMinutes(), 0) // evening
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
    let showSecondFormat = getShowSecond()

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

    return (showSecondFormat === "true") ? `${hr}:${min}:${seconds}`
    : `${hr}:${min}`;
};

// function 12 clock format
function formatAMPM(date) {
    // get show second from local storage
    let showSecondFormat = getShowSecond();

    // set hr , min, and second
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

    return (showSecondFormat === "true") ? `${hours}:${minutes}:${second}`
    : `${hours}:${minutes}`
};

// function switch to 12 clock format
function switchClockFormat() {
    clockFormatToggle.addEventListener("click", e => {
        if (clockFormatToggle.checked == true) {
            let clock = twentyFourClock()
            displayClock.innerText = twentyFourClock(clock);
            displaySaying.innerText = sayingdisplay24(clock)
        } else {
            displayClock.innerText = formatAMPM(new Date);
            displaySaying.innerText = sayingdisplay12(new Date)
        };

        let el = clockFormatToggle.checked.toString()
        checkStatusClockFormat(el);
    });
};

function switchShowSecond() {
    showSecondToggle.addEventListener("click", e => {
        setShowSecond(showSecondToggle.checked.toString());
    });
};

// function to get random number
function randomNum() {
    return Math.floor(Math.random() * 63) + 1;
}

// function for skip wallpaper button
skipWallpaperBtn.addEventListener("click", e => {
    try {
        container.style.backgroundImage = `url(${getLastWallpaper()})`
        let script = `./assets/img/wallpaper/${randomNum()}.jpg`;
        // delay .5s for change wallpaper display
        const wallpaperDelay = setTimeout(() => {
            container.style.transition = "all 1s";
            container.style.backgroundImage = `url(${script})`;
            // set value to local storage
            setCurrentWallpaper(script);
        }, 550)
        
    } catch (error) {
        console.log(error);
    };
});

// function to check second and clock format from local storage
// if true so give attribute checked in checkbox element
function giveCheckedAttribute(param1, param2) {
    if (param1 == "true") {
        container.querySelector("#myonoffswitch-clockformat").checked = true;
    } else {
        container.querySelector("#myonoffswitch-clockformat").checked = false;
    };

    if (param2 == "true") {
        container.querySelector("#myonoffswitch-showsecond").checked = true;
    } else {
        container.querySelector("#myonoffswitch-showsecond").checked = false;
    };
};