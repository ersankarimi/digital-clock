"use strict";
const cacheUsername = "USER_NAME";
const cacheClockFormat24 = "CLOCK_FORMAT_24";
const cacheShowSecond = "SHOW_SECOND";

// set user name
function setUsernameToLocalStorage(value) {
    localStorage.setItem(cacheUsername, value);
};

function getUsernameFromLocalStorage() {
    return localStorage.getItem(cacheUsername);
};

// set clock 24 format to local storage (true/false)
function setClockFormat24LocalStorage(value) {
    localStorage.setItem(cacheClockFormat24, value);
};

function getClockFormat24LocalStorage() {
    return localStorage.getItem(cacheClockFormat24);
};

// set show second or not to local storage (true/false)
function setShowSecondToLocalStorage(value) {
    localStorage.setItem(cacheShowSecond, value);
};

function getShowSecondFromLocalStorage(value) {
    return localStorage.getItem(cacheShowSecond);
};