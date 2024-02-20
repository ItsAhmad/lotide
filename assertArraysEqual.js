const eqArrays = require('../eqArrays');

  
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

module.exports = assertArraysEqual;
