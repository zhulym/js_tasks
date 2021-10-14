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
