const cacheKey = "FORMAT";

function checkStatus(el) {
    if (el == "true") {
        localStorage.setItem(cacheKey, el)
    }

    localStorage.setItem(cacheKey, el)
}

function getValue() {
    return localStorage.getItem(cacheKey);
}