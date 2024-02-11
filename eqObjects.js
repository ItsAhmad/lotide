const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const eqObjects = function (object1, object2) {
  const object1Keys = object1.keys(object1)
  const object2Keys = object2.keys(object2)
  if (object1Keys !== object2Keys) {
    console.log(false)
  } 

  for (const key of object1Keys) {
    if (object1[key] !== object2[key]) {
      console.log(false);
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



