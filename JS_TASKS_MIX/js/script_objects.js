"use strict"
// /* ==============  Создали конструктор объекта, функции вынесли в прототип конструктора чтобы не нагружать память  ========================= */

// function Post(userId, userAuthor, userCity) {
//     this.id = userId;
//     this.author = userAuthor;
//     this.city = userCity;

// }


// Post.prototype.show = function () {
//     alert('Автор номер ' + this.id + ' - ' + this.author + ' приехал из ' + this.city + 'а!');
// }

// const post_1 = new Post(1, 'Ivan', 'Minsk');
// const post_2 = new Post(2, 'Dan', 'Brest');
// const post_3 = new Post(3, 'John', 'Borisov');

// post_1.show();
// post_2.show();
// post_3.show();


// /* ================  Cоздадим новый конструктор с новым значение и в него возьмём значения из другого конструктора  ========================= */
// /* ================  для этого с помощью Post.call(this) подтягиваем значения из др кон-ра  ========================= */


// function SecondPost(userId, userAuthor, userCity) {
//     Post.call(this, userId, userAuthor, userCity);
//     this.raiting = 100;
// }

// const post_4 = new SecondPost(4, 'Dan', 'Kobrin');



// /* ============ Также можно создать ОБЪЕКТ-основу  и далее использовать его для конструктора с помощью с OBJECT.create  ============ */



// const basePost = {
//     userName: null,             //начального значения пока не будет
//     status: 'user',             //значение по умолчанию, начальное
//     showStatus: function () {
//         console.log(this.status)
//     }
// }

// let newPost = Object.create(basePost);  // создали новый объект (дочерний от родителя basePost)
// newPost.userName = 'Terminator';
// newPost.id = 10;                          // как обычно можно добавить любое свойство отдельно, которого нет в родителе

// console.log(newPost);
// console.log(newPost.status);  // доступ к этому значению будет через __proto__ от родителя т.е 
// //если смотреть в консоли, то в свойствах созданного объекта не будет значения status, оно возьмётся у протототипа родителя


// let newPost2 = Object.create(basePost);
// newPost2.userName = 'Alex';
// newPost2.id = 11;
// newPost2.status = 'Admin';
// console.log(newPost2.status);



// /*===== post_4.constructor  будет возвращать(указывать на) функцию, которая создала новый прототип, т.е.  ===*/

// console.log(post_4.constructor);  // вернет ф-цию конструктор(или ссылку на ф-цию), которая его создала 

// console.log(post_4.hasOwnProperty(constructor));  // false , так как у дочернего объекта такого свойства нет
// console.log(post_4.__proto__.hasOwnProperty(constructor));  // true , так как свойство есть у его прототипа

// /* == Создание любого метода и добавление в прототайп конструктора */

// const post_5 = new SecondPost(5, 'Jack', 'Minsk');  // создали новый объект
// post_5.age = 20;
// post_5.raiting = 150;

// SecondPost.prototype.increateAge = function () {    // создали новый метод и добавили в прототайп родителя-конструктора
//     this.age += 1;
// };

// post_5.increateAge();      // вызвали метод для дочернего объекта, метод переопределил значение age  согласно функции

// console.log(post_5.age);



// /* Есть два конструкторв Contor1 и Contor1, у первого есть добавленные свойства в прототип, которые расширяют возможности конструктора
//    если создать второй конструктор, то у него будет стандартный объект прототип. И чтобы заново не добавлять свойства и во второй кон-тор
//    можно унаследовать(передать) их от первого ко второму */
// debugger;

// function Contor_1(year, userName) {
//     this.userName = userName;
//     this.birthday = year;
// }

// Contor_1.prototype.userAge = function () {
//     return 2020 - this.birthday
// }



// function Contor_2(year, userName, city) {
//     Contor_1.call(this, year, userName);
//     this.city = city;
// }

// const user_2 = new Contor_2(1990, 'Serge', 'Minsk');

// Contor_2.prototype = Object.create(Contor_1.prototype);

// // через Object.create перезаписали все свойства прототипа-родителя от 1 ко 2му
// // так как перезаписали исходный прототип, то теперь в прототипе для 2го кон-ра, сидит функция(конструктор) по которому создастся конструктор типа 1
// // и если создать новый объект из Contor_2, то создаться он по типу Contor_1 со всеми его значениямию.
// // А нам нужны были только свойства, а сам конструктор чтобы остался
// // ПОЭТОМУ НУЖНО ЯВНО ВЕРНУТЬ ПРЕЖНИЙ КОНСТРУКТОР В ПРОТОТИП!!!!!!!!!!!!!!!!!

// Contor_2.prototype.constructor = Contor_2;


// console.log(user_2.year);
// console.log(user_2.year.userAge());



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// /*По новому стандарту конструктор можно создать след образом исполюзуя class (такой стиль у JAVA) 
// (переделываем то что было выше)*/

// class Constr_3 {
//     constructor(id, name, age) {           //здесь сам конструктор
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }

//     newAge() {                        // здесь создали свойство !!оно записывается в прототип(не в конструктор)
//         this.age - 2020;
//     }
// }

// person1 = new Constr_3(1, 'Ralf', 31);
// console.log(person1);
// console.log(person1.newAge());

// class Constr_4 extends Constr_3 {           // здесь говорим что в кон-ре будет использоваться другой кон-тор
//     constructor(id, name, age, city, hobby) {   // здесь указать параметры от обеих конструкторов
//         super(id, name, age);                    // так с супер можно использовать свойства от первого конструктора
//         this.city = city;
//         this.hobby = hobby;
//     }

//     sayName() {                        // здесь создали свойство !!оно записывается в прототип(не в конструктор)
//         alert('Hello' + this.name);
//     }
// }

// person2 = new Constr_4(2, 'Serge', 20, 'Minsk', 'Sport');

// person2.sayName();

// console.log(person2.id);
// person2.newAge();
// console.log(person2);





// // 1. Создать объект, потом второй и связать их, для второго вызвать метод из первого. BIND()
// const obj1 = {
//     name: 'Ben',
//     age: 20,
//     sayHello() {
//         console.log('Hello');
//     },
// }

// const obj2 = {
//     name: 'Ted',
//     age: 30,
// }

// const bindedObj2 = obj1.sayHello.bind(obj2);  // привязали метод из obj1 к obj2

// console.log(obj1, obj2);
// console.log(obj1.sayHello());  //hello
// console.log(bindedObj2());     //hello




// // 2. Есть массив, создать ф-цию, которая принимает массив и число и возвращает новый массив с результатом
// // умножения каждого эл массива на это число
// const myArr = [1, 2, 3, 4, 5];

// // function multyply(arr, num) {                //обычный вариант решения
// //     return arr.map(item => item * num)
// // }
// // console.log(multyply(myArr, 5));


// // сделаем метод для массива, который решит задачу также
// Array.prototype.multyply = function (num) {
//     return this.map(item => item * num);
// }
// console.log(myArr.multyply(3));




// // 3. Пример вызова метода с .call

// function showName() {
//     alert(this.userName);
// }

// const user1 = {
//     userName: 'Den',
// }
// const user2 = {
//     userName: 'Ben',
// }

// showName.call(user1);
// showName.call(user2);



// // 4. Пример вызова метода с .call просто вызывается с this ккоторый передаём (может менятся)

// function addInfo(age, position) {
//     this.age = age;
//     this.position = position;
// }

// const user = {
//     name: 'Den',
// }

// addInfo.call(user, '20', 'Developer');
// console.log(user);




// // 5. Пример вызова метода с .apply   .bind - привязывает напрямую контекст выполнения this
// //   .bind также создаёт новую фцию, которую можно потом вызвать

// const user = {
//     userName: 'John',
//     sayHello() {
//         console.log(`${this.userName}, Hello`);
//     },
// }

// console.log(user.sayHello());       // John, Hello
// setTimeout(user.sayHello, 1000);  // undefined при вызове контекст this указавыет уже на window, так как setTimeout его метод 

// setTimeout(user.sayHello.bind(user), 1000);  // John, Hello т.к. указали, что метод выполнится с контекстом user!!!

// let sayHelloUser = user.sayHello.bind(user);  // можно сохранить в переменную и использовать
// console.log(sayHelloUser());



// 6. У стрелочной функции this будет указывать на объект в котором он используется, своего this не имеет
// и берёт от родителя, т.е для стрелочной фции this-сом является то что было в момент её объявления


// // 7. Пример с классом
// /* Не смотря на то, что showName есть только в BaseUser, в момент его вызова
// this в нем указывает на user. */
// class BaseUser {
//     constructor() {
//         this.username = null;
//     }

//     showName() {
//         console.log(this.username);
//     }
// }

// const baseuser = new BaseUser();
// baseuser.showName(); //null

// class User extends BaseUser {
//     constructor(name) {
//         super();
//         this.username = name;
//     }
// }

// const user = new User('alex');
// user.showName(); //alex


// /*======================= Деструкуризация массива, объекта ===================================*/

// let arr = [
//     { a: 1, b: 2 },
//     { tr: 'st', io: 'dk', pc: [10, 20] }
// ];

// let [
//     { a: num1, b: num2 },
//     {
//         tr: transistor,
//         io: iopan,
//         pc: [num3, num4]
//     }
// ] = arr;


// console.log(num1, num2, transistor, iopan, num3, num4);
// // или так если без переменных
// /* let [
//     { a, b },
//     {
//         tr,
//         io,
//         pc: [num3, num4]
//     }
// ] = arr; */