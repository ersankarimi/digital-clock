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
// const userName = getNameFromLocalStorage();

// get checkbox for clock format element variabel
let clockFormatToggle = container.querySelector(".onoffswitch-checkbox-clockformat");

// get checkbox for show second element variabel
let showSecondToggle = container.querySelector(".onoffswitch-checkbox-showsecond");

// list text to display on screen varibel
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const saying = ["Good morning", "Good afternoon", "Good evening"];

const sayingTwo = {
    "sunday" : {
        "morning" : [`Good morning ${getNameFromLocalStorage()}.`, `Enjoy your weekend ${getNameFromLocalStorage()}.`, `It's weekends, do domething ${getNameFromLocalStorage()}.`, `Gather Your Strength ${getNameFromLocalStorage()}.`],
        "afternoon" : [`Good afternoon ${getNameFromLocalStorage()}.`, `Sleep for a while ${getNameFromLocalStorage()}.`, `Be grateful ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening ${getNameFromLocalStorage()}.`, `Take a rest ${getNameFromLocalStorage()}.`]
    },
    "monday": {
        "morning" : [`Good morning ${getNameFromLocalStorage()}.`, `Grab your coffee ${getNameFromLocalStorage()}.`, `Keep going ${getNameFromLocalStorage()}!`, `Be still ${getNameFromLocalStorage()}.`],
        "afternoon": [`Good afternoon ${getNameFromLocalStorage()}.`, `Keep it up!`],
        "evening": [`Good evening ${getNameFromLocalStorage()}.`, `Be grateful ${getNameFromLocalStorage()}.`]
    }, 
    "tuesday": {
        "morning": [`Good morning ${getNameFromLocalStorage()}.`, `Be nice.`, `Never give up.`],
        "afternoon": [`Good afternoon ${getNameFromLocalStorage()}.`, `Just do it!`, `And still, I rise`],
        "evening": [`Good evening ${getNameFromLocalStorage()}.`, `Strive for greatness.`, `Rest and be thankful.`]
    }, 
    "wednesday": {
        "morning": [`Good morning ${getNameFromLocalStorage()}.`, `Start doing ${getNameFromLocalStorage()}.`, `Love for all.`],
        "afternoon": [`Good afternoon ${getNameFromLocalStorage()}.`, `Strive for greatness.`],
        "evening": [`Good evening ${getNameFromLocalStorage()}.`, `Just rest, it's okay.`]
    },
    "thursday": {
        "morning": [`Good morning ${getNameFromLocalStorage()}.`, `You can do it.`, `Be nice.`], 
        "afternoon": [`Good afternoon ${getNameFromLocalStorage()}.`, `Grab your coffee.`],
        "evening": [`Good evening ${getNameFromLocalStorage()}.`, `Sleep well ${getNameFromLocalStorage()}.` ]
    },
    "friday": {
        "morning": [`Good morning ${getNameFromLocalStorage()}.`, `Prayer changes everything.`, `Be thankful.`],
        "afternoon": [`Good afternoon ${getNameFromLocalStorage()}.`, `Love yourself ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening ${getNameFromLocalStorage()}.`, `Sleep well ${getNameFromLocalStorage()}.`, `Be greatful.`]
    },
    "saturday" : {
        "morning": [`Good morning ${getNameFromLocalStorage()}.`, `Do something ${getNameFromLocalStorage()}.`, `Grab your coffee.`],
        "afternoon": [`Good afternoon ${getNameFromLocalStorage()}.`, `Take a nap.`],
        "evening": [`Good evening ${getNameFromLocalStorage()}`, `Sleep well.`, `It's okey, just rest!`]
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


// Function
// function saying 24 clock
function sayingdisplay24(hrs) {
    const clock = parseInt(hrs[0] + hrs[1])
    let say;
    if (clock >= 0 && clock <= 12) {
        say = `${saying[0]}, ${getNameFromLocalStorage()}.`;
    } else if (clock > 12 && clock <= 18) {
        say = `${saying[1]}, ${getNameFromLocalStorage()}.`
    } else {
        say = `${saying[2]}, ${getNameFromLocalStorage()}.`
    };

    return say;
};
// function saying 12 clock
function sayingdisplay12(hrs) {
    let hours = hrs.getHours()
    let say;

    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    if (ampm == "AM") {
        if (hours >= 0 && hours <= 12) {
            say = `${saying[0]}, ${getNameFromLocalStorage()}.`;
        }
    } else {
        if (hours >= 1 && hours <= 6) {
            say = `${saying[1]}, ${getNameFromLocalStorage()}.`
        } else {
            say = `${saying[2]}, ${getNameFromLocalStorage()}.`
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

    if (showSecondFormat === "true") {
        clk = `${hr}:${min}:${seconds}`;
        return clk;
    } else {
        clk = `${hr}:${min}`;
        return clk;
    }
    // clk = `${hr}:${min}`;
    // console.log(typeof (seconds));
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

    if (showSecondFormat === "true") {
        let strTime = `${hours}:${minutes}:${second}`;
        return strTime;
    } else {
        // let strTime = `${hours}:${minutes}:${second}`;
        let strTime = `${hours}:${minutes}`;
        return strTime;
    }
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
    let x = Math.floor(Math.random() * 45) + 1;
    return x
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
    }
};