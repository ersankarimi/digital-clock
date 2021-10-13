const cacheKey = "FORMAT";
const cacheName = "NAME";
const cacheWallpaper = "WALLPAPER";
const cacheSecond = "SECOND";
const cacheQuotes = "QUOTES";

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

// punya second
function setShowSecond(val) {
    localStorage.setItem(cacheSecond, val);
};

function getShowSecond() {
    return localStorage.getItem(cacheSecond);
};

// punya qoutes
function setQuotes(value) {
    localStorage.setItem(cacheQuotes, value);
};

function getQuotes() {
    return localStorage.getItem(cacheQuotes);
}