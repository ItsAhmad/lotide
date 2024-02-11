const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqObjects = function (object1, object2) {
  const object1keys = object1.keys
  const object2keys = object2.keys

  if (object1.keys.length === object2.keys.length) {
    console.log(true)
  } else {
    console.log(false)
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false


//assertEqual(eqObjects(shirtObject, anotherShirtObject ), true);
//assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);


console.log(Object.keys(shirtObject)); // => returns ["color", "size"]
