const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a year: ", function(year) {
  // Convert the input to a numeric value (assuming valid input).
  year = parseInt(year);

  // Check if the year is a leap year.
  const isLeapYearResult = isLeapYear(year);

  // Display the result.
  console.log(`The year ${year} is ${isLeapYearResult ? "a leap year" : "not a leap year"}`);

  rl.close();
});

function isLeapYear(year) {
  // A year is a leap year if it is divisible by 4 and not divisible by 100.
  // However, if a year is divisible by 400, then it is a leap year.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
