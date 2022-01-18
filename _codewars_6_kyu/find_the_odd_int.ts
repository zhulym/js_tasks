// Given an array of integers, find the one that appears an odd number of times.

// !!!There will always be only one integer that appears an odd number of times!!!.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = (arr: number[]): number => {
  const result = {};
  arr.forEach(num => {
    if (result[num]) {
      result[num]++;
    } else {
      result[num] = 1;
    }
  });
  return +Object.keys(result).filter((value) => result[value] % 2 !== 0)[0];
};

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // 4
console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([1, 1, 2])); // 2
