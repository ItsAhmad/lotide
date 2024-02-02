

const diceRoller = function(number) {
  const diceOutput = []
  for (i = 0; i < number; i++) {
    const numberGen = Math.floor(Math.random() * 6) + 1;
    diceOutput.push(numberGen)
  }

  return diceOutput;
};

console.log(diceRoller(3));