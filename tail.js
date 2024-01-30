const tail = function(array) {
  const tailEnd = array.slice(1);
  return tailEnd;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
  

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
assertEqual(testArray.length, 3);