"use strict";
const cacheUsername = "USER_NAME";
const cacheClockFormat24 = "CLOCK_FORMAT_24";
const cacheShowSecond = "SHOW_SECOND";
const cacheQuotes = "QUOTES";
const cacheBackgroundDisplay = "BACKGROUND";
const cacheTodoOpened = "TODO_OPENED";
const cacheTodoListItemName = "TODO_LIST_ITEM_NAME";

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

// set and get quotes for user display
function setQuotesToLocalStorage(value) {
    localStorage.setItem(cacheQuotes, value);
};

function getQuotesFromLocalStorage() {
    return localStorage.getItem(cacheQuotes);
};

// set and get background display
function setBackgroundDisplayToLocalStorage(value) {
    localStorage.setItem(cacheBackgroundDisplay, value);
};

function getBackgroundDisplayFromLocalStorage() {
    return localStorage.getItem(cacheBackgroundDisplay);
};

// set and get, is todo already opened ?
function setTodoOpenToLocalStorage(value) {
    localStorage.setItem(cacheTodoOpened, value);
};

function getTodoOpenFromLocalStorage() {
    return localStorage.getItem(cacheTodoOpened);
};

// set and get todo list item name
function setTodoListItemNameToLocalStorage(value) {
    localStorage.setItem(cacheTodoListItemName, value);
};

function getTodoListItemNameFromLocalStorage() {
    return localStorage.getItem(cacheTodoListItemName);
};