"use strict";

// Variabel
// container variabel
const container = document.querySelector(".container");

// display text variabel
const displayClock = container.querySelector(".clock");
const displayDay = container.querySelector(".day");
const displaySaying = container.querySelector(".saying");
const displayQuotes = container.querySelector(".quote");

// more button variabel
const moreButton = container.querySelector("#more-btn");

// changes wallpaper button
const changesWallpaperBtn = container.querySelector("#random-wallpaper");

// changes qoutes button 
const changesQuotes = container.querySelector("#random-quotes");

// popover button
const popoverBottom = container.querySelector("#popover");
moreButton.addEventListener("click", function () {
    popoverBottom.classList.toggle("hide");
});

// get checkbox for clock format element variabel
const clockFormatToggle = container.querySelector(".onoffswitch-checkbox-clockformat");

// get checkbox for show second element variabel
const showSecondToggle = container.querySelector(".onoffswitch-checkbox-showsecond");

// variabel element dari title todo pojok kanan bawah
const todoTitleRight = container.querySelector("#todo-opened");

// variabel to get element button new todo
const buttonNewTodo = container.querySelector(".btn-new-todo");

// variabel element dari todo list wrapper (container nya)
const todoListWrapper = container.querySelector(".todo-list-wrapper");

// variabel untuk element input new todo
const newTodoInput = container.querySelector("#new-todo-input");

// variabel seleksi element list-todo (parent dari list-todo-item)
const listTodoParent = container.querySelector(".list-todo");

// variabel untuk element todo item
const todoItem = container.querySelectorAll("#todo-item");

// list text to display on screen varibel
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// variabel seleksi element todo-caption-middle
const todoCaptionMiddle = container.querySelector(".todo-caption-middle");

const sayingTwo = {
    "sunday" : {
        "morning" : [`Good morning ${getNameFromLocalStorage()}.`, `Enjoy your weekend ${getNameFromLocalStorage()}.`, `It's weekends, do domething ${getNameFromLocalStorage()}.`],
        "afternoon" : [`Good afternoon ${getNameFromLocalStorage()}.`, `Sleep for a while ${getNameFromLocalStorage()}.`, `Be grateful ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening ${getNameFromLocalStorage()}.`, `Take a rest ${getNameFromLocalStorage()}.`, `Gather Your Strength ${getNameFromLocalStorage()}.`]
    },
    "monday": {
        "morning" : [`Good morning, ${getNameFromLocalStorage()}.`, `Grab your coffee ${getNameFromLocalStorage()}.`, `Keep going ${getNameFromLocalStorage()}!`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Keep it up!`, `Be still ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Be grateful ${getNameFromLocalStorage()}.`, `Take a rest ${getNameFromLocalStorage()}!`]
    }, 
    "tuesday": {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `Be nice.`, `Never give up.`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Just do it!`, `And still, I rise`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Strive for greatness.`, `Rest and be thankful.`]
    }, 
    "wednesday": {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `Start doing ${getNameFromLocalStorage()}.`, `Love for all.`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Strive for greatness.`, `Be nice.`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Just rest, it's okay.`, `Take a rest ${getNameFromLocalStorage()}!`]
    },
    "thursday": {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `You can do it.`, `Be nice.`], 
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Grab your coffee.`, `Keep it up!`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Sleep well, ${getNameFromLocalStorage()}.`, `Take a rest, ${getNameFromLocalStorage()}!`]
    },
    "friday": {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `Prayer changes everything.`, `Be thankful.`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Love yourself ${getNameFromLocalStorage()}.`, `Grab your coffee, ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}.`, `Sleep well ${getNameFromLocalStorage()}.`, `Be greatful.`]
    },
    "saturday" : {
        "morning": [`Good morning, ${getNameFromLocalStorage()}.`, `Do something ${getNameFromLocalStorage()}.`, `Grab your coffee.`],
        "afternoon": [`Good afternoon, ${getNameFromLocalStorage()}.`, `Take a nap.`, `Do something ${getNameFromLocalStorage()}.`],
        "evening": [`Good evening, ${getNameFromLocalStorage()}`, `Sleep well.`, `It's okey, just rest!`]
    }
};

const quotes = ["Someday is not a day of the week.", "Your time is limited, so don't waste it living someone else's life.", "If you are not taking care of your customer, your competitor will.", "Beware of monotony; it's the mother of all the deadly sins.", "Nothing is really work unless you would rather be doing something else.", "Be patient with yourself. Self-growth is tender, it's holy ground. There's no greater investment.", "If you never try , you'll never know.", "Without hustle, talent will only carry you so far.", "Working hard for something we don't care about is called stressed, working hard for something we love is called passion.", "I'd rather regret the things I've done than regret the things I haven't done.", "Monday morning you sure look fine.", "The biggest thrill wasn't in winning on Sunday but in meeting the payroll on Monday.", "Time is what we want most and what we use worst.", "Only you can change your life. Nobody else can do it for you.", "Everyone thinks of changing the world, but no one thinks of changing himself.", "Don’t stop when you are tired. Stop when you are done.", "Happiness is not something ready made. It comes from your own actions.", "You can either experience the pain of discipline or the pain of regret. The choice is yours.", "Words can inspire, thoughts can provoke, but only action truly brings you closer to your dreams.", "Do something today that your future self will thank you for.", "Success is not final. Failure is not fatal. It is the courage to continue that counts.", "Be strong enough to let go and wise enough to wait for what you deserve.", "Live as if you were to die tomorrow. Learn as if you were to live forever.", "When the pain of an obstacle is too great, challenge yourself to be stronger.", "The difference between who you are and who you want to be is what you do.", "Success is going from failure to failure without losing your enthusiasm.", "Stop being afraid of what can go wrong and start being positive about what can go right.", "It is better to fail in originality than to succeed in imitation.", "Your mind is powerful. When you fill it with positive thoughts your whole world will change.", "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.", "A negative mind will never give you a positive life.", "Time is what we want most and what we use worst.", "Better three hours too soon than a minute too late.", "Everyone thinks of changing the world, but no one thinks of changing himself.", "The simple act of paying attention can take you a long way.", "Happiness is not something ready made. It comes from your own actions.", "You can either experience the pain of discipline or the pain of regret. The choice is yours.", "Do something today that your future self will thank you for.", "Be strong enough to let go and wise enough to wait for what you deserve.", "When the pain of an obstacle is too great, challenge yourself to be stronger.", "Be the change that you wish to see in the world.", "I never dreamed about success. I worked for it.", "Don’t be afraid to give up the good to go for the great.", "The difference between who you are and who you want to be is what you do.", "Never stop learning because life never stops teaching.", "Stop dreaming, and start doing.", "If you never try , you'll never know.", "The more you learn, the more you earn.", "Experience is a hard teacher because she gives the test first, the lesson afterwards."]

// array untuk menyimpan todo
let todoListItem = [];
let todoListItemDone = [];
let todoListItemDoneUpdate = [];


// function rotate quote
function rotateSaying(quoteList, day, time, min, i) {
    return (min >= 0 && min <= 20) ? quoteList[day][time][i]
    : (min >= 21 && min <= 40) ? quoteList[day][time][i+1]
    : quoteList[day][time][i+2]
};


// Function
// function saying 24 clock
function sayingdisplay24(hrs) {
    let clock = parseInt(hrs[0] + hrs[1]);
    return clock >= 0 && clock <=12 ? rotateSaying(sayingTwo, showDay().toLowerCase(), "morning", new Date().getMinutes(), 0) // morning
    : clock > 12 && clock <= 18 ? rotateSaying(sayingTwo, showDay().toLowerCase(), "afternoon", new Date().getMinutes(), 0) // afternoon
    : rotateSaying(sayingTwo, showDay().toLowerCase(), "evening", new Date().getMinutes(), 0); // evening
}

// function saying 12 clock
function sayingdisplay12(hrs) {
    let clock = hrs.getHours()
    let ampm = clock >= 12 ? "PM" : "AM";
    clock = clock % 12;
    clock = clock ? clock : 12; // the hour '0' should be '12'

    return (ampm === "AM" && clock >= 0 && clock <=12) ? rotateSaying(sayingTwo, showDay().toLowerCase(), "morning", new Date().getMinutes(), 0) // morning
    : (clock >= 1 && clock <= 6) ? rotateSaying(sayingTwo, showDay().toLowerCase(), "afternoon", new Date().getMinutes(), 0) // afternoon
    : rotateSaying(sayingTwo, showDay().toLowerCase(), "evening", new Date().getMinutes(), 0) // evening
};

// function show quotes
function showQuotes() {
    return (getQuotes() == null) ? setQuotes(quotes[Math.floor(Math.random() * quotes.length)]) : getQuotes();
};

// function change quotes and set to local storage
changesQuotes.addEventListener("click", e => {
    displayQuotes.innerText = quotes[Math.floor(Math.random() * quotes.length)];
    setQuotes(displayQuotes.innerText);
})

// function show day
function showDay() {
    const currentTime = new Date();
    return weekDay[currentTime.getDay()];
};

// function 24 clock format
function twentyFourClock(clk) {
    const currentTime = new Date();
    let showSecondFormat = getShowSecond()

    // variabel second , hr , min
    let seconds = currentTime.getSeconds();
    if (seconds < 10) {
        seconds = "0" + currentTime.getSeconds();
    };

    let min = currentTime.getMinutes();
    if (min < 10) {
        min = "0" + currentTime.getMinutes();
    };

    let hr = currentTime.getHours();
    if (hr < 10) {
        hr = "0" + currentTime.getHours();
    };

    return (showSecondFormat === "true") ? `${hr}:${min}:${seconds}`
    : `${hr}:${min}`;
};

// function 12 clock format
function formatAMPM(date) {
    // get show second from local storage
    let showSecondFormat = getShowSecond();

    // set hr , min, and second
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    if (hours < 10) {
        hours = "0" + hours;
    }; // make 2 digit if hrs < 10

    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;

    return (showSecondFormat === "true") ? `${hours}:${minutes}:${second}`
    : `${hours}:${minutes}`
};

// function switch to 12 clock format
function switchClockFormat() {
    clockFormatToggle.addEventListener("click", e => {
        if (clockFormatToggle.checked == true) {
            let clock = twentyFourClock()
            displayClock.innerText = twentyFourClock(clock);
            displaySaying.innerText = sayingdisplay24(clock)
        } else {
            displayClock.innerText = formatAMPM(new Date);
            displaySaying.innerText = sayingdisplay12(new Date)
        };

        checkStatusClockFormat(clockFormatToggle.checked.toString());
    });
};

function switchShowSecond() {
    showSecondToggle.addEventListener("click", e => {
        setShowSecond(showSecondToggle.checked.toString());
    });
};

// function to get random number
function randomNum() {
    return Math.floor(Math.random() * 64) + 1;
}

// function for skip wallpaper button
changesWallpaperBtn.addEventListener("click", e => {
    try {
        container.style.backgroundImage = `url(${getLastWallpaper()})`
        let script = `./assets/img/wallpaper/${randomNum()}.jpg`;
        // delay .5s for change wallpaper display
        const wallpaperDelay = setTimeout(() => {
            container.style.transition = "all 1s";
            container.style.backgroundImage = `url(${script})`;
            // set value to local storage
            setCurrentWallpaper(script);
        }, 550)
        
    } catch (error) {
        console.log(error);
    };
});

// function to check second and clock format from local storage
// if true so give attribute checked in checkbox element
function giveCheckedAttribute(param1, param2) {
    if (param1 == "true") {
        container.querySelector("#myonoffswitch-clockformat").checked = true;
    } else {
        container.querySelector("#myonoffswitch-clockformat").checked = false;
    };

    if (param2 == "true") {
        container.querySelector("#myonoffswitch-showsecond").checked = true;
    } else {
        container.querySelector("#myonoffswitch-showsecond").checked = false;
    };
};

// event click pada todo title right
function switchShowTodoList(value){
    todoTitleRight.addEventListener("click", () => {
        if (value == "false") {
            setTodoOpened("true")
            todoListWrapper.style.display = "flex";
        } else {
            setTodoOpened("false");
            todoListWrapper.style.display = "none";

            if (todoListItem.length  == 0) {
                buttonNewTodo.style.display = "inline-block";
                newTodoInput.style.display = "none";
            } else {
                buttonNewTodo.style.display = "none";
                newTodoInput.style.display = "block";
            }
        }
    });
}

// function untuk menampilkan atau tidak pada tombol new todo
// berdasarkan value dari local storage TODO_OPENED nya true atau false.
function showTodoList(value) {
    value == "true" ? todoListWrapper.style.display = "flex" : todoListWrapper.style.display = "none";
};

// check ketika dokumen dimuat apakah akan menampilkan todo list
// atau tidak menmapilkan todo list
function checkShowTodoList() {
    if (getTodoOpened() == null || getTodoOpened() == "false") {
        todoListWrapper.style.display = "none";
        setTodoOpened("false");
    } else {
        todoListWrapper.style.display = "flex";
        setTodoOpened("true");
    };
};

// function hide todo button when click and then move cursor to text input
function hideButtonNewTodo() {
    buttonNewTodo.addEventListener("click", () => {
        buttonNewTodo.style.display = "none";
        newTodoInput.style.display = "block";
        newTodoInput.focus();
    });
};

// function untuk ngecek jika ada item todo list minimal 1
// maka akan hide tombol new todo dan caption add your todo list today
// dan tampilkan text input new todo nya
function hideCaptionMiddle(value) {
    if (value >= 1) {
        todoCaptionMiddle.style.display = "none";
        newTodoInput.style.display = "block"
    };
};

// function untuk trigger new todo input saat tombol enter di klik
// dia akan membuat todo list baru (jika didalamnya bukan string kosong);
function addTodoListItem() {
    newTodoInput.addEventListener("keyup", (e) => {
        if (e.code === "Enter" && newTodoInput.value.length >= 2) {
            e.preventDefault();
            listTodoParent.append(makeTodoList(newTodoInput.value));
            addTodoListToLocalStorage(newTodoInput.value);

            console.log(todoListItem);
            console.log(JSON.parse(getItemTodoList()).length);

            newTodoInput.value = "";
            todoCaptionMiddle.style.display = "none";
        } else if (e.code === "Enter" && newTodoInput.value.length <= 2) {
            alert("TODO must be filled out")
            e.preventDefault();
        }
    });
};

// function membuat element todo list
function makeTodoList(value) {
    // membuat parent dari todo-list, dan berikan class todo-item
    const parentTodo = document.createElement("div");
    parentTodo.classList.add("todo-item");

    // buat checkbox untuk mengecek apakah todo ini sudah selesai
    // atau belum selesai, dan berikan dia name , id = todo-item
    const checkboxTodo = document.createElement("input");
    checkboxTodo.type = "checkbox";
    checkboxTodo.id = "todo-item-checkbox";
    checkboxTodo.name = "todo-item-checkbox";
    checkboxTodo.addEventListener("click", function () {
        checkboxTodo.checked == true ? todoListDoneEffect(this.parentElement, true) : todoListDoneEffect(this.parentElement, false);
    });
    todoListItemDone.push(checkboxTodo.checked);
    setItemTodoListDone(JSON.stringify(todoListItemDone));


    // buat element p untuk mengisi todo list nya hasil dari
    // inputan pada text input new todo list
    const typeTodo = document.createElement("input");
    typeTodo.id = "todo-item";
    typeTodo.name = "todo-item";
    typeTodo.value = value;
    typeTodo.addEventListener("click",checkChangesTodoListItem)

    // membuat element icon trash (hapus)
    const deleteTodoIcon = document.createElement("img");
    deleteTodoIcon.src = "assets/img/icon/trash-icon.svg";
    deleteTodoIcon.alt = "delete icon";
    deleteTodoIcon.id = "delete icon";
    deleteTodoIcon.addEventListener("click", deleteTodoList)

    // menambahkan semua element yang dibuat kedalam parentnya
    // parent nya itu pada variabel parentTodo
    parentTodo.appendChild(checkboxTodo);
    parentTodo.appendChild(typeTodo);
    parentTodo.appendChild(deleteTodoIcon);
    return parentTodo;
};

// function saat membuat todo list baru
// maka akan di append kedalam array todoListItem dan di set
// ke local storage user
function addTodoListToLocalStorage(value) {
    todoListItem.push(value);
    setItemTodoList(JSON.stringify(todoListItem));
};

// update array todoListItem
function updateArrayTodoListItem(value1, value2) {
    if (value1 == null && value2 == null) {;
        todoListItem = []
        todoListItemDone = []
        setItemTodoList(JSON.stringify(todoListItem));
        setItemTodoListDone(JSON.stringify(todoListItemDone));
    } else {
        todoListItem = JSON.parse(value1);
        todoListItemDoneUpdate = JSON.parse(value2);
        console.log(todoListItem);
        console.log(todoListItemDoneUpdate);
    };

    hideCaptionMiddle(todoListItem.length);
    return todoListItem, todoListItemDoneUpdate;
};

// update todo list sebelumnya jika sudah punya
// saat pertama kali membuka browser
function renderHistoryTodoList() {
    // console.log(todoListItem + "lol");
    if (todoListItem.length > 0) {
        // for (const item of todoListItem) {
        //     listTodoParent.append(makeTodoList(item));
        // };
        for (let i = 0 ; i < todoListItem.length ; i++) {
            listTodoParent.append(makeTodoList(todoListItem[i]))
            if (todoListItemDoneUpdate[i] == true) {
                todoListItemDone.splice(i, 1, true)
                continue
            }
            todoListItemDone.splice(i, 1, false)
            continue
        }
        console.log(todoListItemDone);
        setItemTodoListDone(JSON.stringify(todoListItemDone));
        return todoListItemDone;
    };
};

function giveCheckCheckbox() {
    const cekbok = document.querySelectorAll("[name=todo-item-checkbox]")
    cekbok.forEach((element, i) => {
        let todo = element.parentElement.querySelector("#todo-item");
        if (todoListItemDone[i] == true) {
            element.parentElement.querySelector("input").checked = true;
            todoListDoneEffect(element.parentElement, true);
            console.log(element.parentElement, " ", i);
            console.log(todo);
        };
    });
}

// untuk mendetiksi perubahan pada todo list
function checkChangesTodoListItem() {
    let beforeValue = this.value;
    this.addEventListener("change", function () {
        todoListItem.splice(todoListItem.indexOf(beforeValue), 1, this.value);
        setItemTodoList(JSON.stringify(todoListItem));
        console.log(todoListItem);
    });
};

// hapus todo list
function deleteTodoList() {
    updateLocalStorage(this.parentElement);
    this.parentElement.remove();
    if (todoListItem.length <= 0) {
        todoCaptionMiddle.style.display = "block";
    };
};

// setelah dihapus update local storage
function updateLocalStorage(parent) {
    let value = parent.querySelector("#todo-item").value;
    let i = todoListItem.indexOf(value);
    console.log(i);
    todoListItem.splice(todoListItem.indexOf(value),1);
    todoListItemDone.splice(i,1);
    console.log(todoListItemDone);
    return setItemTodoList(JSON.stringify(todoListItem)), setItemTodoListDone(JSON.stringify(todoListItemDone));
};

// function saat kita menceklis todo list maka akan tercoret
function todoListDoneEffect(parent, ket){
    // untuk merubah element nya
    let element = parent.querySelector("#todo-item");
    ket == true ? (element.style.textDecoration = "line-through", element.style.color = "rgba(255, 255, 255, .3)") : (element.style.textDecoration = "none", element.style.color = "rgba(255, 255, 255, .8)");

    // untuk ganti keterangan baru nya dalam array todoListItemDone
    todoListItemDone.splice(todoListItem.indexOf(element.value), 1, ket)
    setItemTodoListDone(JSON.stringify(todoListItemDone));
    console.log(todoListItemDone);
    return todoListItemDone;
};