const cacheKey = "FORMAT";
const cacheName = "NAME";
const cacheWallpaper = "WALLPAPER";
const cacheSecond = "SECOND";
const cacheQuotes = "QUOTES";
const cacheTodoAlready = "TODO_ALREADY";
const cacheTodoOpened = "TODO_OPENED";
const cacheItemTodoList = "TODO_LIST_ITEM";

// punya clock
function checkStatusClockFormat(el) {
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
};

// punya button new todo
function setTodoAlready(value) {
    localStorage.setItem(cacheTodoAlready, value);
};

function getTodoAlready() {
    return localStorage.getItem(cacheTodoAlready);
};

// punya title todo pojok kanan bawah
function setTodoOpened(value) {
    localStorage.setItem(cacheTodoOpened, value);
};

function getTodoOpened() {
    return localStorage.getItem(cacheTodoOpened);
};

// punya list item todo list
function setItemTodoList(value) {
    localStorage.setItem(cacheItemTodoList, value);
};

function getItemTodoList() {
    return localStorage.getItem(cacheItemTodoList);
};