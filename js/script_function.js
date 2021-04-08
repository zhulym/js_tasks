"use strict"

// “Создайте страницу, которая спрашивает имя у пользователя и выводит его. **** Запросить у пользователя число, возвести в квадрат, следующим 
// вопросом спросить результат операции и сравнить ответы. Если ответ не верный вывести повторный prompt и опять сравнить результаты”

function askName() {
    let userName = prompt('Enter your name, please!');
    alert(`Hello ${userName}!`);
}

askName();

let num;

function askNumber() {
    num = +prompt('Give me a number from 0 to 100');
    return num;
}

function getNumber() {
    if (num > 100) {
        alert('Your number is too LARGE!');
        askNumber();
        getNumber();
    } else if (num < 0) {
        alert('Your number is too SMALL!');
        askNumber();
        getNumber();
    }
    else if (!num || (typeof num !== 'number')) {
        alert('Enter number again!');
        askNumber();
        getNumber();
    } else {
        alert('Number is correct :)');
    }
}

askNumber();
getNumber();

let getPowNumber = Math.pow(num, 2);
let userAnswer = +prompt('Square your number and give an answer');

function checkAnswer() {
    if (userAnswer === getPowNumber) {
        alert('You did it :) ');
    } else {
        alert('Try again :( ');
        userAnswer = +prompt('Square your number and give an answer - ?');
        checkAnswer();
    }
}

checkAnswer();









