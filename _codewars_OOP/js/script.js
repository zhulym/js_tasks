/* ==========================  JS tasks OOP ==================================*/
// // 7 kyu - What a "Classy" Song

// class Song {
//   constructor(title, artist) {
//     this.title = title;
//     this.artist = artist;
//     this.uniqArr = [];
//   }
//   howMany(people) {
//     let amount = 0;
//     let newUniqArr = people.map(person => person.toLowerCase());
//     newUniqArr.forEach(p => {
//       if (!this.uniqArr.includes(p)) {
//         this.uniqArr.push(p);
//         amount++;
//       }
//     })
//     return amount;
//   }
// }

// let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
// console.log(mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn'])) // 5
// console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA'])) // 2



// // 7 kyu - Fun with ES6 Classes #2 - Animals and Inheritance
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// class Shark extends Animal {
//   constructor(name, age, status) {
//     super(name, age, status);
//     this.legs = 0;
//     this.species = "shark";
//     this.status = status;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, status);
//     this.legs = 4;
//     this.species = "cat";
//     this.status = status;
//   }

//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, status);
//     this.legs = 4;
//     this.species = "dog";
//     this.master = master;
//     this.status = status;
//   }

//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }


// let billy = new Shark("Billy", 3, "Alive and well");
// let cathy = new Cat("Cathy", 7, "Playing with a ball of yarn");
// let doug = new Dog("Doug", 12, "Serving his master", "Eliza");

// console.log(doug.introduce());
// console.log(doug.greetMaster())
// console.log(doug.status)



// //7 kyu - Fun with ES6 Classes #4 - Cubes and Setters
// class Cube {
//   constructor(length) {
//     this.length = length;
//   }

//   get surfaceArea() {
//     return this.length * this.length * 6 // has 6 surfaces
//   }

//   get volume() {
//     return this.length * this.length * this.length;
//   }

//   set surfaceArea(area) {
//     this.length = Math.sqrt(area / 6);
//   }
//   set volume(volume) {
//     this.length = Math.pow(volume, (1 / 3));
//   }
// }



// //6 kyu - Fun with ES6 Classes #6 - Fake Files (Basic)

// class File {
//   constructor(fullName, contents) {
//     this.fullName = fullName;
//     this.contents = contents;
//     this.filename = fullName.slice(0, fullName.lastIndexOf('.'));
//     this.extension = fullName.slice(fullName.lastIndexOf('.') + 1);
//     this.lines = 0;
//     this.characters = 0;
//   }

//   get fullName() {
//     return this.fullName;
//   }
//   get fullName() {
//     return this.filename;
//   }
//   get fullName() {
//     return this.extension;
//   }

//   getContents() {
//     return this.contents;
//   }
//   write(str) {
//     this.contents = this.contents === '' ? str : this.contents += '\n' + str;
//   }
//   gets() {
//     this.lines++;
//     return this.contents.split('\n')[this.lines - 1];
//   }
//   getc() {
//     this.characters++;
//     return this.contents[this.characters - 1];
//   }
// }



// // 6 kyu - Array Helpers расширить методы класса

// Array.prototype.square = function () {
//   return this.map(num => num * num);
// }
// Array.prototype.cube = function () {
//   return this.map(num => Math.pow(num, 3));
// }
// Array.prototype.average = function () {
//   return this.sum() / this.length;
// }
// Array.prototype.sum = function () {
//   return this.reduce((acc, num) => acc + num, 0);
// }
// Array.prototype.even = function () {
//   return this.filter(num => num % 2 === 0);
// }
// Array.prototype.odd = function () {
//   return this.filter(num => num % 2 !== 0);
// }



// //6 kyu - I Promise Not To Optimize
// function antiOptimizeAsync(task) {
//   return Promise.all([
//     new Promise(resolve => process.nextTick(() => resolve(task()))),
//     new Promise(resolve => setTimeout(resolve, 11000)),
//   ]).then(([result]) => result)
// }

// function antiOptimizeAsync(task) {
//   return new Promise(resolve => {
//     let firstStamp = new Date();
//     let result = task();
//     let time = new Date() - firstStamp;
//     setTimeout(resolve, 10500 - time, result);
//   })
// };



// //6 kyu - Jokes you've been 'awaiting' for ... promise
// async function sayJoke(apiUrl, jokeId) {
//   const response = await fetch(apiUrl);
//   const data = await response.json();
//   if (!data.hasOwnProperty('jokes')) throw new Error(`No jokes at url: ${apiUrl}`);
//   let joke = data.jokes.find(joke => joke.id === jokeId);
//   if (!joke) throw new Error(`No jokes found id: ${jokeId}`);
//   return {
//     saySetup: () => joke.setup,
//     sayPunchLine: () => joke.punchLine,
//   }
// }



// // 7 kyu https://www.codewars.com/kata/santaclausable-interface
// function isSantaClausable(obj) {
//   if (typeof obj.distributeGifts === 'function' || typeof obj.goDownTheChimney === 'function') {
//     return true;
//   } else {
//     return false;
//   }
// }



// //4 kyu - Dependency Injection Также, чтобы настроить DependencyInjector(DI), нам нужно указать объект зависимости:
// // let DI = function (dependency) {
// //   this.dependency = dependency;
// // };

// // задача - создать метод DI.prototype.inject, который вернет новую функцию с разрешенными зависимостями.И не забывайте о вложенных функциях.Не трогай их.

// let DI = function (dependency) {
//   this.dependency = dependency;
// };

// DI.prototype.inject = function (func) {
//   if (func.length > 0) {
//     debugger
//     let funcString = func.toString();
//     let parameters = funcString.slice(funcString.indexOf('(') + 1, funcString.indexOf(')')).split(',');
//     parameters.forEach(string => {
//       string = string.trim();
//       func = func.bind(this, this.dependency[string]);
//     });
//   }
//   return func;
// }

// let deps = {
//   'dep1': function () { return 'this is dep1'; },
//   'dep2': function () { return 'this is dep2'; },
//   'dep3': function () { return 'this is dep3'; },
//   'dep4': function () { return 'this is dep4'; }
// };

// let di = new DI(deps);

// let myFunc = di.inject(function (dep3, dep1, dep2) {
//   return [dep1(), dep2(), dep3()].join(' -> ');
// });
// console.log(myFunc())



// 4 kyu - Undo/Redo

