const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("removes the head of an array, leaving the 'tail' ", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] when given an empty array", () => {
    assert.deepEqual(tail([]), []); 
  });
});





/* 

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const result2 = tail(["testing2"]);
assertEqual(result2.length, 0);

const result3 = tail([]);
assertEqual(result3.length, 0);

const testArray = ["Hello", "Lighthouse", "Labs"];
const result4 = tail(testArray);
assertEqual(result4.length, 2);

*/