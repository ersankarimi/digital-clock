"use strict";

// variabel dan function untuk update
document.addEventListener("DOMContentLoaded", () => {
    // get random wallpaper for first time open
    if (getLastWallpaper() != null) {
        container.style.backgroundImage = `url(${getLastWallpaper()})`
    } else {
        let script = `./assets/img/wallpaper/${randomNum()}.jpg`;
        container.style.backgroundImage = `url(${script})`;
        setCurrentWallpaper(script);
    };

    // get name for input variabel
    let named = getNameFromLocalStorage();
    // pengecekan apakah kita belum mengisi nama apa sudah
    if (named != null) {
        console.log(named);
    } else {
        // get name for input variabel
        const inputNama = prompt("Masukkan Nama Panggilan Anda : ");
        const namaToLocal = inputNama.charAt(0).toUpperCase() + inputNama.slice(1);
        setNameToLocalStorage(namaToLocal);
        // named = getNameFromLocalStorage();
    };

    // loadTime(value)
    const repeat = setInterval(function () {
        let valueLocalStorage = getValueClockFormat()
        // already checked or no checked for toggle in more button
        giveCheckedAttribute(valueLocalStorage, getShowSecond());
        console.log(valueLocalStorage);

        switchClockFormat();
        switchShowSecond();

        // display day
        displayDay.innerText = showDay();
        let day = displayDay.innerText;
        displayDay.style.fontSize = "3rem";
        displayDay.style.fontWeight = "500";

        // display clock
        displayClock.innerText = (valueLocalStorage == "true" || valueLocalStorage == null) ? twentyFourClock() : formatAMPM(new Date);
        displayClock.style.fontSize = "10rem";
        displayClock.style.margin = "0 0 1rem 0";

        // display saying
        displaySaying.innerText = (getValueClockFormat() == "true") ? sayingdisplay24(twentyFourClock()) : sayingdisplay12(new Date);
        displaySaying.style.fontSize = "4rem";

        // display qoutes
        displayQuotes.innerText = showQuotes(day);
        displayQuotes.style.margin = "2rem 0 0 0";
        displayQuotes.style.fontSize = "1.5rem";

    }, 1000);
})