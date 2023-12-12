const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", function(number) {
  // Convert the input to a numeric value (assuming valid input).
  number = parseFloat(number);

  // Check whether the number is positive, negative, or zero.
  const result = checkNumber(number);

  // Display the result.
  console.log(`The number is ${result}.`);

  rl.close();
});

function checkNumber(number) {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
