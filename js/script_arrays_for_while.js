
/* ==========================  -ЦИКЛ WHILE-  ==================================*/

// let i = 0;
// while (i < 5) {
//     console.log('Счётчик равен ' + i);
//     i++;
// }


/* ==========================  ЦИКЛ WHILE С BREAK ==================================*/

// while (true) {
//     let num = Number(prompt('Enter number!'))
//     if (num > 0) {
//         break;
//     }
// }


/* ==========================  ПЕРЕБРАТЬ ЭЛТЫ МАССИВА С FOR  ==================================*/


// const array = [25, 46, 54, 48];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

/* ==========================  ПЕРЕБРАТЬ ЭЛТЫ МАССИВА в массиве ==================================*/

// const array = [
//     [25, 46, 54, 48],
//     [25, 46, 54, 48],
//     [25, 46, 54, 48],
// ];

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         console.log(array[i][j]);
//     }
// }

/* ==========================  Переберём элты массива с ForEach  ==================================*/

// const array = [25, 46, 54, 48];

// array.forEach((el, index) => console.log(`${index + 1}.`, el * 100));


/* ==========================  Metod filter() создаёт новый массив со всеми элтами что прошли проверку (ф-ция callback даёт true) ==================================*/
// const array = [25, 46, 54, 48, 105, 94];
// let evenArr = array.filter(function (el) {
//     if (el % 2 == 0) {
//         return el;
//     }
// });

// console.log(evenArr);
// console.log(array);

/* ========================== Metod find() возвр. первый найденный эл что удовл условию(только 1 эл) и прекр работу  ==================================*/

// const array = [25, 46, 54, 48, 105, 94];

// let arr = array.find(el => { return el > 100 });

// console.log(arr);
/* ==========================  Перебор ключей или значений объекта ТОЛЬКО ДЛЯ ОБЪЕКТОВ  FOR IN () ==================================*/

// let obj = {
//     name: 'Vasya',
//     age: 18,
//     city: 'Minsk'
// }

// for (let key in obj) {
//     console.log(key);
// }



// var obj = { name: 'Alex', password: '12345' };
// for (let i in obj) {

//     // Вывести значение каждого свойства объекта
//     console.log(obj[i]);
// }


/* ==========================  Перебор значений массива ТОЛЬКО ДЛЯ МАССИВОВ  FOR OF  ==================================*/
// const array = [25, 46, 54, 48, 105, 94];

// for (let element of array) {
//     console.log(element);
// }


/* ==========================  HW 1  ==================================*/
// 1. С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// function numbers() {
//     for (let i = 0; i <= 10; i++) {

//         if (i === 0) {
//             console.log(i + ' - это ноль!');
//         } else if (i % 2 === 0) {
//             console.log(i + ' - это чётное число!');
//         } else {
//             console.log(i + ' - это нечётное число!');
//         }
//     }
// }

// numbers();


/* ==========================  HW 2  ==================================*/

// const post = {
//     author: "John", //вывести этот текст
//     postId: 23,
//     commments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2 //вывести это число
//             }
//         },
//         {
//             userId: 5, //вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", //вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1
//             }
//         },
//     ]
// }

// let w1 = post.author;
// console.log(w1);

// let w2 = post.commments[0].rating.dislikes;
// console.log(w2);

// let w3 = post.commments[1].userId;
// console.log(w3);

// let w4 = post.commments[1].text;
// console.log(w4);


/* ==========================  HW 3  ==================================*/
// Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 50%, можете использовать метод map https://mzl.la/2ZZohun :


// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// let newPrice = products.map((el) => { return el.price * 0.5 });


// console.log(newPrice);


/* ==========================  HW 4  ==================================*/

// Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
// 2. Отсортируйте товары по цене, можете использовать метод sort https://mzl.la/2Y79hbZ


// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ]
//     },
//     {
//         id: 5,
//         price: 499,
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg"
//         ]
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];


// let filtreImage = products.filter(item => 'photos' in item && item.photos.length > 0);
// console.log(filtreImage);

// /* ==========================  HW 6  ==================================*/
// // Нарисовать горку с помощью console.log, как показано на рисунке,
// // только у вашей горки должно быть 10 рядов, а не 5:
// // x
// // xx
// // xxx
// // xxxx
// // xxxxx

// let row = "";

// function drawX(num) {
//     while (num > 0) {
//         row += "x";
//         console.log(row);
//         break;
//     }
//     if (num === 0) {
//         return;
//     }
//     drawX(num - 1);
// }

// drawX(10);

/* ==========================  HW 7 some tasks for training ==================================*/
//  // 1. Преобразовать строку в массив слов

// const str = 'раз два три четыре пять';
// const arr = str.split(' ');
// console.log(arr);



// // 2. Сделать первую букву строки прописной

// const str = "string not starting with capital";
// const arr = str.split(' ');
// arr[0] = arr[0].replace(arr[0][0], arr[0][0].toUpperCase());
// const newStr = arr.join(' ');
// console.log(newStr);



// // 3. Сравните строки без учёта регистра

// const firstStr = 'string';
// const secondStr = 'StRiNg';
// const trueOrFalse = firstStr.toLowerCase() === secondStr.toLowerCase();
// console.log(trueOrFalse);



// // 4. Удалить лишние пробелы из строки

// let str = "       Max is a good boy    ";
// let arr = str.split(' ');
// let newArr = [];
// arr.forEach((el) => {
//     if (el !== '') {
//         newArr.push(el);
//     }
// });
// str = newArr.join(' ');
// console.log(str);



// // 5. Удалить повторяющиеся элементы массива
// const array = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// const newArr = array.filter((el, i, arr) => arr.indexOf(el) === i);
// console.log(newArr);

// // 5. (Вар 2) Удалить повторяющиеся элементы массива 

// let array = ["php", "php", "css", "css", "script", "script", "html", "html", "java"];
// const newArrUniq = new Set(array);
// array = [...newArrUniq];
// console.log(array);

// // 6. Найдите элемент в массиве который будет без остатка делиться на 2
// const array = [0, 1, 2, 3, 5, 7];
// const newArr = array.filter(el => el % 2 === 0 && el !== 0);
// console.log(newArr);



// // 7. Сумма элементов двух массивов
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];

// const newArr = arr1.concat(arr2);
// const sum = newArr.reduce((prevVal, curVal) => {
//     return prevVal + curVal;
// });
// console.log(sum);



// 8. Разница между двумя массивами
// Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2
let arr1 = [1, 2, 'a'];
let arr2 = [1, 2, 3, 4, 'b'];

function union() {

}

