"use strict";



// variabel dan function untuk update
document.addEventListener("DOMContentLoaded", () => {
    // variabel to get name on display
    // get name for input variabel
    let named = getNameFromLocalStorage();
    
    /**
     * * Ini untuk load value dari local storage.
     * * Yang di load itu pengaturan yang sudah diset di local storage
     */
    // pengecekan apakah kita belum mengisi nama apa sudah
    if (named != null || named != undefined) {
        console.log(named);
        // nama = getNameFromLocalStorage();
        // console.log(nama);
    } else {
        // get name for input variabel
        const inputNama = prompt("Masukkan Nama Panggilan Anda : ");
        const namaToLocal = inputNama.charAt(0).toUpperCase() + inputNama.slice(1);
        setNameToLocalStorage(namaToLocal);
        named = getNameFromLocalStorage();
    };

    // mengambil background yg sudah di atur sebelumnya
    if (getLastWallpaper() != null) {
        container.style.backgroundImage = `url(${getLastWallpaper()})`
    }


    // loadTime(value)
    const repeat = setInterval(function () {
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