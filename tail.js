const tail = function(array) {
  const tailEnd = array.slice(1);
  return tailEnd;
};

const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      console.log("🛑🛑🛑 Assertion Failed: Arrays have different lengths.");
      return;
    }
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log("🛑🛑🛑 Assertion Failed: Arrays have different positioning.");
      return;
    }
  }

  console.log("✅✅✅ Assertion Passed: Array is matching.");
  
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

