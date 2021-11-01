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

// const buildUrl = (address, domain) => {
//     // debugger;
//     if (!address.startsWith('/')) {
//         address = `/${address}`;
//     }

//     return `https://${domain}${address}`;
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

// const whoOnline = friends => {

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

// console.log(whoOnline(arr));


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



// // 56.  Get the next prime number!
// //      You will get a number n (>= 0) and your task is to find the next prime number.
// //      Make sure to optimize your code: there will numbers tested up to about 10^12.
// //      Examples
// //      5   =>  7
// //      12  =>  13

// const nextPrime = n => {
//     if (n === 0) return 2;
//     let num = null;
//     let num2 = null;

//     for (let i = n + 1; i < Math.pow(10, 12); i++) {
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 num = j;
//                 break;
//             }
//             num = null;
//         }
//         if (!num) {
//             num2 = i;
//             break;
//         }
//     }
//     return num2;

//     console.log(nextPrime(13));
//     console.log(nextPrime(2971));



// // 57.  Calculator

// const calc = expr => {
//   let result = expr.split(' ').join('');
//   let bracketsIdx = [];
//   bracketsIdx = result.split('').filter(el => el === '(' || el === ')')

//   if (bracketsIdx.length % 2 !== 0
//     || bracketsIdx.length === 1
//     || bracketsIdx[0] === ')'
//     || !bracketsIdx.includes(')') && bracketsIdx.length !== 0
//     || !bracketsIdx.includes('(') && bracketsIdx.length !== 0) {
//     throw "ExpressionError: Brackets must be paired";
//   }

//   while (result.length > 0) {
//     bracketsIdx = [];
//     findBracketsIdx(result);

//     if (bracketsIdx.length === 0) {
//       const result = countPartOfExpr();
//       if (result === Infinity) throw "TypeError: Division by zero."
//       return +result.toFixed(4);
//     }

//     let replace = result.slice(bracketsIdx[1], bracketsIdx[0] + 1);
//     result = result.replace(replace, countPartOfExpr());
//     bracketsIdx = [];
//     if (result === Infinity) throw "TypeError: Division by zero."
//   };

//   function findBracketsIdx(expression) {               // находим индексы внутренних скобок и по ним вычленяем выражения
//     for (let i = 0; i < expression.length; i++) {
//       if (expression[i] === ')') {
//         bracketsIdx.push(i);
//         for (let j = i; j >= 0; j--) {
//           if (expression[j] === '(') {
//             bracketsIdx.push(j);
//             break;
//           }
//         }
//         break;
//       }
//     }
//   }

//   function countPartOfExpr() {
//     let getExpr = result.slice(bracketsIdx[1] + 1, bracketsIdx[0]);    // "36-3*2/6+5"
//     let operators = [];
//     let arrNum;

//     function findNum(num) {               // получили массив чисел без операторов ["36", "3", "2", "6", "5"]
//       arrNum = num.split('*');
//       function divideArr(operator) {
//         arrNum = arrNum.map(el => el.split(operator));
//         arrNum = arrNum.flat();
//       }
//       divideArr('/');               // поочерёдно мутируем массив пока не рассплитится по всем операторам
//       divideArr('+');
//       divideArr('-');
//     }

//     findNum(getExpr);

//     for (let i = 0; i < getExpr.length; i++) {  // получили массив операторов ["-", "*", "/", "+"]
//       if (getExpr[i] == '*' || getExpr[i] == '/' || getExpr[i] == '+' || getExpr[i] == '-') {
//         operators.push(getExpr[i]);
//       }
//     }

//     for (let i = 0; i < operators.length; i++) {
//       const operatorPosition = i + i + 1;         // находим позицию операторов в исходном выражении  ["36", "3", "2", "6", "5"] ,  ["-", "*", "/", "+"]
//       arrNum.splice(operatorPosition, 0, operators[i]);   // вставляем операторы в выражение каждый след оператор будет в позиции i+i+1     0-1  1-3  2-5  3-7
//     }
//     // ["36", "-", "3", "*", "2", "/", "6", "+", "5"] 

//     arrNum = arrNum.filter(el => el !== '');         // убрать возможные пустые строки в массиве (появляются когда промежуточный результат отрицательный)

//     for (let i = 1; i < arrNum.length; i++) {
//       debugger
//       if (arrNum[0] === '-') {
//         arrNum.splice(0, 2, -(arrNum[1]));
//       }

//       if (arrNum[i] === '*') {
//         if (arrNum[i + 1] === '-') {
//           let result1 = -(arrNum[i - 1] * arrNum[i + 2]);
//           arrNum.splice(i - 1, 4, result1);
//         } else {
//           let result1 = (arrNum[i - 1] * arrNum[i + 1]);
//           arrNum.splice(i - 1, 3, result1);
//         }
//         i = 0;
//       }

//       if (arrNum[i] === '/') {
//         if (arrNum[i + 1] === '-') {
//           let result1 = -(arrNum[i - 1] / arrNum[i + 2]);
//           if (result1 === Infinity) throw "TypeError: Division by zero.";
//           arrNum.splice(i - 1, 4, result1);
//         } else {
//           let result1 = (arrNum[i - 1] / arrNum[i + 1]);
//           if (result1 === Infinity) throw "TypeError: Division by zero.";
//           arrNum.splice(i - 1, 3, result1);
//         }
//         i = 0;
//       }
//     }

//     for (let i = 1; i < arrNum.length; i++) {
//       if (arrNum[0] === '-') {
//         arrNum.splice(0, 2, -(arrNum[1]));
//       }

//       if (arrNum[i] === '+') {
//         if (arrNum[i + 1] === '-') {
//           let result1 = (arrNum[i - 1] - arrNum[i + 2]);
//           arrNum.splice(i - 1, 4, result1);
//         } else {
//           let result1 = +(arrNum[i - 1]) + +(arrNum[i + 1]);
//           arrNum.splice(i - 1, 3, result1);
//         }
//         i = 0;
//       }

//       if (arrNum[i] === '-') {
//         if (arrNum[i + 1] === '-') {
//           let result1 = +(+(arrNum[i - 1]) + +(arrNum[i + 2]));
//           arrNum.splice(i - 1, 4, result1);
//         } else {
//           let result1 = arrNum[i - 1] - arrNum[i + 1];
//           arrNum.splice(i - 1, 3, result1);
//         }
//         i = 0;
//       }
//     }
//     return Number(arrNum.toString());
//   }
//   return result.toFixed(4);
// }

// // console.log(calc("1 + 2) * 3"));
// // console.log(calc("((1 + 2) * 3"));
// console.log(calc(" (  36 + 78 + (  43 / 89 - 57 / (  64 + 98 / 57 - 24 - 47  )  ) * 56  ) - (  (  29 - 9 / 76 * 99 - 29  ) * 98 / 11  ) * 31 "));
// // console.log(calc("1 + 2) * 3"));
// // console.log(calc("((1 + 2) * 3"));
// // console.log(calc('36 - 3 * 2 / 6 + 5 + 3 * 3'));



// // 58. На найти следующее ближайшее число которое делится на само себя и на единицу
// const nextPrime = n => {
//     if (n === 0) return 2;
//     let num = null;
//     let num2 = null;

//     for (let i = n + 1; i < Math.pow(10, 12); i++) {
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 num = j;
//                 break;
//             }
//             num = null;
//         }
//         if (!num) {
//             num2 = i;
//             break;
//         }
//     }
//     return num2;
// }

// console.log(nextPrime(11));

// // Test.assertEquals(nextPrime(0), 2);
// //     Test.assertEquals(nextPrime(29), 31);
// //     Test.assertEquals(nextPrime(5), 7);



// // 59. Complete it so that passing in RGB decimal values will result in a hexadecimal 
// //     representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range 
// //     must be rounded to the closest valid value.
// //     Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// const rgb = (r, g, b) => {
//     if (r > 255) r = 255;
//     if (g > 255) g = 255;
//     if (b > 255) b = 255;

//     function convertPart(part) {
//         const hexLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//         let hexPart = '';
//         if (part < 0) part = 0;

//         if (part % 16 === 0) {
//             return hexPart += `${hexLetters[part / 16]}0`;
//         }

//         if (part < 16) {
//             return hexPart += `0${hexLetters[part % 16]}`;
//         }

//         let n2 = part % 16;
//         let n1 = Math.floor(part / 16)
//         return hexPart += `${hexLetters[n1]}${hexLetters[n2]}`;

//     }
//     return `${convertPart(r)}${convertPart(g)}${convertPart(b)}`;
// }


// console.log(rgb(150, 246, 160));



// // 60. Найти выигрышный билет
// //     на входе массив [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]  и число
// //     если в строке код символа совпадает с числом то тогда получаем одно очко
// //     пройтись по всем подмассивам собрать очки и сравнить с win, если >= win то вывести winner иначе looser

// const bingo = (ticket, win) => {
//     let count = 0;
//     ticket.forEach(el => {
//         el[0].split('').forEach(e => {
//             if (e.charCodeAt() === el[1]) {
//                 count++;
//                 return;
//             }
//         });
//     });

//     return count >= win ? 'Winner!' : 'Loser!';
// }

// console.log(bingo([['RFARE', 82], ['FFHB', 70], ['ILGHJLCJ', 75]], 3));
// console.log(bingo([['JSLBZL', 73], ['FDIFZCFL', 70]], 2));


// // 61. codewars:  the-deca-tree
// function tree(trunks) {
//   this.trunks = trunks;
//   this.branches = trunks * 10;
//   this.twigs = trunks * 100;
//   this.leaves = trunks * 1000;
// }

// let myTree = new tree(10);
// tree.prototype.chopLeaf = function (n) {
//   this.leaves = this.leaves - n > 0 ? this.leaves - n : 0;
// }
// tree.prototype.chopTwig = function (n) {
//   this.twigs = this.twigs - n > 0 ? this.twigs - n : 0;
//   this.chopLeaf(n * 10);
// }
// tree.prototype.chopBranch = function (n) {
//   this.branches = this.branches - n > 0 ? this.branches - n : 0;
//   this.chopTwig(n * 10);
// }
// tree.prototype.chopTrunk = function (n) {
//   this.trunks = this.trunks - n > 0 ? this.trunks - n : 0;
//   this.chopBranch(n * 10);
// }

// tree.prototype.describe = function () {
//   return `This tree has ${this.trunks} trunks, ${this.branches} branches, ${this.twigs} twigs and ${this.leaves} leaves.`
// }

// myTree.chopTrunk(5);

// console.log(myTree)



// // 62. 

// let TreeNode = function (value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };

// function maxSum(root) {
//   if (!root) return 0;
//   return root.value + Math.max(maxSum(root.left), maxSum(root.right));
// }

// const root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));


// console.log(maxSum(root));



// // 63. Guessing game. 

// class GuessingGame {
//   constructor() {
//     this.min = '';
//     this.max = '';
//   }

//   setRange(min, max) {
//     this.min = min;
//     this.max = max;
//   }

//   guess() {
//     return Math.floor((this.max + this.min) / 2);
//   }

//   lower() {
//     this.max = this.guess();
//   }

//   greater() {
//     this.min = this.guess();
//   }
// }

// const number = 279;

// const game = new GuessingGame();
// console.log(game);

// let game2 = game.setRange(0, 3445)
// console.log(game2)


// let result = game.guess();
// console.log(result)



// // // 64. На входе набор цифр (1,15,4,2,1,48,65,1,2,3,7,12,15) отсортировать до вида
// // //      (1,3-5,6,7,8-15)

// let str = [];
// while (str.length < 99) {
//   let num = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
//   str.push(num);
// }

// function solve(input) {
//   const uniqArr = [...new Set(input.split(','))].sort((a, b) => a - b);
//   let tempArr = [];
//   let sortedArr = [];

//   for (let i = 0; i < uniqArr.length; i++) {

//     if (i === uniqArr.length) {
//       sortedArr.push(uniqArr[i].length - 1);
//     }

//     if (+uniqArr[i] !== +uniqArr[i + 1] - 1) {
//       sortedArr.push(uniqArr[i]);
//     }

//     if (+uniqArr[i] === +uniqArr[i + 1] - 1 && +uniqArr[i] !== +uniqArr[i + 2] - 2) {
//       sortedArr.push(uniqArr[i]);
//     }

//     if (+uniqArr[i] === +uniqArr[i + 2] - 2) {
//       tempArr.push(uniqArr[i]);
//       for (let j = i + 2; j < uniqArr.length; j++) {
//         if (+uniqArr[j] !== +uniqArr[j + 1] - 1) {
//           tempArr.push(uniqArr[j]);
//           tempArr.push(j);
//         }
//       }
//       sortedArr.push(`${tempArr[0]}-${tempArr[1]}`);
//       i = tempArr[2];
//     }

//     tempArr = [];

//   }
//   return sortedArr.join(',');
// }

// console.log(solve(str.join(',')));
// console.log(solve('1,3,1,4,5'));
// console.log(solve('105,104,949,45,12,18,17,10,950,16,18,7,46,47'));
// console.log(solve('1,2,4,5,6,9,10'));
// console.log(solve('20,12,2,7,5,6,3,9,11,2'));  // 2-3,5-7,9,11-12,20
// console.log(solve('1,2,68,2,3,10,6,7,9,11,69,5,9,13,14,95,8,3,2,7,11,14,18,1,2,4')); // 1-7,9,11,13-14,18,22,68,95,104
// console.log(solve('948,105,104,949,45,12,18,17,10,950,0,16,18,7'));  //  7,10,12,16-18,45,104-105,948-950
// // у меня всё работает, по вашему тесту 1/10



// // 65. задача WG

// function solve(input) {
//   if (input === 1) {
//     return 2;
//   }
//   if (input === 2) {
//     return -1;
//   }

//   let count = 3;
//   while (count + 3 <= input) {
//     count = count * 2;
//   }

//   let count2 = 1;
//   while (count2 < input) {
//     count2 = count2 * 2;
//   }

//   return (count2 - 1 === input && count === input) ? `${count}\n${count2}`
//     : count === input ? count
//       : count2 - 1 === input ? count2
//         : -1;
// }

// console.log(solve(3));



// // 66. 
// class Templater {
//   constructor() {
//     this.html = [];
//   }
//   div(text, attr) {
//     if (typeof attr === 'object') {
//       let objectValues = Object.entries(attr);
//       this.html.push((`<div ${objectValues.reverse().map(item => `${item[0]}="${item[1]}"`)}>${text}</div>`).replace(/,/ig, ' '));
//       return (`<div ${objectValues.reverse().map(item => `${item[0]}="${item[1]}"`)}>${text}</div>`).replace(/,/ig, ' ');
//     }

//     if (text) {
//       this.html.push(`<div>${text}</div>`);
//       return `<div>${text}</div>`;
//     } else {
//       this.html.push('<div></div>');
//       return '<div></div>';
//     }
//   }

//   span(text, attr) {
//     if (typeof attr === 'object') {
//       let objectValues = Object.entries(attr);
//       this.html.push((`<span ${objectValues.reverse().map(item => `${item[0]}="${item[1]}"`)}>${text}</span>`).replace(/,/ig, ' '));
//       return (`<span ${objectValues.reverse().map(item => `${item[0]}="${item[1]}"`)}>${text}</span>`).replace(/,/ig, ' ');
//     }

//     if (text) {
//       this.html.push(`<span>${text}</span>`);
//       return (`<span>${text}</span>`);
//     } else {
//       this.html.push('<span></span>');
//       return '<span></span>';
//     }
//   }

//   br(content) {
//     if (!content) {
//       this.html.push('<br>');
//       return '<br>';
//     } else {
//       throw "Nested content is not allowed"
//     }
//   }
//   p(text, attr) {
//     if (typeof attr === 'object') {
//       let objectValues = Object.entries(attr);
//       this.html.push((`<p ${objectValues.reverse().map(item => `${item[0]}="${item[1]}"`)}>${text}</p>`).replace(/,/ig, ' '));
//       return (`<p ${objectValues.reverse().map(item => `${item[0]}="${item[1]}"`)}>${text}</p>`).replace(/,/ig, ' ');
//     }

//     if (text) {
//       this.html.push(`<p>${text}</p>`);
//       return (`<p>${text}</p>`);
//     } else {
//       this.html.push('<p></p>');
//       return '<p></p>';
//     }
//   }

//   toString() {
//     return this.html.join('');
//   }
// }

// const template = new Templater();
// // template.div('hi', { id: "header", class: "m-4 float-right" })
// template.div(template.p(template.span()), template.p());
// let template2 = new Templater().div(new Templater().p(), new Templater().p());

// console.log(template2.toString())



//==================================== СОРТИРОВКИ ===============================//
// // 67. Пузырьковая сортировка

// function bubbleSort(arr) {
//   debugger
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//       if (arr[j + 1] < arr[j]) {
//         let t = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = t;
//       }
//     }
//   }
//   return arr;
// }
// bubbleSort([6, 12, 5, 4, 9, 1, 7, 3]);


// //69. Быстрая сортировка

// function quickSort(arr) {
//   debugger
//   if (arr.length == 0) return [];
//   let a = [],
//     b = [],
//     p = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < p) a.push(arr[i]);
//     else b.push(arr[i]);
//   }
//   return quickSort(a).concat(p, quickSort(b));
// }
// console.log(quickSort([6, 12, 5, 4, 9, 1, 7, 3]));


// // 70. Your job is to figure out the index of which vowel is missing from a given string:
// // A has an index of 0,// E has an index of 1,// I has an index of 2,// O has an index of 3,// U has an index of 4.

// const absentVowel = x => {
//   const arr = x.split('');
//   let idx;
//   switch (true) {
//     case !arr.includes('a'):
//       idx = 0;
//       break;
//     case !arr.includes('e'):
//       idx = 1;
//       break;
//     case !arr.includes('i'):
//       idx = 2;
//       break;
//     case !arr.includes('o'):
//       idx = 3;
//       break;
//     case !arr.includes('u'):
//       idx = 4;
//       break;
//     default:
//       break;
//   }
//   return idx;
// }

// console.log(absentVowel("John Doe hs seven red pples under his bsket"))
// console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"))



// // 71. 
// const isIsogram = str => {
//   let tempArr = [];
//   str.toLowerCase().split('').forEach(el => !tempArr.includes(el) ? tempArr.push(el) : null);
//   return (tempArr.length === str.split('').length || tempArr.length === 0) ? true : false;
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));




// // 72. Digits explosion Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// const explode = s => {
//   let arr = s.split('').map(el => {
//     if (el === '0') return '';
//     let newNum = el;
//     while (el.length < +newNum) {
//       el = el + newNum;
//     }
//     return el;
//   });
//   return arr.join('');
// }

// console.log(explode('102269'));  // 12222666666999999999

// // 73. 
// function getParticipants(handshakes) {
//   // ...(farm - 1) + (farm - 2) + farm - 3)....
//   // handshakes = (farm * (farm - 1))/2;
//   // handshakes*2 = farm * farm - farm
//   // farm * farm - farm - handshakes*2 = 0
//   // ax2 + bx + c = 0
//   // x = (-b + sqrt(D)) / 2a
//   // D = b2 - 4ac
//   switch (handshakes) {
//     case 0:
//       return 1;
//     case 1:
//       return 2;
//     case 2:
//     case 3:
//       return 3;
//     default:
//       let D = Math.pow(-1, 2) - (4 * 1 * (-handshakes * 2));
//       return Math.round((-(-1) + Math.sqrt(D)) / 2 * 1);
//   }
// }

// console.log(getParticipants(7));


// // 74. Есть строка и число, разбить строку на части длиной в заданное число и проверить
// // если сумма кубов одной части кратна 2 то перевернуть эту подстроку иначе первый символ перекинуть
// // в конецб собрать строку обратно и вывети

// function revrot(str, sz) {
//   if (str.length < sz || sz <= 0) return '';
//   let subStrings = [];
//   while (str.length >= sz) {
//     subStrings.push(str.slice(0, sz));
//     str = str.slice(sz);
//   }
//   let subNumbers = subStrings.map(el => el.split('').reduce((acc, a) => {
//     return acc + Math.pow(a, 3);
//   }, 0));

//   for (let i = 0; i < subStrings.length; i++) {
//     if (subNumbers[i] % 2 === 0) {
//       subStrings[i] = subStrings[i].split('').reverse().join('');
//     } else {
//       subStrings[i] = subStrings[i].slice(1) + subStrings[i][0];
//     }
//   }

//   return subStrings.join('');
// }
// console.log(revrot("733049910872815764", 5))



// //75. Посчитать сумму всех чисел кратных 3 или 5 вплоть до заданного числа
// const solution = n => {
//   let getAllNum = [];
//   for (let i = 3; i < n; i++) {
//     if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
//       getAllNum.push(i);
//     } else {
//       if (Number.isInteger(i / 3) || Number.isInteger(i / 5)) {
//         getAllNum.push(i);
//       }
//     }
//   }
//   if (getAllNum.length === 0) return 0;

//   return n ? getAllNum.reduce((acc, el) => acc + el) : 0;
// }

// console.log(solution(0))



// // 76. Head, Tail, Init and Last

// const head = array => array[0];
// const tail = array => array.slice(1);
// const init = array => array.slice(0, array.length - 1);
// const last = array => array[array.length - 1];

// console.log(head([1, 2, 3, 4, 5]));
// console.log(tail([1, 2, 3, 4, 5]));
// console.log(init([1, 2, 3, 4, 5]));
// console.log(last([1, 2, 3, 4, 5]));



// //77.
// const deepCount = a => {
//   let counter = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (typeof a[i] === "object") {
//       counter += deepCount(a[i]);
//     }
//     counter++;
//   }
//   return counter;
// }

// console.log(deepCount(["x", "y", ["z"]]))

// //================альтернативное решение
// // function deepCount(a){
// //   return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
// // }




// // 78. Valid string
// let validWord = (dictionary, word) => {
//   let steps = 0;
//   let newWord1 = word;
//   let newWord2 = word;
//   for (let i = 0; i <= dictionary.length; i++) {
//     if (newWord1.length === 0) return true;
//     newWord1 = newWord1.replace(dictionary[i], '');
//     if (i === dictionary.length) {
//       i = -1;
//       steps++;
//     }
//     if (steps === 2) {
//       steps = 0;
//       for (let i = dictionary.length - 1; i >= 0; i--) {
//         if (newWord2.length === 0) return true;
//         newWord2 = newWord2.replace(dictionary[i], '');
//         if (i === 0) {
//           i = dictionary.length;
//           steps++;
//         }
//         if (steps === 2) return false;
//       }
//     };
//   }

//   return false;
// };

// console.log(validWord(['ab', 'a', 'bc'], 'abc'))


// // ========= the best way
// let validWord = function (dictionary, word) {
//   let str = dictionary.join('|');
//   let reg = new RegExp('^(' + str + ')+$');
//   return reg.test(word);
// };

// console.log(validWord(['ab', 'a', 'bc'], 'abc'))




// // 79. 6kyu - Vasya-Clerk

// function tickets(line) {
//   let counter25 = 0;
//   let counter50 = 0;
//   for (let i = 0; i < line.length; i++) {
//     switch (true) {
//       case line[i] === 25:
//         counter25++;
//         break;
//       case line[i] === 50:
//         counter50++;
//         counter25--;
//         break;
//       case counter50 && counter25:
//         counter50 -= 50;
//         counter25 -= 25;
//         break;
//       default:
//         counter50 ? counter50-- : counter25 -= 2;
//         counter25--;
//         break;
//     }
//     if (counter25 < 0) return 'NO';
//   }
//   return 'YES';
// }
//console.log(tickets([25, 25, 25, 25, 50, 100, 50]));



// // // 80. Sorting by bits

// function sortByBit(arr) {
//   let newArr = arr.sort((fel, sel) => {
//     let a = fel.toString(2).replace(/0/g, '').length;
//     let b = sel.toString(2).replace(/0/g, '').length;
//     if (a === b) {
//       return fel - sel;
//     }
//     return a - b;
//   })
//   return newArr;
// }
// console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]))




// // 81. https://www.codewars.com/kata/the-coupon-code
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
//   if (+enteredCode === +correctCode) return true;
//   let date1 = Date.parse(currentDate);
//   let date2 = Date.parse(expirationDate);
//   if (date1 < date2) return true;
//   return false
// }

// console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))



// // 82. https://www.codewars.com/kata/unlucky-days
// const unluckyDays = year => {
//   let amount = 0;
//   for (let i = 1; i <= 12; i++) {
//     let d = new Date(i + "/13/" + year);
//     if (d.getDay() == 5) {
//       amount++;
//     }
//   }
//   return amount;
// }

// unluckyDays(2021)



// // 83. https://www.codewars.com/kata/human-readable-duration-format

// const formatDuration = seconds => {
//   if (seconds === 0) return "now";

//   let result = '';
//   let years = Math.floor(seconds / 31536000) || 0;
//   let days = Math.floor((seconds - years * 31536000) / 86400) || 0;
//   let hours = Math.floor((seconds - (years * 31536000 + days * 86400)) / 3600) || 0;
//   let minutes = Math.floor((seconds - (years * 31536000 + days * 86400 + hours * 3600)) / 60) || 0;
//   let sec = seconds - (years * 31536000 + days * 86400 + hours * 3600 + minutes * 60);

//   let arrTimes = [years, days, hours, minutes, sec];

//   let examples = {
//     year: `${years} ${years === 1 ? 'year' : 'years'}`,
//     day: `${days} ${days === 1 ? 'day' : 'days'}`,
//     hour: `${hours} ${hours === 1 ? 'hour' : 'hours'}`,
//     minute: `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`,
//     second: `${sec} ${sec === 1 ? 'second' : 'seconds'}`,
//   }

//   let examplesKeys = Object.keys(examples);
//   arrTimes.forEach((el, i) => el ? result += `${examples[examplesKeys[i]]}, ` : null);
//   // манипуляции с приведением к добротному виду
//   result = result.slice(0, result.length - 2);
//   if (arrTimes.filter(el => el !== 0).length === 1) return result;

//   let lastIndex = result.lastIndexOf(',');
//   result = result.slice(0, lastIndex) + ' and ' + result.slice(lastIndex + 2, result.length);

//   return result;
// }




// // 83. Вывести названия языков в массииве если результат > 60 в порядке убывания
// const myLanguages = res => {
//   let resArr = [];
//   for (const key in res) {
//     res[key] >= 60 ? resArr.push(key) : null;
//   }
//   return resArr.sort((a, b) => res[a] - res[b]).reverse();
// }

// console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }))
// console.log(myLanguages({ "Hindi": 60, "Dutch": 93, "Greek": 71 }))


// // 84. преобразовать строку к виду runLengthEncoding
// //    ("hello world!")
// //    [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

// const runLengthEncoding = str => {
//   let result = [];
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       let firstIdx = i;
//       let secondIdx;
//       for (let j = firstIdx; j < arr.length; j++) {
//         if (arr[j] !== arr[j + 1]) {
//           secondIdx = j;
//           result.push([(secondIdx - firstIdx) + 1, `${arr[i]}`]);
//           i = j;
//           break;
//         }
//       }
//     } else {
//       result.push([1, `${arr[i]}`]);
//     }
//   }
//   return result;
// }

// console.log(runLengthEncoding("WWWBWWWWBBWWWBBB! BMW"))


// // 85. 
// class WordDictionary {
//   constructor() {
//     this.storage = [];
//   }
// };

// WordDictionary.prototype.addWord = function (word) {
//   this.storage.push(word);
// };

// WordDictionary.prototype.search = function (word) {
//   const regexp = new RegExp(`^${word}$`);
//   return this.storage.some(el => {
//     if (regexp.test(el)) {
//       return el;
//     }
//   });
// };



// //86. 

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// function stringify(list) {
//   if (list === null) return 'null';
//   return `${list.data} -> ${stringify(list.next)}`;
// }

// console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))));


// //87 var TreeNode = function(value, left, right) {
// // this.value = value;
// // this.left = left;
// // this.right = right;
// // };

// function arrayToTree(array, i = 0) {
//   if (i >= array.length) return;
//   return new TreeNode(array[i], arrayToTree(array, 2 * i + 1), arrayToTree(array, 2 * i + 2));
// };


// // 88. Promise

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Запрос сервер')
//     console.log('...')
//     resolve();
//   }, 1000);
// });

// myPromise.then(() => {
//   return new Promise((resolve, reject) => {
//     let users = [
//       { id: 1, name: "Dan" },
//       { id: 2, name: "John" },
//     ]
//     setTimeout(() => {
//       console.log('Запрос сервер -> BD')
//       console.log('...')
//       resolve(users);
//     }, 1000);
//   })
// })
//   .then(usersBD => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('Preparing answer');
//         console.log('...');
//         resolve(users);
//       }, 1000);
//       let users = usersBD.map(el => {
//         return {
//           userId: el.id,
//           userName: el.name,
//           timestamp: Date.now()
//         }
//       })
//     })
//   })
//   .then(users => {
//     setTimeout(() => {
//       console.log('Answer -> client')
//       console.log('...', users)
//     }, 1000);
//   })
//   .catch(error => console.error(error))
//   .finally(() => console.log('Finish'));



// // TEST JS SCOPE && FUNCTIONS
// =========================================================================================
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }
//                               // 0,1,2
// =========================================================================================
// var name = 'J';
// function p() {
//   console.log(name);
//   var name = 'P';
//   console.log(name);
// }
// p();                       // undef - p
// =========================================================================================
// function foo(a, b) {
//   return a * b;
// }
// const bar = foo.bind(null, 2);
// console.log(bar(2))         // 4
// =========================================================================================
// const foo = bar();
// const number = 2;
// function bar() {
//   return number;
// }                            // ReferenceError: number is not defined
// =========================================================================================
// var a = 1;
// var b = function a(x) {
//   x && a(--x);
// }
// console.log(a);                    // 1
// =========================================================================================
// function foo() {
//   console.log(this);
// }
// foo.call(null);                    //window
// =========================================================================================
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000)
// }                                //  3   3   3
// =========================================================================================
// Что такое замыкание?
// 4 Способность функции запоминать переменные из внешней области видимости в момент ее создания
// =========================================================================================
// function getThis() {
//   return this;
// }
// console.log(getThis());           // window
// =========================================================================================
// const details = {
//   name: "John"
// }
// function getMessage(message) {
//   return `${message} ${this.name}`
// }
// console.log(getMessage.apply(details, ['Hello']));  // Hello John
// =========================================================================================
// "use strict"
// function getThis() {
//   return this;
// }
// console.log(getThis());      // undefined
// =========================================================================================
// function foo() {
//   return { bar: 1 };
// }
// console.log(typeof foo().bar);       // number
// =========================================================================================
// (
//   function (a) {
//     arguments[0] = 10;
//     return a;
//   }
// )(5);
//                                  //10
// console.log((
//   function (a) {
//     arguments[0] = 10;
//     return a;
//   }
// )(5));
// =========================================================================================
// "use strict"
// const details = {
//   message: 'Hello'
// }
// function getMessage() {
//   return this.message;
// }
// console.log(getMessage.call(details))       // Hello
// =========================================================================================
// Каким образом осуществляется передача параметров в функцию?
// 3 Примитивы передаются по значению, а объекты - по ссылке
// =========================================================================================
// !!!!!Какие варианты правильно объявляют функцию f, возвращающую сумму двух аргументов? 100% верно
// 1,2,3,4
// // let f = function (a, b) { return a + b };      //++++++++++
// // let f = new Function("a,b", "return a+b");     //+++++++
// // let f = new Function("a", "b", "return a+b");  // +++++++
// // let f = (a, b) => a + b;                       //+++++++
// // let f = (a, b) => { a + b };                   //-----------
// console.log(f(1, 1))
// =========================================================================================
// console.log(message);
// var message = 'Hello';         // undef
// =========================================================================================
// Укажите, что в JavaScript подвергается всплытию (hoisting)?
// 2,5
// --- Function expression
// +++ Function declaration
// --- Arrow function
// +++ Объявление переменной
// --- Присваивание значения переменной
// =========================================================================================
// let name = 'John';
// function printName() {
//   let name = 'Peter';
//   console.log(name);
// }
// printName();                 // Peter
// =========================================================================================
// var name = 'John';
// var user = {
//   name: 'Peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}`)
//   }
// }
// var printMessage = user.printMessage;
// printMessage();                     // 'Hello John'
// =========================================================================================
// let f = function g() {
//   return 23;
// }
// console.log(typeof g());             // ошибка
// =========================================================================================
// printMessage();
// function printMessage() {
//   console.log('Hello');             // Hello
// }
// =========================================================================================
// for (var i = 0; i < 10; i++) {
//   //...
// }
// console.log(i)                     // 10
// =========================================================================================
// console.log(message);
// let message = 'Hello';                 // ошибка
// =========================================================================================
// let name = 'John';
// function printName() {
//   console.log(name);
// }
// setTimeout(() => {
//   let name = 'Peter';
//   printName();
// }, 1000)                      // John
// =========================================================================================
// // Укажите правильный способ получения доступа ко всем аргументам функции
// function foo(a) {
//   console.log(arguments);
// }
// foo(5);



//Задачи с собеседований
// // // 90. Вывести самое короткое слово в строке 2 вар
// function short(str) {
//   let temp = '';
//   str.split(' ').forEach((el, i) => {
//     if (i === 0) temp = el;
//     if (el.length < temp.length) temp = el;
//   });
//   return temp;
// }

// function short2(str) {
//   return str.split(' ').sort((a, b) => a.length - b.length)[0];
// }

// console.log(short('The asffa sdafsdf if it'))
// console.log(short2('The asffa sdafsdf if it'))


// // // // 90. Принять имя вернуть инициалы Ф.Е.

// function nameInit(name) {
//   return name.split(' ').map(el => `${el.charAt(0).toUpperCase()}.`).join('');
// }
// console.log(nameInit('The asffa'))



// // // // 91. Сумма всех чисел 
// function countNum(num) {
//   return Math.abs(num).toString().split('').reduce((acc, el) => +acc + +el, 0);
// }
// console.log(countNum(-55))



// // // // // 92. Найти и вывести максимальное и минимальное значения в массиве 
// function findMinMax(arr) {
//   return [Math.max(...arr), Math.min(...arr)];
// }
// console.log(findMinMax([5, 8, 3, 1, 9, 7]));


// // 93. Написать ф-цию inc() которая при каждом вызове возвр. 1, 2 3 ....
// // условие: в глобальном скоупе не должно быть других переменных

// let inc = (function () {
//   let c = 0;
//   return function inc() {
//     return ++c;
//   }
// })();

// console.log(inc())
// console.log(inc())
