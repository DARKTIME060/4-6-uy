const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContent = document.querySelectorAll('.tabsContentItem ');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContent[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContent[i].classList.add('active')
    })
}

// soat

const s = document.querySelector('.s');
const m = document.querySelector('.m');
const h = document.querySelector('.h');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');

function soat() {
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30

    s.style = `transform:rotate(${sec}deg);`
    m.style = `transform:rotate(${min}deg);`
    h.style = `transform:rotate(${hour}deg);`

    hours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    setTimeout(() => {
        soat()
    }, 1000)

}
soat()



// sekundnomer

document.addEventListener("DOMContentLoaded", function () {

    var stopwatchBtn = document.querySelector('.stopwatch__btn');
    var stopwatchClock = document.querySelector('.stopwatch__clock');
    var stopwatchAudio = document.querySelector('.stopwatch__audio');

    var isRunning = false;
    var interval;


    stopwatchBtn.addEventListener('click', function () {
        if (isRunning) {

            clearInterval(interval);
            isRunning = false;
        } else {

            interval = setInterval(function () {
                updateStopwatch();
            }, 1000);
            isRunning = true;
        }
    });


    function updateStopwatch() {
        var secondsElement = document.querySelector('.stopwatch__seconds');
        var minutesElement = document.querySelector('.stopwatch__minutes');
        var hoursElement = document.querySelector('.stopwatch__hours');

        var seconds = parseInt(secondsElement.textContent);
        var minutes = parseInt(minutesElement.textContent);
        var hours = parseInt(hoursElement.textContent);

        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;

            if (minutes === 60) {
                minutes = 0;
                hours++;

                if (hours === 24) {
                    hours = 0;
                }
            }
        }


        secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
        minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
        hoursElement.textContent = hours < 10 ? '0' + hours : hours;
    }
});

// Calculator

let display = document.querySelector(".calc__screen-out");

let buttons = Array.from(document.querySelectorAll(".calc__btn"));

function sqrt(a) {
    return Math.sqrt(a)
}

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "ce":
                display.innerText = display.innerText.slice(0, -1);
                break;
            case "ac":
                display.innerText = "0";
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch (e) {
                    display.innerText = "Error!";
                }
                break;
            case "+/-":
                display.innerText = "-";
                break;
            case "√":
                display.innerHTML = sqrt(display.innerHTML)
            case "%":
                let passedText = display.innerText + "/100";
                display.innerText = eval(passedText);
                break;
            default:
                if (display.innerText === "0" && e.target.innerText !== ".") {
                    display.innerText = e.target.innerText;
                } else {
                    display.innerText += e.target.innerText;
                }
        }
    });
});

