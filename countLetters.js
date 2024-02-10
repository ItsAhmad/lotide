const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function (allLetters, letterCount) {
  const results = {};

  for (const letter of allLetters) {
    if (letterCount[letter]) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
    console.log(letter);
  }

  return results;

};

console.log(countLetters("lighthouse in the house", {'e': true, 'o': true, 'u': true})); 

