const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqObjects = function (object1, object2) {

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };


eqObjects(shirtObject , anotherShirtObject); // => true
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject), ({color:"red", size:"medium"}));