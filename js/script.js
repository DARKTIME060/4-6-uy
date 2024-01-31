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



// sekundomer

let stopwatchSecond = document.querySelector(".stopwatch__seconds");
let stopwatchMinute = document.querySelector(".stopwatch__minutes");
let stopwatchHour = document.querySelector(".stopwatch__hours");
let stopwatchBtn = document.querySelector(".stopwatch__btn");
let stopwatchLight = document.querySelector(".tabsLink__span");
let stopwatchAudio = document.querySelector(".stopwatch__audio");

stopwatchBtn.addEventListener("click", function () {
  if (this.innerHTML.toLowerCase() == "start") {
    this.innerHTML = "STOP";
    stopwatchLight.classList.add("active");
    interval = setInterval(() => {
      stopwatch();
    }, 1000);
  } else if (this.innerHTML.toLowerCase() == "stop") {
    this.innerHTML = "CLEAR";
    stopwatchLight.classList.remove("active");
    stopwatchLight.classList.add("active_clear");
    clearInterval(interval);
  } else if (this.innerHTML.toLowerCase() == "clear") {
    this.innerHTML = "START";
    stopwatchLight.classList.remove("active_clear");
    stopwatchCount = 0;
    stopwatchSecond.innerHTML = 0;
    stopwatchMinute.innerHTML = 0;
    stopwatchHour.innerHTML = 0;
  }
});

let stopwatchCount = 0;

function stopwatch() {
  stopwatchAudio.play();
  stopwatchCount++;
  if (stopwatchCount < 60) {
    stopwatchSecond.innerHTML = stopwatchCount;
  }
  if (stopwatchCount > 59) {
    stopwatchMinute.innerHTML++;
    stopwatchCount = 0;
    stopwatchSecond.innerHTML = stopwatchCount;
  }
  if (stopwatchMinute.innerHTML > 59) {
    stopwatchHour.innerHTML++;
    stopwatchMinute.innerHTML = 0;
  }
}

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
                let pas = display.innerText * -1;
                display.innerText = (pas)
                break;
            case "√":
                display.innerHTML = sqrt(display.innerHTML)
                break;
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

// timer

let timerHour = document.querySelector(".timer__hours");
let timerMinute = document.querySelector(".timer__minutes");
let timerSecond = document.querySelector(".timer__seconds");
let timerPlay = document.querySelector(".timer__set");
let timerClear = document.querySelector(".timer__clear");
let timerBtns = document.querySelectorAll(
  ".timer__btn, .timer__set, .timer__clear"
);
let timerAudio = document.querySelector(".timer__audio");

for (let i = 0; i < timerBtns.length; i++) {
  timerBtns[i].addEventListener("click", function () {
    timerBtn(this.innerHTML);
  });
}

function timerBtn(el) {
  if (el.toLowerCase() == "play") {
    timerPlay.innerHTML = "PAUSE";
    interval = setInterval(() => {
      timer();
    }, 1000);
  } else if (el.toLowerCase() == "pause") {
    timerPlay.innerHTML = "PLAY";
    clearInterval(interval);
    timerAudio.pause()
  } else if (el.toLowerCase() == "clear") {
    timerHour.innerHTML = "";
    timerMinute.innerHTML = "";
    timerSecond.innerHTML = "";
    timerPlay.innerHTML = "PLAY";
    clearInterval(interval);
    timerAudio.pause()
    timerCount = 0;
  } else {
    if (timerSecond.innerHTML.length < 2) {
      let check = (timerSecond.innerHTML += el);
      checkCount(check);
    } else if (
      timerSecond.innerHTML.length >= 2 &&
      timerMinute.innerHTML.length < 2
    ) {
      timerMinute.innerHTML += el;
    } else if (
      timerMinute.innerHTML.length >= 2 &&
      timerHour.innerHTML.length < 2
    ) {
      timerHour.innerHTML += el;
    }
  }
}

let timerCount = 0;
function checkCount(check) {
  timerCount = check;
}

function timer() {
  if (timerCount > 0) {
    timerCount--;
    timerSecond.innerHTML = timerCount;
  } else if (timerCount == 0) {
    if (timerMinute.innerHTML > 0) {
      timerMinute.innerHTML--;
      timerCount = 59;
      timerSecond.innerHTML = timerCount;
    } else {
      if (timerHour.innerHTML > 0) {
        timerHour.innerHTML--;
        timerMinute.innerHTML = 59;
        timerCount = 59;
        timerSecond.innerHTML = timerCount;
      } else {
        timerHour.innerHTML = "";
        timerMinute.innerHTML = "";
        timerSecond.innerHTML = "";
        timerAudio.play()
      }
    }
  }
}


