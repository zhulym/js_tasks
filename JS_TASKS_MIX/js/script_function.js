"use strict"

// “Создайте страницу, которая спрашивает имя у пользователя и выводит его. **** Запросить у пользователя число, возвести в квадрат, следующим 
// вопросом спросить результат операции и сравнить ответы. Если ответ не верный вывести повторный prompt и опять сравнить результаты”

// function askName() {
//     let userName = prompt('Enter your name, please!');
//     alert(`Hello ${userName}!`);
// }

// askName();

// let num;

// function askNumber() {
//     num = +prompt('Give me a number from 0 to 100');
//     return num;
// }

// function getNumber() {
//     if (num > 100) {
//         alert('Your number is too LARGE!');
//         askNumber();
//         getNumber();
//     } else if (num < 0) {
//         alert('Your number is too SMALL!');
//         askNumber();
//         getNumber();
//     }
//     else if (!num || (typeof num !== 'number')) {
//         alert('Enter number again!');
//         askNumber();
//         getNumber();
//     } else {
//         alert('Number is correct :)');
//     }
// }

// askNumber();
// getNumber();

// let getPowNumber = Math.pow(num, 2);
// let userAnswer = +prompt('Square your number and give an answer');

// function checkAnswer() {
//     if (userAnswer === getPowNumber) {
//         alert('You did it :) ');
//     } else {
//         alert('Try again :( ');
//         userAnswer = +prompt('Square your number and give an answer - ?');
//         checkAnswer();
//     }
// }

// checkAnswer();

/*=======================  PROMISE =============================*/
// // 1. Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, 
// // после которой промис должен зарезолвится (то есть выполнится успешно).

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(alert("done")), 3000);
// });

// // 2. Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, 
// // после которой промис должен зареджектится (то есть выполнится с ошибкой).

// let promiseEr = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
// });


// // 3. Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, 
// // использующую промисы. Функция delay(ms) должна возвращать промис, который перейдёт 
// // в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert('Сообщение появилось через три секунды'));





/*=======================  ЗАМЫКАНИЯ =============================*/

// // 1. Написать функцию bind, с примером работы:
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// function bind(person, func) {
//     return function (...args) {
//         func.apply(person, args);
//     }
// }

// const person1 = { name: 'Михаил', age: 30, job: 'Front' };
// const person2 = { name: 'Света', age: 25, job: 'SMM' };

// bind(person1, logPerson)();
// bind(person2, logPerson)();




// // 2.Есть массив, но работает неправильно, объяснить почему и как исправить

// const fib = [1, 2, 3, 5, 8, 13];

// // for (var i = 0; i < fib.length; i++) {

// //     setTimeout(() => {
// //         console.log(`FIB[${i}] = ${fib[i]}`);
// //     }, 1500);
// // }

// //Вариант 1 заменить var на let;
// //Вариант 2 изменить область скоупа обернув в функцию и вызвать и изолировать i
// for (var i = 0; i < fib.length; i++) {
//     (function (j) {
//         setTimeout(() => {
//             console.log(`FIB[${j}] = ${fib[j]}`);
//         }, 1500);
//     })(i);
// }



// // 2.Есть классический счётчик, сделать замыкание
// // let count = 0;
// // function counter() {
// //     count += 1;
// //     return count;
// // }
// // counter();
// // console.log(count);

// function makeCounter() {
//     let count = 0;
//     function counter() {
//         count += 1;
//         return count;
//     }
//     return counter();
// }
// console.log(makeCounter());




// 3. Не выполняя кода, ответить, что выведет браузер и почему

// // a. 
// if (!("a" in window)) {
//     let a = 1;
// }
// alert(a);  //ошибка

// // b.
// function a() {
//     alert(this);
// }
// a.call(null); //null

// // c. 
// function b(x, y, a) {
//     arguments[2] = 10;
//     alert(a);
// }
// b(1, 2, 3);  //3



/*=======================  Асинхронность, Промисы, asynk await, fetch, try...catch =============================*/
// // 1.=====
// console.log('1'); 
// console.log('2');

// setTimeout(() => {
//     console.log('3 //Сообщение через 2с');
// }, 2000);

// console.log('4');
// console.log('5');        // 1 2 4 5   3    3 выдаст после 2 с


// // 2.=====
// // если выставим таймаут 0 то всё равно 3 выдаст последним, так как сначала просто регится выпадает из стека,
// // попадает в API, готовится, попадает в очередь, а затем обратно в стек и выдаётся результат
// console.log('1'); 
// console.log('2');

// setTimeout(() => {
//     console.log('3 //Сообщение через 2с');
// }, 00);

// console.log('4');
// console.log('5');        // 1 2 4 5   3    3 выдаст после 2 с



// // 3. 
// console.log('Request data...');   //имитируем запрос на сервер

// // setTimeout(() => {                    //имитируем время обработки запроса
// //     console.log('Preparing data...'); // данные готовятся

// //     const ourData = {                 //например ожидаем эти данные
// //         server: 'aws',
// //         port: 3000,
// //         status: 'working',
// //     }

// //     setTimeout(() => {                // возврат и выведение значения
// //         ourData.modified = true;
// //         console.log('Data received', ourData);
// //     }, 2000);

// // }, 2000);

// //======= далее на примере с промисом

// const newProm = new Promise((resolve, reject) => {
//     setTimeout(() => {                    //имитируем время обработки запроса
//         console.log('Preparing data...'); // данные готовятся
//         const ourData = {                 //например ожидаем эти данные
//             server: 'aws',
//             port: 3000,
//             status: 'working',
//         }
//         resolve(ourData);
//     }, 2000)
// })

// newProm
//     .then(data => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true;
//                 resolve(data);
//             }, 2000);
//         })
//     })
//     .then(clientData => {
//         console.log('Data received', clientData);
//     })
//     .catch((err) => {
//         console.error('Ой, ошибка: ', err);
//     })
//     .finally(() => {
//         console.log('Finlly Обрабатывается всегда, независимо от результата');
//     })