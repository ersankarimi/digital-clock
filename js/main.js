document.addEventListener("DOMContentLoaded", function () {
    "use strict";


    //  DOM ELEMENT SELECTOR
    // main parent element variable
    const container = document.querySelector(".container");

    // display day
    const displayDay = container.querySelector(".day");

    // display clock
    const displayClock = container.querySelector(".clock");

    // displaySaying
    const displaySaying = container.querySelector(".saying");

    // display quotes
    const displayQuotes = container.querySelector(".quote");

    // ======================================================

    // VARIABLE INSTANCE OBJECT
    // clock is a instance object from class Clock
    const clock = new Clock().setFontSize("10rem").setMargin("0 0 1rem 0");

    // day is a instance object from class CurrentDay
    const day = new CurrentDay().setCurrentDay(new Date).setFontsize("3rem").setFontWeight("600");
    console.log(day);

    // saying is a instance object from class SayingForDisplay
    const saying = new SayingForDisplay().setFontSize("4rem");
    console.log(saying);

    // set username
    const username = UiInteraction.setUsername();
    // more setting clock display
    const moreSettingClock = UiInteraction.settingClockDisplay();

    // switch clock format
    const settingClockFormat = UiInteraction.switchClockFormat(displayClock, clock);

    // switch show second
    const settingShowSecond = UiInteraction.switchShowSecond(getShowSecondFromLocalStorage());

    // give checked attribute for more setting display clock
    const checkedAttributeMoreSettingClock = UiInteraction.giveCheckedAttributeMoreSettingClock(getClockFormat24LocalStorage(), getShowSecondFromLocalStorage());

    // quotes for display
    const quotesDisplay = new QuotesForDisplay().setMargin("2rem 0 0 0").setFontSize("2rem").setQuotesForDisplay();

    // changes quotes display
    const changesQuotesDisplay = UiInteraction.changesQuotesDisplay();

    // show background display
    const backgroundDisplay = new BackgroundDisplay().setBackgroundDisplay();

    // changes background display
    const changesBackgroundDisplay = UiInteraction.changesBackgroundDisplay();


    // updating state every one second
    const repeat = setInterval(() => {
        saying.setSayingForDisplay(new Date, day.currentDay)
        displayDay.innerText = day.currentDay;
        displayDay.style.fontSize = day.fontSize;
        displayDay.style.fontWeight = day.fontWeight;


        // display clock
        displayClock.innerText = clock.currentClock(new Date);
        displayClock.style.fontSize = clock.fontSize;
        displayClock.style.margin = clock.margin;

        // saying display
        displaySaying.innerText = saying.getSayingForDisplay();
        displaySaying.style.fontSize = saying.fontSize;

        // display quote
        displayQuotes.innerText = quotesDisplay.getQuotesForDisplay();
        displayQuotes.style.fontSize = quotesDisplay.fontSize;
        displayQuotes.style.margin = quotesDisplay.margin;


    }, 1000);
});