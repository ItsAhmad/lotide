const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    console.log(false);
    return;
  }

  for (const key of object1Keys) {
    if (object1[key] !== object2[key]) {
      console.log(false);
      return;
    }
  }

  console.log(true);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject); // => false


//assertEqual(eqObjects(shirtObject, anotherShirtObject ), true);
//assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);