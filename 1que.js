// Create a new Date object to get the current date and time.
const currentDate = new Date();


// Get the current day and time components.
const currentDay = currentDate.toLocaleDateString(); // Format: MM/DD/YYYY
const currentTime = currentDate.toLocaleTimeString(); // Format: HH:MM:SS


// Display the current day and time.
console.log(`Current Day: ${currentDay}`);
console.log(`Current Time: ${currentTime}`);


