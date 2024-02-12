const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  
  return array1.every((val, index) => val === array2[index]);
  
};


const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }

  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const test1 = { a: 1, b: 'hello', c: true };
const test2 = { a: 1, b: 'hello', c: true };
assertObjectsEqual(test1, test2); // => True


const test3 = { x: [1, 2, 3], y: ['a', 'b', 'c'] };
const test4 = { x: [1, 2, 3], y: ['a', 'b', 'c'] };
assertObjectsEqual(test3, test4); // => True


const test5 = { a: 1, b: 'hello', c: true };
const test6 = { a: 1, b: 'world', c: true };
assertObjectsEqual(test5, test6); // => False

