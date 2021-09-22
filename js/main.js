"use strict";

// variabel to get name on display
let named = getNameFromLocalStorage();
// get name for input variabel
let nama;

// variabel dan function untuk update
document.addEventListener("DOMContentLoaded", () => {

    /**
     * * Ini untuk load value dari local storage.
     * * Yang di load itu pengaturan yang sudah diset di local storage
     */
    // pengecekan apakah kita belum mengisi nama apa sudah
    if (named != null || named != undefined) {
        nama = getNameFromLocalStorage();
        console.log(named);
    } else {
        // get name for input variabel
        const inputNama = prompt("Masukkan Nama Panggilan Anda : ");
        const namaToLocal = inputNama.charAt(0).toUpperCase() + inputNama.slice(1);
        setNameToLocalStorage(namaToLocal);
        nama = getNameFromLocalStorage()
    };

    // mengambil background yg sudah di atur sebelumnya
    if (getLastWallpaper() != null || getLastWallpaper() != undefined) {
        container.style.BackgroundImage = `url(${getLastWallpaper()})`
    }


    // loadTime(value)
    const repeat = setInterval(function () {
        if (getLastWallpaper() != null || getLastWallpaper() != undefined) {
            container.style.backgroundImage = `url(${getLastWallpaper()})`
        }
        // variabel clock
        let valueLocalStorage = getValueClockFormat();
        console.log(valueLocalStorage);

        if (valueLocalStorage === "true") {
            let clock = twentyFourClock()
            displayClock.innerText = twentyFourClock(clock);
            displaySaying.innerText = sayingdisplay24(clock)
        } else {
            displayClock.innerText = formatAMPM(new Date);
            displaySaying.innerText = sayingdisplay12(new Date)
        };

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