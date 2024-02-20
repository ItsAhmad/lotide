const assertEqual = require('./assertEqual');

const tail = function(array) {
  const tailEnd = array.slice(1);
  return tailEnd;
};

module.exports = tail;