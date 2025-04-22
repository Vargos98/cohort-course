// 🔢 Number Parsing Handbook – Understand parseInt() and parseFloat()

// Method: parseInt()
// Description: Parses a string and returns the first whole number (integer) found at the beginning.
//              Ignores any characters after the number unless they prevent parsing.
// Requires: A string or value that starts with a number
// Output Example: 
//   "42" → 42
//   "42px" → 42
//   "3.14" → 3 (only the integer part is returned)
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value); 
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");      // Output: 42
explainParseInt("42px");    // Output: 42
explainParseInt("3.14");    // Output: 3


// Method: parseFloat()
// Description: Parses a string and returns the first decimal number found at the beginning.
//              Works similarly to parseInt but includes decimal places.
// Requires: A string or value that starts with a number (can include decimals)
// Output Example:
//   "3.14" → 3.14
//   "42" → 42
//   "42px" → 42
function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");   // Output: 3.14
explainParseFloat("42");     // Output: 42
explainParseFloat("42px");   // Output: 42
