// // 1. Императивное решение задачи.

// const container = document.querySelector('.container');
// setInterval(logClockTime, 1000);

// function logClockTime() {
//     let time = getClockTime();

//     container.innerHTML = time;
// }


// function getClockTime() {
//     let date = new Date();
//     let time = '';

//     time = {                    // get time
//         hours: date.getHours(),
//         minutes: date.getMinutes(),
//         seconds: date.getSeconds(),
//         ampm: "AM"
//     }


//     if (time.hours === 12) {        // change format of clocks
//         time.ampm = "PM";
//     } else if (time.hours > 12) {
//         time.hours -= 12;
//     }

//     if (time.hours < 10) {
//         time.hours = '0' + time.hours;
//     }
//     if (time.minutes < 10) {
//         time.minutes = '0' + time.minutes;
//     }
//     if (time.seconds < 10) {
//         time.seconds = '0' + time.seconds;
//     }

//     return `${time.hours} : ${time.minutes} : ${time.seconds} ${time.ampm}`;
// }


// 2. Декларативный подход к решению задачи

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const getClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
})

const formatOfClock = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
})

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours > 12) ? 'PM' : 'AM'
})



const display = target => time => target(time);

const newFormat = format => time => format
    .replace("hh", time.hours)
    .replace("mm", time.minutes)
    .replace("ss", time.seconds)
    .replace("tt", time.ampm);

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key]) < 10 ? '0' + clockTime[key] : clockTime[key]
})


const convertTime = clockTime =>
    compose(
        appendAMPM,
        formatOfClock
    )(clockTime);















































