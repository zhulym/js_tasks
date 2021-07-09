// /* ==========================  JS tasks ==================================*/

// // 1. Преобразовать строку в массив слов
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



// // 8. Разница между двумя массивами
// //    Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2
// let arr1 = [1, 2, 'a'];
// let arr2 = [1, 2, 3, 4, 'b'];

// function union() {
//     let newArr = arr1.filter(el => arr2.indexOf(el) < 0);
//     return newArr;
// }
// console.log(union());



// // 9. Сортировка массива по убыванию
// const numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// const newArr = numbers.sort((a, b) => b - a);
// console.log(newArr);



// // 10. преобразуйте массив к виду  [1, 2, 3]
// const arr = [{ id: 1 }, { id: 2, name: 'John' }, { id: 3 }];
// const newArr = arr.map((el) => el.id);
// console.log(newArr);


// // 11. Напишите функцию findLongestWord(str), которая принимает строку 
// //     в качестве параметра и находит самое длинное слово в строке
// function findLongestWord(str) {
//     let arr = str.split(' ');
//     let longest = arr.reduce((firstEl, nextEl) => (firstEl.length > nextEl.length) ? firstEl : nextEl);
//     return longest;
// }
// console.log(findLongestWord('str js react'));


// // 12. Напишите функцию detectDataType(value), которая принимает аргумент и возвращает тип
// function detectDataType(value) {
//     return typeof value;
// }
// console.log(detectDataType(7));



// // 13. Напишете метод который преобразует число 2500 в валюту в зависимости 
// //     от параметра yourMethod('en-US', 'USD', 2500) =>  $2,500.00. 
// //      yourMethod('de-DE', 'EUR', 2500) => 2.500,00 €

// function yourMethod(locales, currency, amount) {
//     return new Intl.NumberFormat(locales, { style: 'currency', currency: currency }).format(amount);
// }
// console.log(yourMethod('en-US', 'USD', 2500));
// console.log(yourMethod('de-DE', 'EUR', 2500));


// // 14. Узнать количество дней в месяце
// //     Напишите функцию JavaScript, чтобы получить количество дней в месяце.
// //     Пример ввода: // console.log(getDaysInMonth(5, 2021));  Вывод: 31

// function getDaysInMonth(setMonth, setYear) {
//     const date = new Date(setYear, setMonth, 0).getDate();
//     return date;
// }
// console.log(getDaysInMonth(5, 2021));


// // 15. Сравнение двух дат. Напишите функцию для сравнения дат (т.е. больше, меньше или равно)
// function compareDates(firstDate, secondDate) {
//     if (new Date(firstDate) > new Date(secondDate)) {
//         return `Дата ${firstDate} более поздняя!`;
//     } else if (new Date(firstDate) < new Date(secondDate)) {
//         return `Дата ${secondDate} более поздняя!`;
//     } else {
//         return `Даты равны!`;
//     }
// }
// console.log(compareDates('01 / 01 / 1990', '01 / 01 / 2021'));



// // 16. Разница между двумя датами в днях
// //     Напишите функцию JavaScript, чтобы узнать разницу между двумя датами в днях.
// //     Пример ввода:   console.log(difference('04/02/2021', '11/04/2021'));   Вывод:216

// function daysBetweenDates(firstDate, secondDate) {
//     const result = (Math.abs(new Date(firstDate) - new Date(secondDate))) / 8.64e+7;
//     return result;
// }
// console.log(daysBetweenDates('04/02/2021', '11/04/2021'));



// // 17. 1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) 
// //    и будет в цикле (times раз), вызывать функцию callback. Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите 
// //    применение этой функции

// const loop = (times = 0, callback = null) => {
//     if (typeof callback !== 'function') {
//         console.log('callback != function');
//         return false;
//     }
//     for (let i = 0; i < Math.floor(times); i++) {
//         callback();
//     }
//     return true;
// }

// const someF = () => {
//     console.log('someF!');
//     return true;
// }
// console.log(loop(5, someF));
// loop(5, someF);
// loop(5, 'someF');
// loop(-1, someF);
// loop(5.5, someF);



// // 18. 2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать 
// //    какую то конкретную фигуру, а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной 
// //    в параметрах фигуры) и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для 
// //    которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление.

// function calculateArea(num1, num2, figure) {
//     let data = {};
//     let area = num1 * num2;
//     data.area = area;
//     data.figure = figure;
//     data.inputData = { num1: num1, num2: num2 };
//     return data;
// }

// console.log(calculateArea(2, 3, 'прямоугольник'));   //{area: 6, figure: "прямоугольник", inputData: {…}}



// 19. Написать цикл, который создаёт массив промисов, внутри каждого промиса происходит обращение к ресурсу 
//     (​https://jsonplaceholder.typicode.com/users/number​), где вместо number подставляется число от 1 до 10, в итоге должно 
//     получиться 10 пром-в. Следует дождаться выполнения загрузки всеми пром-и и далее вывести массив загруженных данных.

// const arrProm = [];
// for (let i = 1; i <= 10; i++) {
//     const url = `https://jsonplaceholder.typicode.com/users/${i}`;
//     const getUsers = async () => {
//         try {
//             const response = await fetch(url);
//             const user = await response.json();
//             arrProm.push(user);
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     getUsers();
// }
// // // Вар. 1
// // Promise.all(arrProm).then(result => {
// //     console.log(result);
// // });

// // Вар. 2
// console.log(arrProm);
//ДОРАБОТАТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// console.log('Hello');



// // 20.Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ 
// //    (по порядковому номеру, а не индексу) и возвращает его. Если такого символа нет, то функция 
// //    возвращает пустую строку.

// const getLetter = (str, numOfLetter) => {
//     const symbol = str[numOfLetter - 1];
//     if (symbol === undefined) {
//         return '';
//     }
//     return symbol
// }
// console.log(getLetter('Daniel', 0));



// // 21. Реализуйте функцию getSentenceTone(), которая принимает строку и определяет тон предложения. 
// //     Если все символы в верхнем регистре, то это вопль — 'scream'. В ином случае — нормальное 
// //     предложение — 'general'.

// const getSentenceTone = str => {
//     if (str.toUpperCase() === str) {
//         return 'scream'
//     }

//     return 'general'
// }
// console.log(getSentenceTone("VASYA"));



// // 22. Напишем функцию getTypeOfSentence(), которая анализирует текст и возвращает описание его тона: 
// //     для обычных предложений – General sentence, для вопросительных – Question sentence.

// const getTypeOfSentence = (sentence) => {
//     let sentenceType;
//     // Предикат, проверяющий окончание текста
//     // Если он оканчивается на символ '?', то вернётся true,
//     // иначе false
//     if (sentence.endsWith('?')) {
//         sentenceType = 'Question';
//     } else {
//         sentenceType = 'General';
//     }

//     return `${sentenceType} sentence`;
// };

// console.log(getTypeOfSentence('Ты кто такой?'));



// // 23. Реализуйте функцию buildUrl(), которая принимает на вход адрес страницы (без указания домена) и 
// //     имя домена, а возвращает полный url со схемой https.
// //     Первым параметром в функцию могут быть переданы адреса с ведущим слешем / и без него. Задача функции 
// //     обрабатывать эту ситуацию, чтобы слеш не дублировался.
// //     Примеры вызова:

// const buildUrl = (adress, domen) => {
//     // debugger;
//     if (!adress.startsWith('/')) {
//         adress = `/${adress}`;
//     }

//     return `https://${domen}${adress}`;
// }

// console.log(buildUrl('/pages/about', 'vk.com'));

// //     Примеры вызова:
// buildUrl('pages/about', 'hexlet.io'); // 'https://hexlet.io/pages/about'
// buildUrl('/pages/about', 'hexlet.io'); // 'https://hexlet.io/page
// // Для главной страницы слэш в конце обязателен
// buildUrl('/', 'ru.code-basics.com'); // 'https://ru.code-basics.com/'
// buildUrl('', 'ru.code-basics.com'); // 'https://ru.code-basics.com/'



// // 24. Реализуйте функцию multiplyNumbersFromRange(), которая перемножает числа в указанном диапазоне 
// //     включая границы диапазона. Пример вызова:  multiplyNumbersFromRange(1, 5); // 1 * 2 * 3 * 4 * 5 = 120

// const multiplyNumbersFromRange = (firstNum, lastNum) => {
//     let i = firstNum;
//     let result = 1;
//     while (i <= lastNum) {
//         result *= i;
//         i++;
//     }
//     return result;
// }

// console.log(multiplyNumbersFromRange(3, 5));



// //25. Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:
// //    joinNumbersFromRange(1, 1); // '1'
// //    joinNumbersFromRange(2, 3); // '23'
// //    joinNumbersFromRange(5, 10); // '5678910'

// const joinNumbersFromRange = (num1, num2) => {
//     let i = num1;
//     let str = '';
//     while (i <= num2) {
//         str += `${i}`;
//         i++;
//     }

//     return str;
// }

// console.log(joinNumbersFromRange(2, 5));


// // 26. Реализуйте функцию printReversedNameBySymbol(), которая печатает переданное слово посимвольно, 
// // как в примере из теории, но делает это в обратном порядке.

// const printReversedNameBySymbol = str => {
//     let newStr = str.split('').reverse().join('');
//     let i = 0;
//     let lengthIndex = str.length - 1;
//     while (i <= lengthIndex) {
//         console.log(newStr[i]);
//         i++
//     }
// }

// console.log(printReversedNameBySymbol('Федя'));



// // 27. Реализуйте такую же функцию reverse(), но выполняющую обход строки не с первого элемента по последний, 
// //     а наоборот, от последнего к первому. 

// const reverse = str => {
//     let i = str.length - 1;
//     let result = '';

//     while (i >= 0) {
//       result = `${result}${str[i]}`;
//       i--;
//     }
//     return result;
//   };



// // 28. Реализуйте функцию filterString(), принимающую на вход строку и символ, и возвращающую новую строку, в 
// //     которой удален переданный символ во всех его позициях.

// const filterString = (str, char) => {
//     const arr = str.split('').filter(el => el !== char).join('');
//     return arr;
// }
// console.log(filterString('If I look back I am lost', 'I'));


// // 29. Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый 
// //     n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
// //     Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

// const makeItFunny = (str, num) => {
//     let i = 0;
//     let newStr = '';
//     while (i < str.length) {

//         if ((i + 1) % num === 0) {
//             newStr += `${str[i].toUpperCase()}`;
//         } else {
//             newStr += str[i];
//         }

//         i++;
//     }
//     return newStr;
// }


// // !!!!!! 30. Задача поиска простых чисел. Напомним, что простое число — это число, которое делится без остатка только 
// //     на себя и на единицу. Напомним, что простое число — это число, которое делится без остатка только на себя 
// //     и на единицу.

// const isPrime = (number) => {
//     if (number < 2) {
//         return false;
//     }

//     let divider = 2;

//     while (divider <= number - 1) {
//         if (number % divider === 0) {
//             return false;
//         }

//         divider++;
//     }

//     return true;
// }

// console.log(isPrime(3)); //true
// console.log(isPrime(4)); //false
// console.log(isPrime(29)); //true


// // 31. Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву.
// //     Функция принимает два параметра:

// const hasChar = (str, char) => {
//     let i = 0;
//     while (i < str.length) {
//         if (str[i] === char) {
//             return true
//         }
//         i++;
//     }

//     return false
// }

// console.log(hasChar('Renly', 'R'));  // true
// console.log(hasChar('Renly', 'r'));  // false



// // 32. Реализуйте функцию encrypt(), которая принимает на вход исходную строку и возвращает строку по 
// //     следующему алгоритму. Она бы брала текст и переставляла в нем каждые два подряд идущих символа.

// const encrypt = str => {
//     let newStr = '';
//     for (let i = 0; i < str.length; i += 2) {
//         newStr += `${str.charAt(i + 1)}${str.charAt(i)}`;
//     }
//     return newStr;
// };

// console.log(encrypt('attack')); // 'taatkc'



// // 33. Find the greatest common divisor of two positive integers. The integers can be large, so you need to find 
// //     a clever solution.
// //     The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer 
// //     that is also greater or equal to 1.
// //     Test.assertEquals(mygcd(30,12),6)

// const mygcd = (x, y) => {
//     let i = 1;
//     const allCommonDevisors = [];

//     while (i <= Math.max(x, y)) {
//         if (Number.isInteger(x / i) && Number.isInteger(y / i)) {
//             allCommonDevisors.push(i);
//         }
//         i++;
//     }

//     return allCommonDevisors.sort((a, b) => a - b).reverse()[0];
// }

// console.log(mygcd(30, 12));



// // 34.In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive 
// //    integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// //     Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an 
// //      exception of type throw a RangeError (JavaScript)

// const factorial = n => {
//     if (n > 12){
//       throw new RangeError('Введите число меньше 12!');
//     }

//     if (n === 1 || n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n-1);
//     }
//   }

// console.log(factorial(3));



// // 35. You get an array of numbers, return the sum of all of the positives ones.
// //Example [1,-4,7,12] => 1 + 7 + 12 = 20

// const positiveSum = arr => {
//     const newArr = [];
//     arr.forEach(el => (el > 0) ? newArr.push(el) : el);
//     return newArr.reduce((a, b) => a + b);
// }

// console.log(positiveSum([-5, -1, -2, -3, -4]));



// //36. Complete the method that takes a sequence of objects with two keys each: country or state, and capital. 
// //    Keys may be symbols or strings.
// //      The method should return an array of sentences declaring the state or country and its capital.

// let mixed_capitals = [{ "state": 'Maine', capital: 'Augusta' }, { country: 'Spain', "capital": "Madrid" }];

// const capital = capitals => {
//     return capitals.map(obj => `The capital of ${obj.state || obj.country} is ${obj.capital}`);
// }

// console.log(capital(mixed_capitals[0]));



// // 37. Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less 
// //     than 1 (in C#, N might be less then 1).
// //     Replace certain values however if any of the following conditions are met:
// //     If the value is a multiple of 3: use the value "Fizz" instead
// //     If the value is a multiple of 5: use the value "Buzz" instead
// //     If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// const fizzbuzz = n => {
//     const newArr = [];
//     let i = 1;
//     while (i <= n) {
//         switch (true) {
//             case (i % 3 === 0 && i % 5 === 0):
//                 newArr.push('FizzBuzz');
//                 break;
//             case (i % 5 === 0):
//                 newArr.push('Buzz');
//                 break;
//             case (i % 3 === 0):
//                 newArr.push('Fizz');
//                 break;
//             default:
//                 newArr.push(i);
//         }
//         i++;
//     }
//     return newArr;
// }

// console.log(fizzbuzz(15))



// // 38.  Вернуть длину самого короткого слова в строке
// const findShort = s => {
//     const arr = s.split(' ').sort((a, b) => a.length - b.length);
//     return arr[0].length;
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));  //3



// // 39. Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
// //     Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of 
// //     the natural numbers 1, 2, 3, 4, 5, etc."

// const sumTriangularNumbers = n => {
//     if (n <= 0) { return 0 };
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         let j = i;
//         while (j > 0) {
//             sum += j;
//             j--;
//         }
//     }
//     return sum;
// }

// console.log(sumTriangularNumbers(4));



// //40. Create a function that takes one positive three digit integer and rearranges its digits to get the 
// //    maximum possible number. Assume that the argument is an integer. Return null if the argument is not valid.

// const maxRedigit = n => {
//     if (n <= 0 || n > 999 || n < 100 || n/n !== 1) { return null };
//     const arr = n.toString().split('');
//     const max = +(arr.sort((a, b) => a - b).reverse().join(''));
//     return max;
// };

// console.log(maxRedigit(164));    // 641



// // 41. 

// const maskify = n => {
//     debugger;
//     if (n.length <= 4) { return n };
//     if (n === '') { return '' };
//     const visible = n.slice(-4);
//     let amountOfSymbols = n.length - 4;
//     const arr = [];
//     while (amountOfSymbols >= 1) {
//         arr.push('#');
//         amountOfSymbols--;
//     }
//     return `${arr.join('')}${visible}`
// }

// console.log(maskify('1646464645464'));



// // 42. Из массива создать номар по шаблону
// const a = [3, 1, 1, 1, 1, 1, 2, 2, 2, 8];

// const createPhoneNumber = n => {
//     const n1 = n.slice(0, 3).join('');
//     const n2 = n.slice(4, 7).join('');
//     const n3 = n.slice(-4).join('');
//     return `(${n1}) ${n2}-${n3}`;
// }

// console.log(createPhoneNumber(a));  //(111) 111-1111



// // 43. Отсортировать массив проверив первых два числа, меньшее должно быть первым
// const a = [9, 7, 1, 2, 4, 6, 8];
// const bubblesortOnce = a => {
//     if (a[0] > a[1]) {
//         let b = a.splice(0, 2).reverse();
//         let c = a.splice(0, a.length - 1);
//         console.log(b);
//         console.log(c);
//         return [...b, ...c];
//     }
//     return a;
// }



// // 44. Сортировать эл массива по возрасту
// const arr = [
//     { age: 83, name: 'joel' },
//     { age: 46, name: 'roger' },
//     { age: 99, name: 'vinny' },
//     { age: 26, name: 'don' },
//     { age: 74, name: 'brendan' }
// ]
// const orderPeople = function (people) {
//     return people.sort((a, b) => a.age - b.age);
// }

// console.log(orderPeople(arr));



// // 45. Вывести объект с указанием кто онлайн офлайн или ушел  (если время > 10мин)
// //    {online: ['David'], offline: ['Lucy'], away: ['Bob']}   такой массив на выходе должен быть
// const arr = [{
//     username: 'Lucy',
//     status: 'offline',
//     lastActivity: 22
// }, {
//     username: 'WWW',
//     status: 'offline',
//     lastActivity: 22
// },
// {
//     username: 'Bob',
//     status: 'online',
//     lastActivity: 104
// }];

// const whosOnline = friends => {

//     if (friends === []) return {};
//     const status = {
//         online: [],
//         offline: [],
//         away: []
//     }

//     friends.forEach(el => {
//         if (el.status === 'online' && el.lastActivity > 10) {
//             status.away.push(el.username);
//         } else if (el.status === 'offline') {
//             status.offline.push(el.username);
//         } else if (el.status === 'online') {
//             status.online.push(el.username);
//         }
//     })

//     for (const key in status) {
//         if (status[key].length === 0) {
//             delete status[key];
//         }
//     }

//     return status;
// }

// console.log(whosOnline(arr));


// // 46. Вернуть массив с элементами у которых все элементы одного типа
// const someArr = [
//     [123, 234, 432],
//     ['', 'abc'],
//     [],
//     ['', 1],
//     ['', '1'],
// ];
// const filterHomogenous = arr => {
//     const filterArr = [];
//     arr.filter(el => {
//         const type = typeof el[0];
//         if (type === "undefined") return;
//         const result = el.every(a => typeof a === type);
//         if (result) filterArr.push(el);
//     })
//     return filterArr;
// }

// console.log(filterHomogenous(someArr));


// // 47. Your task is to implement the so-called 'towel sort' algorithm.
// //    Following matrix should be 'sorted' to: [1, 2, 3, 6, 5, 4, 7, 8, 9 ]
// const mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// function towelSort(matrix) {
//     const sorted = matrix.map((el, i) => (i !== 0 || i % 2 !== 0) ? el.reverse() : el);
//     const result = [];
//     sorted.forEach(el => el.forEach(e => result.push(e)));
//     return result;
// }

// console.log(towelSort(mat));



// // 48.In this Kata, you will be given two positive integers a and b and your task will be to apply the 
// //    following operations:
// // i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
// // ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
// // iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].

// const solve = (a, b) => {
//     debugger;
//     if (a === 0 || b === 0) {
//         return [a, b];
//     } else if (a >= b) {
//         a = a - 2 * b;
//         return solve(a, b);
//     } else if (b >= 2 * a) {
//         b = b - 2 * a;
//         return solve(a, b);
//     } else {
//         return [a, b];
//     }
// }

// console.log(solve(2, 6));



// // 49. Convert decimal numbers to binary. Enjoy! No cheating. No toString
// const decToBin = d => {
//     let result = [];
//     while (d >= 1) {
//         result.push(d % 2);
//         d = Math.floor(d / 2);
//     }
//     return result.reverse().join('');
// }

// console.log(decToBin(31));
//   // rules for decision http://ucheba-vmeste.blogspot.com/




// // 50. Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// //     Leave punctuation marks untouched. Знаки препинания точка воскл и вопрс ay не добавляется
// //     Examples
// //     pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// //     pigIt('Hello world !');     // elloHay orldway !

// const pigIt = str => {
//     const arr = str.split(' ');
//     console.log(arr);

//     const wordsArr = arr.map(el => {
//         const firstLet = el.charAt(0);
//         if (/^[A-Za-z]+$/.test(el)) {
//             return [`${el.slice(1, el.length)}${firstLet}ay`];
//         }
//         return [el];
//     })
//     console.log(wordsArr);
//     const almostReadyArr = wordsArr.map(el => el.join([]));
//     console.log(almostReadyArr);
//     return almostReadyArr.join(' ');
// }

// console.log(pigIt('Pig latin is cool !'));




// // 51. Переместить все нули в конец строки
// const moveZeros = arr => {
//     const arrZero = [];
//     let i = 0;
//     while (i < arr.length) {
//         if (arr[i] === 0) {
//             arrZero.push(arr[i]);
//             arr.splice(i, 1);
//             --i;
//         }
//         i++;
//     }

//     return [...arr, ...arrZero];
// }

// console.log(moveZeros([0, 0, 9, 1, 0, 1, 1, 3, 1, 9, 0, 0, 9, 0, 2, 0, 0, 0, 9, 0]));



// //52.  Create an identity matrix of the specified size( >= 0).
// //       [ [1,0,0,0,0],
// //         [0,1,0,0,0],
// //(5) =>   [0,0,1,0,0],
// //         [0,0,0,1,0],
// //         [0,0,0,0,1] ] 

// const getMatrix = num => {
//     const arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push([]);
//         for (let j = 0; j < num; j++) {
//             arr[i].push(0);
//         }
//     }

//     arr.map((el, i) => el.splice(i, 1, 1));
//     return arr;
// }
// console.log(getMatrix(4));



// //53. Перевернуть матрицу на 90град влево (должно работать на любых размерностях)
// //      Input: {{-1, 4, 5},
// //              { 2, 3, 4}}

// //      Output: {{ 5, 4},
// //               { 4, 3},
// //               {-1, 2}}

// const rotateMatrix = arr => {
//     const newArr = [];
//     let lastIndex = 1;

//     for (let i = 0; i < arr[0].length; i++) {
//         newArr.push([]);
//         for (let j = 0; j < arr.length; j++) {
//             newArr[i].push(arr[j][arr[j].length - lastIndex]);
//         }
//         lastIndex++;
//     }

//     return newArr;
// }

// console.log(rotateMatrix([
//     [-85, 41, 59, 57, 8, 75, -16, 41, 42, 58, 64],
//     [-85, 41, 59, 57, 8, 75, -16, 41, 42, 58, 64],
//     [-85, 41, 75, 55, 57, 10, -16, 41, 42, 58, 64],
//     [-85, 41, 54, 215, 8, 10, -16, 41, 42, 58, 64],
//     [-85, 41, 54, 55, 8, 10, -16, 41, 42, 58, 64],
// ]));

// console.log(rotateMatrix([
//     [-1, 4, 5, 5, 8, 10],
//     [2, 3, 4, 1, 2, 10],
//     [-1, 4, 5, 5, 8, 10],
//     [-16, 41, 54, 55, 8, 10],
//     [-1, 4, 5, 5, 8, 10],
//     [-1, 4, 5, 5, 8, 10],
//     [-25, 25, 25, 25, 25, 10],
//     [-25, 25, 25, 25, 25, 10],
//     [-25, 25, 25, 25, 25, 10],
//     [-100, 100, 100, 100, 100, 100]
// ]));



// // 54. Convert Hash To An Array

// const convertHashToArray = hash => {
//     const arr = Object.entries(hash);
//     const el = arr.shift();
//     if (el === undefined) return [];
//     arr.splice(1, 0, el)
//     return arr;
// }

// console.log(convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }));
// console.log(convertHashToArray({}));



// //55. Если в массиве а есть элемент из массива b то он должен быть удалён, вернуть нов массив

// const arrayDiff = (a, b) => {
//     if (a.length === 0) return [];
//     if (b.length === 0) return a;
//     const newArr = [];
//     b.forEach((el) => a.forEach((aEl) => {
//         if (el === aEl) {
//             newArr.push(aEl);
//         };
//     }))

//     return a.filter(el => !newArr.includes(el));
// }

// console.log(arrayDiff([], [4, 5]))
// console.log(arrayDiff([1, 2, 3], [1, 2]))
// console.log(arrayDiff([1, 2, 2], [2]))
// console.log(arrayDiff([3, 4], [3]))
// console.log(arrayDiff([1, 8, 2], []))


// //55.  Найти число наименьшее совпадающее с индексом

// const indexEqualsValue = a => {

//     let minI = 0;
//     let maxI = a.length - 1;
//     while (minI < maxI) {
//         let i = Math.floor((maxI + minI) / 2);
//         if (i <= a[i]) {
//             maxI = i;
//         } else {
//             minI = i + 1;
//         }
//     }

//     return (a[maxI] === maxI) ? maxI : -1;

//     /*===== duration  1945 ms > 150 ms ====*/
//     //     let i = 0
//     //     while (i <= a.length) {
//     //         if (a[i] === i) {
//     //            return i;
//     //         }
//     //         i++;
//     //     }
//     //     return -1;
// }

// console.log(indexEqualsValue([-5, 0, 5, 3, 10, 5, 20, 35, 74, 0, 5]));