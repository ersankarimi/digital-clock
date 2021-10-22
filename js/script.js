"use strict";

class UiInteraction {
    static setUsername() {
        if (getUsernameFromLocalStorage() == null) {
            let username = prompt("Masukkan Panggilan Anda");
            setUsernameToLocalStorage(username.charAt(0).toUpperCase() + username.slice(1));
        } else {
            return getUsernameFromLocalStorage();
        };
    };


    static settingClockDisplay() {
        const moreSettingClock = document.querySelector("#more-btn");
        const popoverBottom = document.querySelector("#popover");

        moreSettingClock.addEventListener("click", function () {
            popoverBottom.classList.toggle("hide");
        });
    };

    static switchClockFormat(displayClock, clock) {
        const clockFormatToggle = document.querySelector(".onoffswitch-checkbox-clockformat");

        getClockFormat24LocalStorage() === null ? setClockFormat24LocalStorage(clockFormatToggle.checked.toString()) :
            clockFormatToggle.addEventListener("click", () => {
                setClockFormat24LocalStorage(clockFormatToggle.checked.toString());
                displayClock.innerText = clock.currentClock(new Date);
            });
    };

    static switchShowSecond(showSecondLocalStorage) {
        const showSecondToggle = document.querySelector(".onoffswitch-checkbox-showsecond");

        showSecondLocalStorage === null ? setShowSecondToLocalStorage(showSecondToggle.checked.toString()) :
            showSecondToggle.addEventListener("click", function (e) {
                setShowSecondToLocalStorage(showSecondToggle.checked.toString());
            });
    };

    static giveCheckedAttributeMoreSettingClock(clockFormat, showsecond) {
        clockFormat === "true" ? document.querySelector("#myonoffswitch-clockformat").checked = true : document.querySelector("#myonoffswitch-clockformat").checked = false;

        showsecond === "true" ? document.querySelector("#myonoffswitch-showsecond").checked = true : document.querySelector("#myonoffswitch-showsecond").checked = false;
    };

    static changesQuotesDisplay() {
        const changesQuoteDisplay = document.querySelector("#random-quotes");

        changesQuoteDisplay.addEventListener("click", () => {
            setQuotesToLocalStorage(QuotesForDisplay.quotes[Math.floor(Math.random() * QuotesForDisplay.quotes.length)]);

            document.querySelector(".quote").innerText = getQuotesFromLocalStorage();
        });
    };

    static changesBackgroundDisplay() {
        const container = document.querySelector(".container");
        const changesBackgroundDisplay = container.querySelector("#random-wallpaper");

        changesBackgroundDisplay.addEventListener("click", function () {
            container.style.backgroundImage = `url(${getBackgroundDisplayFromLocalStorage()})`
            let script = `./assets/img/wallpaper/${Math.floor(Math.random() * 64) + 1}.jpg`;
            // delay .5s for change wallpaper display
            const wallpaperDelay = setTimeout(() => {
                container.style.transition = "all 1s";
                container.style.backgroundImage = `url(${script})`;
                // set value to local storage
                setBackgroundDisplayToLocalStorage(script);
            }, 550)
        })
    };

    static openAndCloseTodoList(valueOpenTodoFromLocalStorage, valueItemTodoList) {
        // variabel element dari title todo pojok kanan bawah
        const openCloseTodoList = document.querySelector("#todo-opened");

        // variabel element dari todo list wrapper (container nya)
        const todoListWrapper = document.querySelector(".todo-list-wrapper");

        // variabel to get element button new todo
        const buttonNewTodoList = document.querySelector(".btn-new-todo");

        // variabel untuk element input new todo
        const newTodoListInput = document.querySelector("#new-todo-input");

        openCloseTodoList.addEventListener("click", function () {
            if (valueOpenTodoFromLocalStorage == "true") {
                setTodoOpenToLocalStorage("false");
                todoListWrapper.style.display = "none";
            } else {
                setTodoOpenToLocalStorage("true");
                todoListWrapper.style.display = "flex";

                if (valueItemTodoList.length < 1) {
                    buttonNewTodoList.style.display = "inline-block"
                    newTodoListInput.style.display = "none"
                } else {
                    buttonNewTodoList.style.display = "none"
                    newTodoListInput.style.display = "block"
                };
            };
        });
    };
};
class Clock {
    currentClock(currentTime) {
        // get hour, minute, and second
        // from current_time argument
        let hr = currentTime.getHours();
        // min hr < 10, so give "0" in front
        hr = hr < 10 ? "0" + hr : hr;

        let min = currentTime.getMinutes();
        // min < 10, so give "0" in front
        min = min < 10 ? "0" + min : min;

        let sec = currentTime.getSeconds();
        // sec < 10, so give "0" in front
        sec = sec < 10 ? "0" + sec : sec;

        switch (getClockFormat24LocalStorage()) {
            case "true":
                return getShowSecondFromLocalStorage() === "true" || getShowSecondFromLocalStorage() === null ? `${hr}:${min}:${sec}` : `${hr}:${min}`;

            case null:
            case "false":
                hr = hr % 12;
                // min hr < 10, so give "0" in front
                hr = hr < 10 ? "0" + hr : hr;
                // the hour 0, should be 12
                hr = hr ? hr : 12

                // AM and PM format
                let ampm = hr >= 12 ? "PM" : "AM";

                return getShowSecondFromLocalStorage() === "true" || getShowSecondFromLocalStorage() === null ? `${hr}:${min}:${sec}` : `${hr}:${min}`;
        }
    }

    setFontSize(size) {
        this.fontSize = size;

        return this;
    };

    setMargin(margin) {
        this.margin = margin;

        return this;
    };

};

// Class to get current day
class CurrentDay {
    weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    setCurrentDay(currentTime) {
        this.currentDay = this.weekDay[currentTime.getDay()];

        return this;
    };

    setFontsize(size) {
        this.fontSize = size;

        return this
    };

    setFontWeight(weight) {
        this.fontWeight = weight;

        return this;
    };
};

class SayingForDisplay {
    // list saying every day
    sayingEveryDay = {
        "sunday": {
            "morning": [`Good morning ${getUsernameFromLocalStorage()}.`, `Enjoy your weekend ${getUsernameFromLocalStorage()}.`, `It's weekends, do domething ${getUsernameFromLocalStorage()}.`],
            "afternoon": [`Good afternoon ${getUsernameFromLocalStorage()}.`, `Sleep for a while ${getUsernameFromLocalStorage()}.`, `Be grateful ${getUsernameFromLocalStorage()}.`],
            "evening": [`Good evening ${getUsernameFromLocalStorage()}.`, `Take a rest ${getUsernameFromLocalStorage()}.`, `Gather Your Strength ${getUsernameFromLocalStorage()}.`]
        },
        "monday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Grab your coffee ${getUsernameFromLocalStorage()}.`, `Keep going ${getUsernameFromLocalStorage()}!`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Keep it up!`, `Be still ${getUsernameFromLocalStorage()}.`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Be grateful ${getUsernameFromLocalStorage()}.`, `Take a rest ${getUsernameFromLocalStorage()}!`]
        },
        "tuesday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Be nice.`, `Never give up.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Just do it!`, `And still, I rise`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Strive for greatness.`, `Rest and be thankful.`]
        },
        "wednesday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Start doing ${getUsernameFromLocalStorage()}.`, `Love for all.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Strive for greatness.`, `Be nice.`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Just rest, it's okay.`, `Take a rest ${getUsernameFromLocalStorage()}!`]
        },
        "thursday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `You can do it.`, `Be nice.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Grab your coffee.`, `Keep it up!`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Sleep well, ${getUsernameFromLocalStorage()}.`, `Take a rest, ${getUsernameFromLocalStorage()}!`]
        },
        "friday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Prayer changes everything.`, `Be thankful.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Love yourself ${getUsernameFromLocalStorage()}.`, `Grab your coffee, ${getUsernameFromLocalStorage()}.`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}.`, `Sleep well ${getUsernameFromLocalStorage()}.`, `Be greatful.`]
        },
        "saturday": {
            "morning": [`Good morning, ${getUsernameFromLocalStorage()}.`, `Do something ${getUsernameFromLocalStorage()}.`, `Grab your coffee.`],
            "afternoon": [`Good afternoon, ${getUsernameFromLocalStorage()}.`, `Take a nap.`, `Do something ${getUsernameFromLocalStorage()}.`],
            "evening": [`Good evening, ${getUsernameFromLocalStorage()}`, `Sleep well.`, `It's okey, just rest!`]
        }
    };

    rotateSayingText(day, minute, time) {
        return (minute >= 0 && minute <= 20) ? this.sayingEveryDay[day][time][0] :
            (minute >= 21 && minute <= 40) ? this.sayingEveryDay[day][time][1] :
            this.sayingEveryDay[day][time][2]
    };

    setSayingForDisplay(currentTime, currentDay) {
        const displaySaying = document.querySelector(".saying");
        let hr = currentTime.getHours();
        let min = currentTime.getMinutes();
        let day = currentDay.toLowerCase();

        switch (getClockFormat24LocalStorage()) {
            case null:
            case "true":
                this.sayingDisplayText = hr >= 0 && hr <= 11 ? this.rotateSayingText(day, min, "morning") // morning
                    :
                    hr >= 12 && hr <= 18 ? this.rotateSayingText(day, min, "afternoon") // afternoon
                    :
                    this.rotateSayingText(day, min, "evening"); // evening

            case "false":
                // AM and PM format
                let ampm = hr >= 12 ? "PM" : "AM";
                hr = hr % 12;
                // min hr < 10, so give "0" in front
                hr = hr < 10 ? "0" + hr : hr;
                // the hour 0, should be 12
                hr = hr ? hr : 12

                this.sayingDisplayText = (ampm === "AM" && hr >= 0 && hr <= 12) ? this.rotateSayingText(day, min, "morning") // morning
                    :
                    (ampm === "PM" && hr >= 1 && hr <= 6) ? this.rotateSayingText(day, min, "afternoon") // afternoon
                    :
                    this.rotateSayingText(day, min, "evening"); // evening
        }
        return this;
    };

    getSayingForDisplay() {
        return this.sayingDisplayText;
    };

    setFontSize(size) {
        this.fontSize = size;

        return this;
    };
};

class QuotesForDisplay {
    static quotes = ["Someday is not a day of the week.", "Your time is limited, so don't waste it living someone else's life.", "If you are not taking care of your customer, your competitor will.", "Beware of monotony; it's the mother of all the deadly sins.", "Nothing is really work unless you would rather be doing something else.", "Be patient with yourself. Self-growth is tender, it's holy ground. There's no greater investment.", "If you never try , you'll never know.", "Without hustle, talent will only carry you so far.", "Working hard for something we don't care about is called stressed, working hard for something we love is called passion.", "I'd rather regret the things I've done than regret the things I haven't done.", "Monday morning you sure look fine.", "The biggest thrill wasn't in winning on Sunday but in meeting the payroll on Monday.", "Time is what we want most and what we use worst.", "Only you can change your life. Nobody else can do it for you.", "Everyone thinks of changing the world, but no one thinks of changing himself.", "Don’t stop when you are tired. Stop when you are done.", "Happiness is not something ready made. It comes from your own actions.", "You can either experience the pain of discipline or the pain of regret. The choice is yours.", "Words can inspire, thoughts can provoke, but only action truly brings you closer to your dreams.", "Do something today that your future self will thank you for.", "Success is not final. Failure is not fatal. It is the courage to continue that counts.", "Be strong enough to let go and wise enough to wait for what you deserve.", "Live as if you were to die tomorrow. Learn as if you were to live forever.", "When the pain of an obstacle is too great, challenge yourself to be stronger.", "The difference between who you are and who you want to be is what you do.", "Success is going from failure to failure without losing your enthusiasm.", "Stop being afraid of what can go wrong and start being positive about what can go right.", "It is better to fail in originality than to succeed in imitation.", "Your mind is powerful. When you fill it with positive thoughts your whole world will change.", "You were born to win, but to be a winner, you must plan to win, prepare to win, and expect to win.", "A negative mind will never give you a positive life.", "Time is what we want most and what we use worst.", "Better three hours too soon than a minute too late.", "Everyone thinks of changing the world, but no one thinks of changing himself.", "The simple act of paying attention can take you a long way.", "Happiness is not something ready made. It comes from your own actions.", "You can either experience the pain of discipline or the pain of regret. The choice is yours.", "Do something today that your future self will thank you for.", "Be strong enough to let go and wise enough to wait for what you deserve.", "When the pain of an obstacle is too great, challenge yourself to be stronger.", "Be the change that you wish to see in the world.", "I never dreamed about success. I worked for it.", "Don’t be afraid to give up the good to go for the great.", "The difference between who you are and who you want to be is what you do.", "Never stop learning because life never stops teaching.", "Stop dreaming, and start doing.", "If you never try , you'll never know.", "The more you learn, the more you earn.", "Experience is a hard teacher because she gives the test first, the lesson afterwards."];

    setQuotesForDisplay() {
        getQuotesFromLocalStorage() === null ? setQuotesToLocalStorage(QuotesForDisplay.quotes[Math.floor(Math.random() * QuotesForDisplay.quotes.length)]) :
            this.getQuotesForDisplay();

        return this;
    };

    getQuotesForDisplay() {
        return getQuotesFromLocalStorage();
    };

    setMargin(margin) {
        this.margin = margin;

        return this;
    };

    setFontSize(size) {
        this.fontSize = size;

        return this;
    };
};

class BackgroundDisplay {
    setBackgroundDisplay() {
        const container = document.querySelector(".container")

        if (getBackgroundDisplayFromLocalStorage() === null) {
            let script = `./assets/img/wallpaper/${Math.floor(Math.random() * 64) + 1}.jpg`;
            container.style.backgroundImage = `url(${script})`;
            setBackgroundDisplayToLocalStorage(script);
        } else {
            container.style.backgroundImage = `url(${this.getBackgroundDisplay()})`;
        };

        return this;
    };

    getBackgroundDisplay() {
        return getBackgroundDisplayFromLocalStorage();
    };
};

class TodoListItem {
    static todoListItem = []

    constructor(todoListName, todoListStatus) {
        this.todoListName = todoListName;
        this.todoListStatus = todoListStatus;
        TodoListItem.setTodoListItem({
            name: this.todoListName,
            status: this.todoListStatus
        });

        setTodoListItemNameToLocalStorage(JSON.stringify(TodoListItem.todoListItem))
        return this;
    };

    static setTodoListItem(todoListItem) {
        this.todoListItem.push(todoListItem);

        return this;
    };
};
class TodoListManagement {
    addNewTodoList() {
        // variabel seleksi element todo-caption-middle
        const todoListCaptionMiddle = document.querySelector(".todo-caption-middle");

        // variabel to get element button new todo
        const buttonNewTodoList = document.querySelector(".btn-new-todo");

        // variabel untuk element input new todo
        const newTodoListInput = document.querySelector("#new-todo-input");

        buttonNewTodoList.addEventListener("click", function () {
            buttonNewTodoList.style.display = "none";
            newTodoListInput.style.display = "block";
            newTodoListInput.focus();
        });

        newTodoListInput.addEventListener("keyup", (e) => {
            if (e.code === "Enter" && newTodoListInput.value.length >= 2) {
                e.preventDefault();
                const newTodoList = new TodoListItem(newTodoListInput.value, "false");

                // after enter reset value of input ""
                newTodoListInput.value = ""

                // hide caption in middle menu todo list
                todoListCaptionMiddle.style.display = "none";

                // add todo list to UI
                TodoListManagement.makeTodoListToDisplay(newTodoList);
            } else if (e.code === "Enter" && newTodoListInput.value.length <= 1) {
                e.preventDefault();
                alert("TODO must be filled out")
            };
        });

        return this;
    };

    static makeTodoListToDisplay(todoList) {
        const listTodoItem = document.querySelector(".list-todo");
        const todoListWrapper = document.createElement("div");
        todoListWrapper.classList.add("todo-item");

        todoListWrapper.innerHTML = `
        <input type="checkbox" class="todo-item-checkbox" name="todo-item-checkbox">
        <input class="todo-item-name" name="todo-item-name" value="${todoList.todoListName}">
        <img src="assets/img/icon/trash-icon.svg" alt="delete-icon" class="delete-icon">`;

        listTodoItem.appendChild(todoListWrapper);
    };

    getTodoListItem(dataLocal) {
        return dataLocal;
    };

    renderOpenTodo(valueTodoOpenedLocal) {
        // variabel element dari todo list wrapper (container nya)
        const todoListWrapper = document.querySelector(".todo-list-wrapper");
        if (valueTodoOpenedLocal === null || valueTodoOpenedLocal === "false") {
            setTodoOpenToLocalStorage("false")
            todoListWrapper.style.display = "none";
        } else {
            setTodoOpenToLocalStorage("true");
            todoListWrapper.style.display = "flex";
        };

        return this;
    };

    renderTodoListHistory(getTodoListItem) {
        // caption middle todo list
        const todoListCaptionMiddle = document.querySelector(".todo-caption-middle");
        // variabel untuk element input new todo
        const newTodoListInput = document.querySelector("#new-todo-input");

        if (getTodoListItem < 1) {
            todoListCaptionMiddle.style.display = "block";
            newTodoListInput.style.display = "none";
        } else {
            for (const todoList of JSON.parse(getTodoListItemNameFromLocalStorage())) {
                const newTodoList = new TodoListItem(todoList.name, todoList.status);

                // add todo list to UI
                TodoListManagement.makeTodoListToDisplay(newTodoList);

                newTodoListInput.style.display = "block";
                todoListCaptionMiddle.style.display = "none";
            };
        };
        return this;
    };

    deleteTodoList() {
        const deleteTodo = document.querySelectorAll(".delete-icon")
        deleteTodo.forEach(function (element) {
            element.addEventListener("click", function (e) {
                let parent = e.target.parentElement;
                TodoListManagement.updateTodoListWhenDelete(parent)
                parent.remove();

                TodoListManagement.checkTodoListItem(JSON.parse(getTodoListItemNameFromLocalStorage()));
            });
        });
        return this;
    };

    static updateTodoListWhenDelete(parent) {
        const todoListName = parent.querySelector(".todo-item-name").value;
        for (const todoList of TodoListItem.todoListItem) {
            if (todoList.name === todoListName) {
                TodoListItem.todoListItem.splice(TodoListItem.todoListItem.indexOf(todoList), 1);

                setTodoListItemNameToLocalStorage(JSON.stringify(TodoListItem.todoListItem));
            };
        };

        return this;
    };

    static checkTodoListItem(valueLocal) {
        if (valueLocal.length < 1) {
            const todoListCaptionMiddle = document.querySelector(".todo-caption-middle").style.display = "block";
        };

        return this;
    };

    changesTodoList() {
        const todoListName = document.querySelectorAll(".todo-item-name");

        todoListName.forEach(element => {
            element.addEventListener("click", function (e) {
                let valueBefore = e.target.value
                e.target.addEventListener("change", function (e) {
                    for (const todoListName of TodoListItem.todoListItem) {
                        if (todoListName.name === valueBefore) {
                            TodoListItem.todoListItem[TodoListItem.todoListItem.indexOf(todoListName)].name = e.target.value;
                            setTodoListItemNameToLocalStorage(JSON.stringify(TodoListItem.todoListItem));
                        };
                    }
                });
            });
        });
        return this;
    };

};