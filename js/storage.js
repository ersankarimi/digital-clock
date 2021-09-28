const cacheKey = "FORMAT";
const cacheName = "NAME";
const cacheWallpaper = "WALLPAPER";

// punya clock
function checkStatusClockFormat(el) {
    if (el == "true") {
        localStorage.setItem(cacheKey, el);
    };

    localStorage.setItem(cacheKey, el);
};

function getValueClockFormat() {
    return localStorage.getItem(cacheKey);
};

// punya nama
function setNameToLocalStorage(val) {
    localStorage.setItem(cacheName, val);
};

function getNameFromLocalStorage() {
    return localStorage.getItem(cacheName);
};

// punya wallpaper
function setCurrentWallpaper(val) {
    localStorage.setItem(cacheWallpaper, val);
}

function getLastWallpaper() {
    return localStorage.getItem(cacheWallpaper);
}