const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the first number: ", function(num1) {
  rl.question("Enter the second number: ", function(num2) {
    rl.question("Enter the third number: ", function(num3) {
      // Convert the input to numbers (assuming valid input).
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      num3 = parseFloat(num3);

      // Find the largest of the three numbers.
      const largestNumber = findLargest(num1, num2, num3);

      // Display the largest number.
      console.log(`The largest number is ${largestNumber}`);

      rl.close();
    });
  });
});

function findLargest(a, b, c) {
  var largest = a;

  if (b > largest) {
    largest = b;
  }

  if (c > largest) {
    largest = c;
  }

  return largest;
}
