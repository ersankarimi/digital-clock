// variabel dan function untuk update
document.addEventListener("DOMContentLoaded", () => {
    const repeat = setInterval(function () {
        // variabel clock
        if (checkbox.checked == true) {
            let clock = twentyFourClock()
            displayClock.innerText = twentyFourClock(clock);
            displaySaying.innerText = sayingdisplay24(clock)
            displaySaying.innerText = sayingdisplay24(clock)
        } else {
            displayClock.innerText = formatAMPM(new Date);
            displaySaying.innerText = sayingdisplay12(new Date)
        }

        switchClockFormat();

        // display day
        displayDay.innerText = showDay();
        let day = displayDay.innerText;
        displayDay.style.fontSize = "3rem";
        displayDay.style.fontWeight = "500"

        // display clock
        displayClock.style.fontSize = "10rem"
        displayClock.style.margin = "0 0 1rem 0"

        // display saying
        displaySaying.style.fontSize = "4rem"

        // display qoutes
        displayQuotes.innerText = showQuotes(day);
        displayQuotes.style.margin = "2rem 0 0 0";
        displayQuotes.style.fontSize = "1.5rem";

    }, 1000);
})