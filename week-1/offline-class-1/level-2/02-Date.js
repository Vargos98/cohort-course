// --- JavaScript Date Methods Example ---
// Demonstrates how to get and set parts of a date using the Date object

function dateMethods() {
  // Create a new Date object representing the current date and time
  const currentDate = new Date();
  console.log("Current Date:", currentDate); // Example: 2025-04-22T...

  // --- Getting Components of the Date ---
  console.log("Date (Day of Month):", currentDate.getDate());        // e.g., 22
  console.log("Month (1-12):", currentDate.getMonth() + 1);          // Months are 0-indexed, so add 1 (e.g., 4 for April)
  console.log("Year:", currentDate.getFullYear());                   // e.g., 2025
  console.log("Hours:", currentDate.getHours());                     // e.g., 13
  console.log("Minutes:", currentDate.getMinutes());                 // e.g., 45
  console.log("Seconds:", currentDate.getSeconds());                 // e.g., 10

  // --- Setting Components of the Date ---
  currentDate.setFullYear(2022); // Change the year to 2022
  console.log("After setFullYear(2022):", currentDate);

  currentDate.setMonth(5); // Set the month to June (0 = Jan, so 5 = June)
  console.log("After setMonth(5):", currentDate);

  // --- Working with Milliseconds ---
  // Time since Jan 1, 1970 (Unix Epoch) in milliseconds
  console.log("Time in milliseconds since 1970:", currentDate.getTime());

  // --- Creating a New Date ---
  // Syntax: new Date(year, monthIndex, day)
  const newDate = new Date(2023, 8, 15); // Sept 15, 2023 (month index 8 = September)
  console.log("New Date (2023, 8, 15):", newDate);
}

// --- Example Usage ---
dateMethods();


// ✅ Key Concepts Explained:
// new Date(): Gets the current date and time.

// getDate(), getMonth(), etc.: Extract specific parts of the date.

// setFullYear(), setMonth(): Modify parts of the date.

// getTime(): Get the timestamp in milliseconds.

// new Date(y, m, d): Creates a specific date (months are 0-indexed!).