const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  
  return true;
  
};

  
const assertArraysEqual = function(actual, expected) {

  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  }
};

const middle = function(array) {
  const middleArray = []; // middle array will return a brand new array

  if (array.length <= 2) { // if the array has 0, 1, or 2 entries in an array, it will not push anything to middleArray
    return middleArray;
  }

  if (array.length % 2 === 0) { // if array.length divided by 2 has no remainder, it has an even amount of entries
    middleArray.push(array[array.length / 2 - 1], array[array.length / 2]);
  } else {
    middleArray.push(array[Math.floor(array.length / 2)]);
  }

  return middleArray;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3, 4]));

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);