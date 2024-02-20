const assertEqual = require('./assertEqual');
const tail = require('../tail');


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
assertEqual(result4.length, 3);

