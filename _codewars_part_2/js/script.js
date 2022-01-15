// // 1. Create function for checking a palindrome 

// function isPalindrome(str) {
//   let arr = str.split('');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[arr.length - i - 1]) {
//       return false
//     }
//   }
//   return true;
// }

// // second way
// function isPalindromeSecond(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome('текст')); // false
// console.log(isPalindrome('шалаш')); // true

// console.log(isPalindromeSecond('текст')); // false
// console.log(isPalindromeSecond('шалаш')); // true



// // 2. Find first the shortest word in string

// function findShortestWord(str) {
//   let word = str.split(' ')[0];
//   str.split(' ').forEach(el => {
//     if (el.length < word.length) {
//       word = el;
//     }
//   });
//   return word;
// }
// console.log(findShortestWord('The lord of the ring')); // of
// console.log(findShortestWord('Fallback font will used while loading')); // font

// // second way
// function findShortestWordSecond(str) {
//   return str.split(' ').sort((a, b) => a.length - b.length)[0];
// }
// console.log(findShortestWordSecond('The lord of the ring')); // of
// console.log(findShortestWordSecond('Fallback font will used while loading')); // font



// // 3. Create function for memoization
// const memo = (fn) => {
//   const cache = {};
//   return function (param) {
//     if (cache[param]) {
//       return cache[param];
//     } else {
//       const result = fn(param);
//       cache[param] = result;
//       return result;
//     }
//   }
// }

// // base function
// const toUpper = (str = '') => str.toUpperCase();
// // memoized base function
// const toUpperMemoized = memo(toUpper);

// console.log(toUpperMemoized('abc'));
// console.log(toUpperMemoized('abc'));
