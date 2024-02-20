const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns nothing when only one entry in array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] when only two entries", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });

  it("returns middle two entries when array is even numbers", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });

  it("returns middle number when array is odd numbers", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });

});



/*
console.log(middle([1])); // => []
assertArraysEqual(middle([1]), []);

console.log(middle([1, 2])); // => []
assertArraysEqual(middle([1, 2]), []);

console.log(middle([1, 2, 3, 4]));
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

console.log(middle([1, 2, 3])); // => [2]
assertArraysEqual(middle([1, 2, 3]), [2]);

console.log(middle([1, 2, 3, 4, 5])); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log(middle([1, 2, 3, 4])); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
*/