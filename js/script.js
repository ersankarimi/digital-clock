"use strict";

class UiInteraction {
    static setUsername() {
        if (getUsernameFromLocalStorage() == null) {
            let username = prompt("Masukkan Panggilan Anda");
            setUsernameToLocalStorage(username.charAt(0).toUpperCase() + username.slice(1));
        } else {
            return getUsernameFromLocalStorage();
        };
    };


    static settingClockDisplay() {
        const moreSettingClock = document.querySelector("#more-btn");
        const popoverBottom = document.querySelector("#popover");

        moreSettingClock.addEventListener("click", function () {
            popoverBottom.classList.toggle("hide");
        });
    };

    static switchClockFormat(displayClock, clock) {
        const clockFormatToggle = document.querySelector(".onoffswitch-checkbox-clockformat");

        getClockFormat24LocalStorage() === null ? setClockFormat24LocalStorage(clockFormatToggle.checked.toString()) :
            clockFormatToggle.addEventListener("click", () => {
                setClockFormat24LocalStorage(clockFormatToggle.checked.toString());
                displayClock.innerText = clock.currentClock(new Date);
            });
    };

    static switchShowSecond(showSecondLocalStorage) {
        const showSecondToggle = document.querySelector(".onoffswitch-checkbox-showsecond");

        showSecondLocalStorage === null ? setShowSecondToLocalStorage(showSecondToggle.checked.toString()) :
            showSecondToggle.addEventListener("click", function (e) {
                setShowSecondToLocalStorage(showSecondToggle.checked.toString());
            });
    };

    static giveCheckedAttributeMoreSettingClock(clockFormat, showsecond) {
        clockFormat === "true" ? document.querySelector("#myonoffswitch-clockformat").checked = true : document.querySelector("#myonoffswitch-clockformat").checked = false;

        showsecond === "true" ? document.querySelector("#myonoffswitch-showsecond").checked = true : document.querySelector("#myonoffswitch-showsecond").checked = false;
    };
};
class Clock {
    currentClock(currentTime) {
        // get hour, minute, and second
        // from current_time argument
        let hr = currentTime.getHours();
        // min hr < 10, so give "0" in front
        hr = hr < 10 ? "0" + hr : hr;

        let min = currentTime.getMinutes();
        // min < 10, so give "0" in front
        min = min < 10 ? "0" + min : min;

        let sec = currentTime.getSeconds();
        // sec < 10, so give "0" in front
        sec = sec < 10 ? "0" + sec : sec;

        switch (getClockFormat24LocalStorage()) {
            case "true":
                return getShowSecondFromLocalStorage() === "true" || getShowSecondFromLocalStorage() === null ? `${hr}:${min}:${sec}` : `${hr}:${min}`;

            case null:
            case "false":
                hr = hr % 12;
                // min hr < 10, so give "0" in front
                hr = hr < 10 ? "0" + hr : hr;
                // the hour 0, should be 12
                hr = hr ? hr : 12

                // AM and PM format
                let ampm = hr >= 12 ? "PM" : "AM";
                return getShowSecondFromLocalStorage() === "true" || getShowSecondFromLocalStorage() === null ? `${hr}:${min}:${sec}` : `${hr}:${min}`;
        }
    }

    setFontSize(size) {
        this.fontSize = size;

        return this;
    };

    setMargin(margin) {
        this.margin = margin;

        return this;
    };

};

// Class to get current day
class CurrentDay {
    weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    setCurrentDay(currentTime) {
        this.currentDay = this.weekDay[currentTime.getDay()];

        return this;
    };

    setFontsize(size) {
        this.fontSize = size;

        return this
    };

    setFontWeight(weight) {
        this.fontWeight = weight;

        return this;
    };
};

class SayingForDisplay {
    // list saying every day
    sayingEveryDay = {
        "sunday": {
            "morning": [`Good morning ${getUsernameFromLocalStorage()}.`, `Enjoy your weekend ${getUsernameFromLocalStorage()}.`, `It's weekends, do domething ${getUsernameFromLocalStorage()}.`],
            "afternoon": [`Good afternoon ${getUsernameFromLocalStorage()}.`, `Sleep for a while ${getUsernameFromLocalStorage()}.`, `Be grateful ${getUsernameFromLocalStorage()}.`],
            "evening": [`Good evening ${getUsernameFromLocalStorage()}.`, `Take a rest ${getUsernameFromLocalStorage()}.`, `Gather Your Strength ${getUsernameFromLocalStorage()}.`]
        },
        "monday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Grab your coffee ${getUsernameFromLocalStorage()}.`, `Keep going ${getUsernameFromLocalStorage()}!`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Keep it up!`, `Be still ${getUsernameFromLocalStorage()}.`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Be grateful ${getUsernameFromLocalStorage()}.`, `Take a rest ${getUsernameFromLocalStorage()}!`]
        },
        "tuesday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Be nice.`, `Never give up.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Just do it!`, `And still, I rise`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Strive for greatness.`, `Rest and be thankful.`]
        },
        "wednesday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Start doing ${getUsernameFromLocalStorage()}.`, `Love for all.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Strive for greatness.`, `Be nice.`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Just rest, it's okay.`, `Take a rest ${getUsernameFromLocalStorage()}!`]
        },
        "thursday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `You can do it.`, `Be nice.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Grab your coffee.`, `Keep it up!`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Sleep well, ${getUsernameFromLocalStorage()}.`, `Take a rest, ${getUsernameFromLocalStorage()}!`]
        },
        "friday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Prayer changes everything.`, `Be thankful.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Love yourself ${getUsernameFromLocalStorage()}.`, `Grab your coffee, ${getUsernameFromLocalStorage()}.`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Sleep well ${getUsernameFromLocalStorage()}.`, `Be greatful.`]
        },
        "saturday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Do something ${getUsernameFromLocalStorage()}.`, `Grab your coffee.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Take a nap.`, `Do something ${getUsernameFromLocalStorage()}.`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}`, `Sleep well.`, `It's okey, just rest!`]
        }
    };

    rotateSayingText(day, minute, time) {
        return (minute >= 0 && minute <= 20) ? this.sayingEveryDay[day][time][0] :
            (minute >= 21 && minute <= 40) ? this.sayingEveryDay[day][time][1] :
            this.sayingEveryDay[day][time][2]
    };

    setSayingForDisplay(currentTime, currentDay) {
        const displaySaying = document.querySelector(".saying");
        let hr = currentTime.getHours();
        let min = currentTime.getMinutes();
        let day = currentDay.toLowerCase();

        switch (getClockFormat24LocalStorage()) {
            case null:
            case "true":
                this.sayingDisplayText = hr >= 0 && hr <= 12 ? this.rotateSayingText(day, min, "morning") // morning
                    :
                    hr > 12 && hr <= 18 ? this.rotateSayingText(day, min, "afternoon") // afternoon
                    :
                    this.rotateSayingText(day, min, "evening"); // evening

            case "false":
                // AM and PM format
                let ampm = hr >= 12 ? "PM" : "AM";
                hr = hr % 12;
                // min hr < 10, so give "0" in front
                hr = hr < 10 ? "0" + hr : hr;
                // the hour 0, should be 12
                hr = hr ? hr : 12

                this.sayingDisplayText = (ampm === "AM" && hr >= 0 && hr <= 12) ? this.rotateSayingText(day, min, "morning") // morning
                    :
                    (ampm === "PM" && hr >= 1 && hr <= 6) ? this.rotateSayingText(day, min, "afternoon") // afternoon
                    :
                    this.rotateSayingText(day, min, "evening"); // evening
        }
        return this;
    }

    getSayingForDisplay() {
        return this.sayingDisplayText;
    };

    setFontSize(size) {
        this.fontSize = size;

        return this;
    }
}