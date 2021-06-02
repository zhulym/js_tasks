// 1. 

const container = document.querySelector('.container');
setInterval(logClockTime, 1000);

function logClockTime() {
    let time = getClockTime();
    container.innerHTML = time;
}

function getClockTime() {
    let date = new Date();
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "PM"
    }

    if (time.hours === 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.hours -= 12;
    }

    if (time.hours < 10) {
        time.hours = '0' + time.hours;
    }
    if (time.minutes < 10) {
        time.minutes = '0' + time.minutes;
    }
    if (time.seconds < 10) {
        time.seconds = '0' + time.seconds;
    }

    return `${time.hours} : ${time.minutes} : ${time.seconds} ${time.ampm}`;
}


// 2. 

const oneSecond = () => 10000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const getTime = date =>
({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const twelveFormat = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
})

const AMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})

const display = target => time => target(time)

const formatClock = format =>
    time =>
        format.replace("hh", time.hours)
            .replace("mm", time.minutes)
            .replace("ss", time.seconds)
            .replace("tt", time.ampm)

const addZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ? "0" + clockTime[key] : clockTime[key]
})

const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        )

const convertTime = clockTime =>
    compose(
        AMPM,
        twelveFormat
    )(clockTime)

const doubleDigits = civilianTime =>
    compose(
        addZero("hours"),
        addZero("minutes"),
        addZero("seconds")
    )(civilianTime)

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            getTime,
            convertTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    )

startTicking()













































