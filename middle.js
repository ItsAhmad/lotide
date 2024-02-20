const eqArrays = require('../eqArrays');


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

module.exports = middle;