const cacheKey = "FORMAT";
const cacheName = "NAME";

function checkStatusClockFormat(el) {
    if (el == "true") {
        localStorage.setItem(cacheKey, el);
    };

    localStorage.setItem(cacheKey, el);
};

function setNameToLocalStorage(val) {
    localStorage.setItem(cacheName, val);
};

function getNameFromLocalStorage() {
    return localStorage.getItem(cacheName);
};

function getValueClockFormat() {
    return localStorage.getItem(cacheKey);
};