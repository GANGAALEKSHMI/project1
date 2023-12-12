const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", function(num1) {
  rl.question("Enter the second number: ", function(num2) {
    // Calculate the sum of the two numbers.
    const sumOfNumbers = parseInt(num1) + parseInt(num2);

    // Display the sum of the two numbers.
    console.log(`The sum of the two numbers is ${sumOfNumbers}`);

    rl.close();
  });
});
