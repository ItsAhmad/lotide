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
    const middle1 = array.length / 2 - 1; // to get the first number, it divides in half, and then subtracts one since arrays start from 0
    const middle2 = array.length / 2; // the second number is simply half the array length
    middleArray.push(array[middle1], array[middle2]);
  } else {
    const middleEntry = Math.floor(array.length / 2); // if array.length is not even, it divides the array in half and takes pushes that index position to middleArray
    middleArray.push(array[middleEntry]);
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
