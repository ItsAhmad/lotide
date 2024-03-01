const eqArrays = require('./eqArrays.js');
  
const assertArraysEqual = function(actual, expected) {

  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  } else {

    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

//assertArraysEqual([1, 2, 3], [1, 2, 3]);
//assertArraysEqual([1, 2, 3], [3, 2, 1]);
//assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);

module.exports = assertArraysEqual;
