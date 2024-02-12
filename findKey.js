const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  };
};


findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

const carBrands = {
  "BMW": { cars: 10 },
  "Mercedes-Benz": { cars: 15 },
  "Audi": { cars: 8 },
  "Toyota": { cars: 12 },
  "Honda": { cars: 6 }
};

const result = findKey(carBrands, brand => brand.cars === 15);
assertEqual(result, "Mercedes-Benz"); // "Mercedes-Benz"
